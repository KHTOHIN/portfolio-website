/**
 * Build-time SEO for the portfolio, driven by data/profile.ts:
 *  - injects <title>, meta, Open Graph, Twitter card and JSON-LD into index.html (dev + build)
 *  - emits dist/blog/<slug>.html per article with its own preview tags (crawlers don't run JS)
 *  - emits dist/sitemap.xml
 */
import fs from 'node:fs';
import path from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';
import { BLOG_POSTS, CURRENT_ROLE, EDUCATION, HERO, PERSONAL_INFO, SEO } from './data/profile';
import type { BlogPost } from './types';

const START = '<!-- seo:start -->';
const END = '<!-- seo:end -->';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  type: 'profile' | 'article';
  jsonLd: Record<string, unknown>;
}

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const absoluteUrl = (pathname: string) => `${SEO.siteUrl}${pathname}`;

const [firstName, ...lastNames] = PERSONAL_INFO.name.split(' ');

const person = {
  '@type': 'Person',
  name: PERSONAL_INFO.name,
  url: absoluteUrl('/'),
  image: absoluteUrl(SEO.ogImage),
  jobTitle: CURRENT_ROLE.role,
  worksFor: { '@type': 'Organization', name: CURRENT_ROLE.company },
  alumniOf: { '@type': 'CollegeOrUniversity', name: EDUCATION[0].institution },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  knowsAbout: HERO.coreTechnologies,
  sameAs: [PERSONAL_INFO.social.linkedin, PERSONAL_INFO.social.github],
};

const homePage: PageMeta = {
  title: SEO.title,
  description: SEO.description,
  path: '/',
  type: 'profile',
  jsonLd: { '@context': 'https://schema.org', ...person },
};

const articlePath = (post: BlogPost) => `/blog/${post.slug}`;

const articlePage = (post: BlogPost): PageMeta => ({
  title: `${post.title} | ${PERSONAL_INFO.name}`,
  description: post.summary,
  path: articlePath(post),
  type: 'article',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url: absoluteUrl(articlePath(post)),
    mainEntityOfPage: absoluteUrl(articlePath(post)),
    image: absoluteUrl(SEO.ogImage),
    articleSection: post.tag,
    author: person,
  },
});

const renderHead = (page: PageMeta): string => {
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(SEO.ogImage);
  const meta = (attr: 'name' | 'property', key: string, content: string) =>
    `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;

  return [
    `<title>${escapeAttr(page.title)}</title>`,
    meta('name', 'description', page.description),
    meta('name', 'author', PERSONAL_INFO.name),
    meta('name', 'robots', 'index, follow'),
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    meta('property', 'og:site_name', PERSONAL_INFO.name),
    meta('property', 'og:locale', 'en_US'),
    meta('property', 'og:type', page.type),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', image),
    meta('property', 'og:image:type', 'image/png'),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', SEO.ogImageAlt),
    ...(page.type === 'profile'
      ? [meta('property', 'profile:first_name', firstName), meta('property', 'profile:last_name', lastNames.join(' '))]
      : []),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', image),
    meta('name', 'twitter:image:alt', SEO.ogImageAlt),
    `<script type="application/ld+json">${JSON.stringify(page.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
};

const replaceHead = (html: string, head: string): string => {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1) {
    throw new Error(`vite-plugin-seo: "${START}" / "${END}" markers are missing from index.html`);
  }
  return `${html.slice(0, start + START.length)}\n    ${head}\n    ${html.slice(end)}`;
};

const sitemap = (): string => {
  const urls = ['/', ...BLOG_POSTS.map(articlePath)]
    .map(pathname => `  <url><loc>${absoluteUrl(pathname)}</loc></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

export function seoPlugin(): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'portfolio-seo',
    configResolved(resolved) {
      config = resolved;
    },
    transformIndexHtml: {
      order: 'pre',
      handler: html => replaceHead(html, renderHead(homePage)),
    },
    // Build only: dev serves index.html for /blog/* through Vite's SPA fallback.
    writeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const html = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');

      fs.mkdirSync(path.join(outDir, 'blog'), { recursive: true });
      for (const post of BLOG_POSTS) {
        fs.writeFileSync(path.join(outDir, 'blog', `${post.slug}.html`), replaceHead(html, renderHead(articlePage(post))));
      }
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap());
    },
  };
}

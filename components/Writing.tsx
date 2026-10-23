import React, { useEffect, useState } from 'react';
import { BLOG_POSTS, PERSONAL_INFO, SEO } from '../data/profile';
import { BlogPost } from '../types';
import { ArrowRight, BookOpen, Clock, X, Share2, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { readTime } from '../utils/text';
import { EchoTitle } from './ui/EchoTitle';

const BLOG_PATH = /^\/blog\/([^/]+)\/?$/;

const postFromPath = (pathname: string): BlogPost | null => {
  const match = pathname.match(BLOG_PATH);
  return match ? BLOG_POSTS.find(p => p.slug === match[1]) ?? null : null;
};

const postPath = (post: BlogPost) => `/blog/${post.slug}`;

export const Writing: React.FC = () => {
  const { isDark } = useTheme();
  const [activePost, setActivePost] = useState<BlogPost | null>(() => postFromPath(window.location.pathname));
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? BLOG_POSTS : BLOG_POSTS.slice(0, 3);

  // Keep the open article in sync with the URL (/blog/<slug>), including back/forward navigation.
  useEffect(() => {
    if (BLOG_PATH.test(window.location.pathname) && !postFromPath(window.location.pathname)) {
      window.history.replaceState(null, '', '/');
    }
    const onPopState = () => setActivePost(postFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.title = activePost ? `${activePost.title} | ${PERSONAL_INFO.name}` : SEO.title;
    if (!activePost) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePost();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activePost]);

  const openPost = (post: BlogPost) => {
    window.history.pushState({ blogSlug: post.slug }, '', postPath(post));
    setCopied(false);
    setActivePost(post);
  };

  const closePost = () => {
    if (window.history.state?.blogSlug) {
      // We pushed this entry when opening the article; going back restores the previous URL.
      window.history.back();
      return;
    }
    // Landed directly on /blog/<slug>: return to the home URL and show the Writing section.
    window.history.replaceState(null, '', '/');
    setActivePost(null);
    document.getElementById('blog')?.scrollIntoView();
  };

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, post: BlogPost) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    openPost(post);
  };

  const handleShare = async () => {
    if (!activePost) return;
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${postPath(activePost)}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (insecure context or denied permission); the URL bar already holds the link.
    }
  };

  return (
    <section id="blog" className={`py-20 md:py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-darker' : 'bg-slate-50'
    }`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <EchoTitle
            title="Writing & Talks"
            size="md"
            subtitle="// Engineering notes, system architecture deep-dives & lessons from production"
          />

          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${
            isDark ? 'bg-cyber-card border-cyber-border text-cyber-accent' : 'bg-white border-light-border text-light-accent shadow-sm'
          }`}>
            <BookOpen size={13} /> {BLOG_POSTS.length} Technical Articles
          </span>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((post, i) => (
            <a
              key={post.id}
              href={postPath(post)}
              onClick={(e) => handleCardClick(e, post)}
              className={`group min-w-0 text-left p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                isDark
                  ? 'bg-cyber-card/85 border-cyber-border hover:border-cyber-accent/60 shadow-lg shadow-black/20'
                  : 'bg-white border-light-border hover:border-light-accent/60 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${
                    isDark ? 'text-cyber-accent/60' : 'text-light-accent/60'
                  }`}>
                    #{String(i + 1).padStart(2, '0')}
                  </span>

                  <span className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isDark ? 'bg-cyber-dark text-cyan-300 border border-cyber-border' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Clock size={10} /> {readTime(post.body)}
                  </span>
                </div>

                <h3 className={`text-base font-bold font-mono mb-2 transition-colors line-clamp-2 ${
                  isDark ? 'text-white group-hover:text-cyber-accent' : 'text-light-heading group-hover:text-light-accent'
                }`}>
                  {post.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 ${
                  isDark ? 'text-cyber-text' : 'text-light-text'
                }`}>
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed flex flex-wrap items-center justify-between gap-2">
                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded ${
                  isDark ? 'bg-cyber-dark text-cyber-accent/80 border border-cyber-border' : 'bg-slate-50 text-light-accent border border-slate-200'
                }`}>
                  {post.tag}
                </span>

                <span className={`text-xs font-mono font-bold inline-flex items-center gap-1 transition-transform group-hover:translate-x-1 ${
                  isDark ? 'text-cyber-accent' : 'text-light-accent'
                }`}>
                  Read Deep Dive <ArrowRight size={13} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View All / Show Less Toggle Button */}
        {BLOG_POSTS.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center gap-2 px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border transition-all duration-300 ${
                isDark
                  ? 'border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 shadow-lg shadow-cyan-950/40'
                  : 'border-light-accent text-light-accent hover:bg-light-accent/10 shadow-md'
              }`}
            >
              {showAll ? (
                <>Show Less <ChevronUp size={15} /></>
              ) : (
                <>Show All ({BLOG_POSTS.length}) Articles <ChevronDown size={15} /></>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Interactive Article Reader Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-title"
        >
          <div className={`max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-9 rounded-2xl border relative shadow-2xl ${
            isDark ? 'bg-cyber-card border-cyber-accent/50 text-white shadow-cyan-950/80' : 'bg-white border-light-border text-slate-900 shadow-2xl'
          }`}>
            {/* Close Button */}
            <button
              onClick={closePost}
              className={`absolute top-5 right-5 p-2 rounded-lg border transition-colors ${
                isDark ? 'border-cyber-border text-cyber-text hover:text-white hover:bg-cyber-dark' : 'border-light-border text-slate-600 hover:bg-slate-100'
              }`}
              aria-label="Close article modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 mb-4 pr-12">
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-bold ${
                isDark ? 'bg-cyber-accent/15 text-cyber-accent border border-cyber-accent/30' : 'bg-light-accent/10 text-light-accent border border-light-accent/20'
              }`}>
                {activePost.tag}
              </span>

              <span className={`text-xs font-mono px-2.5 py-1 rounded-full flex items-center gap-1 ${
                isDark ? 'bg-cyber-dark text-slate-300' : 'bg-slate-100 text-slate-700'
              }`}>
                <Clock size={11} /> {readTime(activePost.body)}
              </span>
            </div>

            <h3 id="article-title" className="text-xl sm:text-2xl font-bold font-mono tracking-tight mb-4">
              {activePost.title}
            </h3>

            <p className={`text-sm italic pb-4 mb-6 border-b ${
              isDark ? 'border-cyber-border text-cyan-300/80' : 'border-slate-200 text-teal-700'
            }`}>
              By {PERSONAL_INFO.name} • {PERSONAL_INFO.shortRole}
            </p>

            {/* Article Content */}
            <div className={`space-y-4 text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {activePost.body.map((paragraph, idx) => (
                <p key={idx} className={paragraph.startsWith('•') || paragraph.match(/^\d\./) ? 'font-mono text-xs pl-2' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer / Actions */}
            <div className="mt-8 pt-6 border-t border-dashed flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleShare}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                  isDark ? 'bg-cyber-dark border-cyber-border text-cyber-text hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {copied ? <><Check size={13} className="text-emerald-400" /> Copied link</> : <><Share2 size={13} /> Share Article</>}
              </button>

              <button
                onClick={closePost}
                className={`px-5 py-2 text-xs font-mono font-bold uppercase rounded-lg border transition-all ${
                  isDark ? 'bg-cyber-accent text-cyber-darker border-cyber-accent' : 'bg-light-accent text-white border-light-accent'
                }`}
              >
                Close Deep Dive
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

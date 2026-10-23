/** Initials from the first two words, ignoring punctuation and credentials: "MD.NUR-A-ALAM (PMP)" -> "MN". */
export const initials = (name: string): string =>
  name
    .split(/[^\p{L}]+/u)
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('');

export const wordCount = (paragraphs: string[]): number =>
  paragraphs.join(' ').split(/\s+/).filter(Boolean).length;

export const readTime = (paragraphs: string[], wordsPerMinute = 220): string =>
  `${Math.max(1, Math.ceil(wordCount(paragraphs) / wordsPerMinute))} min read`;

/** Whole years elapsed since an ISO month ("2020-10"). */
export const yearsSince = (isoMonth: string, now: Date = new Date()): number => {
  const [year, month] = isoMonth.split('-').map(Number);
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.floor(months / 12);
};

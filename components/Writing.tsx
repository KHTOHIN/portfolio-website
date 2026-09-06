import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, BookOpen, Clock, Tag, X, Sparkles, Share2, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Writing: React.FC = () => {
  const { isDark } = useTheme();
  const [activePost, setActivePost] = useState<typeof BLOG_POSTS[0] | null>(null);
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? BLOG_POSTS : BLOG_POSTS.slice(0, 3);

  const articleDetails: Record<string, { readTime: string; tag: string; body: string[] }> = {
    "1": {
      readTime: "5 min read",
      tag: "Database & SQL",
      body: [
        "In national government portals handling millions of citizen records, unoptimized queries can quickly bring servers to a halt during peak renewal deadlines.",
        "Key Optimization Strategies:",
        "1. Composite Indexing: Adding composite indexes matching the exact WHERE and ORDER BY clauses drastically cut execution time from 4.2s to 120ms.",
        "2. Query Refactoring: Eliminating subqueries inside loops and replacing them with optimized INNER JOINs and batch fetching.",
        "3. Read-Write Splitting: Directing heavy reporting modules to replica instances, keeping primary master database lightning fast for citizen transactions.",
        "Outcome: Achieved 25% to 30% overall response time improvement across high-traffic agricultural modules."
      ]
    },
    "2": {
      readTime: "6 min read",
      tag: "Laravel & Enterprise",
      body: [
        "Designing the 5-year multi-stage license renewal engine for CCI&E (Chief Controller of Imports & Exports) required strict state machines and transactional workflows.",
        "Architecture Highlights:",
        "• State Machine Pattern: Modeled application lifecycle (Applied -> Payment Verified -> Officer Review -> Approved -> Certificate Generated) to prevent invalid state jumps.",
        "• Idempotent Payment Webhooks: Protected against double renewals through transactional locks and unique bank transaction hash validations.",
        "• Dynamic Fee Calculation: Computed tiered renewal fees spanning 1 to 5 years with automatic late-penalty surcharges."
      ]
    },
    "3": {
      readTime: "4 min read",
      tag: "Linux & DevOps",
      body: [
        "Running enterprise PHP backends on Linux servers requires rock-solid daemon management, automated cron scheduling, and proactive log monitoring.",
        "Key Server Recipes:",
        "• Custom Bash & Cron Scripts: Automated nightly off-site database backups with encryption and retention pruning.",
        "• Memory Leak Prevention: Scheduled periodic PHP-FPM process pool cycling and tuned `pm.max_children` based on available RAM.",
        "• Security Hardening: Configured fail2ban, isolated web server users, and enforced strict file permission policies."
      ]
    },
    "4": {
      readTime: "7 min read",
      tag: "System Architecture",
      body: [
        "Transitioning monolithic legacy codebases to modular microservices requires pragmatic decomposition without disrupting active production users.",
        "Architecture Patterns Applied:",
        "• Repository Pattern: Decoupled business logic from database layers, making modules independently testable and portable.",
        "• Singleton & Service Layer: Ensured thread-safe shared resources and centralized API integrations.",
        "• Asynchronous Queue Processing: Offloaded long-running PDF generation and SMS dispatching to background worker queues."
      ]
    },
    "5": {
      readTime: "5 min read",
      tag: "Security & Cryptography",
      body: [
        "Government export certificates must guarantee authenticity and tamper-proof verification across international borders.",
        "Implementation Insights:",
        "• X.509 Digital Certificates: Integrated cryptographic signing directly into PDF generation pipelines using OpenSSL and PHP extensions.",
        "• QR Code Verification: Embedded signed, encrypted payloads inside 2D QR codes on each certificate for instant border scanning.",
        "• ClamAV Antivirus Integration: Automated malware and virus scanning on all user-uploaded business trade documents."
      ]
    },
    "6": {
      readTime: "5 min read",
      tag: "Code Quality & Debugging",
      body: [
        "Debugging legacy codebases with hundreds of thousands of lines of code requires structured diagnostics over random trial-and-error.",
        "Practical Methodologies:",
        "• Structured Logging: Replacing blind echo statements with categorized Monolog channels with full stack traces and contextual session IDs.",
        "• SQL Query Profiling: Utilizing MySQL Slow Query Log and EXPLAIN ANALYZE to pinpoint exact bottleneck indexes.",
        "• Unit & Regression Tests: Writing regression tests before touching legacy modules to prevent inadvertent regressions."
      ]
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <div>
            <div className="relative">
              <h2 className={`text-4xl md:text-5xl font-black font-mono tracking-tight ${
                isDark ? 'text-cyber-accent' : 'text-light-accent'
              }`}>
                Writing & Talks
              </h2>
              <h2 className={`text-4xl md:text-5xl font-black font-mono absolute top-1 left-0 opacity-20 select-none pointer-events-none ${
                isDark ? 'text-cyber-accent' : 'text-light-accent'
              }`}>
                Writing & Talks
              </h2>
            </div>
            <p className={`mt-4 font-mono text-xs uppercase tracking-widest ${
              isDark ? 'text-cyber-text/70' : 'text-light-text/70'
            }`}>
              // Engineering notes, system architecture deep-dives & lessons from production
            </p>
          </div>

          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${
            isDark ? 'bg-cyber-card border-cyber-border text-cyber-accent' : 'bg-white border-light-border text-light-accent shadow-sm'
          }`}>
            <BookOpen size={13} /> {BLOG_POSTS.length} Technical Articles
          </span>
        </div>

        {/* Article Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((post, i) => {
            const meta = articleDetails[post.id] || { readTime: "4 min read", tag: "Engineering", body: [] };

            return (
              <button
                key={post.id}
                onClick={() => setActivePost(post)}
                className={`group text-left p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
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
                      <Clock size={10} /> {meta.readTime}
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

                <div className="pt-4 border-t border-dashed flex items-center justify-between">
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded ${
                    isDark ? 'bg-cyber-dark text-cyber-accent/80 border border-cyber-border' : 'bg-slate-50 text-light-accent border border-slate-200'
                  }`}>
                    {meta.tag}
                  </span>

                  <span className={`text-xs font-mono font-bold inline-flex items-center gap-1 transition-transform group-hover:translate-x-1 ${
                    isDark ? 'text-cyber-accent' : 'text-light-accent'
                  }`}>
                    Read Deep Dive <ArrowRight size={13} />
                  </span>
                </div>
              </button>
            );
          })}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className={`max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-9 rounded-2xl border relative shadow-2xl ${
            isDark ? 'bg-cyber-card border-cyber-accent/50 text-white shadow-cyan-950/80' : 'bg-white border-light-border text-slate-900 shadow-2xl'
          }`}>
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className={`absolute top-5 right-5 p-2 rounded-lg border transition-colors ${
                isDark ? 'border-cyber-border text-cyber-text hover:text-white hover:bg-cyber-dark' : 'border-light-border text-slate-600 hover:bg-slate-100'
              }`}
              aria-label="Close article modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-bold ${
                isDark ? 'bg-cyber-accent/15 text-cyber-accent border border-cyber-accent/30' : 'bg-light-accent/10 text-light-accent border border-light-accent/20'
              }`}>
                {articleDetails[activePost.id]?.tag || 'Engineering Article'}
              </span>

              <span className={`text-xs font-mono px-2.5 py-1 rounded-full flex items-center gap-1 ${
                isDark ? 'bg-cyber-dark text-slate-300' : 'bg-slate-100 text-slate-700'
              }`}>
                <Clock size={11} /> {articleDetails[activePost.id]?.readTime || '5 min read'}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight mb-4">
              {activePost.title}
            </h3>

            <p className={`text-sm italic pb-4 mb-6 border-b ${
              isDark ? 'border-cyber-border text-cyan-300/80' : 'border-slate-200 text-teal-700'
            }`}>
              By Kawsar Hamid • Software Engineer I
            </p>

            {/* Article Content */}
            <div className={`space-y-4 text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {articleDetails[activePost.id]?.body.map((paragraph, idx) => (
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
                onClick={() => setActivePost(null)}
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

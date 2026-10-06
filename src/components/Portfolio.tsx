import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { COLOR_THEMES } from '../data/presets';
import { Briefcase, TrendingUp, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  portfolio: PortfolioItem[];
  themeId: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ portfolio, themeId }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.blue;

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(portfolio.map(p => p.category)))];

  const filteredItems = activeCategory === 'all'
    ? portfolio
    : portfolio.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Briefcase className="w-4 h-4" />
            <span>سجل الإنجازات والنتائج</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            نماذج من أعمالنا ومشاريعنا الناجحة
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            نتائج حقيقية حققناها لعملائنا في مختلف المجالات، نعتز بها كبرهان قاطع على جودة ما نقدمه.
          </p>

          {/* Filter segment tabs */}
          {categories.length > 2 && (
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'جميع الأعمال' : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Chip */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Results callout */}
              {item.results && (
                <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>{item.results}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

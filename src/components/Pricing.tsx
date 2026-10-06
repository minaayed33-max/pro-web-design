import React from 'react';
import { PricingTier } from '../types';
import { COLOR_THEMES } from '../data/presets';
import { Check, Zap, ArrowLeft, MessageCircle } from 'lucide-react';

interface PricingProps {
  pricingTiers: PricingTier[];
  currency: string;
  themeId: string;
  whatsapp: string;
  businessName: string;
}

export const Pricing: React.FC<PricingProps> = ({
  pricingTiers,
  currency,
  themeId,
  whatsapp,
  businessName,
}) => {
  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.blue;
  const whatsappClean = whatsapp.replace(/[^0-9]/g, '');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            <span>باقات وأسعار شفافة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            اختر الباقة الأنسب لأهدافك
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            خيارات استثمارية مدروسة تناسب مختلف مراحل الأعمال مع ضمان تحقيق أعلى قيمة وعائد.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'bg-slate-900 border-2 shadow-2xl scale-100 lg:-translate-y-2'
                  : 'bg-slate-900/70 border border-slate-800'
              }`}
              style={{
                borderColor: tier.popular ? theme.primary : undefined,
              }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div 
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black text-white shadow-lg tracking-wide uppercase"
                  style={{ backgroundColor: theme.primary }}
                >
                  الأكثر طلباً واختياراً ★
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-black text-white mb-2">{tier.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tier.description}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 pt-2 border-t border-slate-800/80">
                  <span className="text-4xl font-black text-white tracking-tight">{tier.price}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">
                    {currency} / {tier.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-6 border-t border-slate-800/80">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    المزايا المشمولة:
                  </div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-slate-800/80">
                <a
                  href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('مرحباً ' + businessName + '، أود الاشتراك في ' + tier.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-center text-sm transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? `${theme.buttonBg} shadow-lg shadow-brand/20 hover:scale-[1.02]`
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-100'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{tier.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

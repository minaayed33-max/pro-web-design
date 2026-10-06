import React from 'react';
import { ClientWebsiteData } from '../types';
import { COLOR_THEMES } from '../data/presets';
import { Check, Shield, Award, Users } from 'lucide-react';

interface AboutProps {
  data: ClientWebsiteData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  const theme = COLOR_THEMES[data.themeId] || COLOR_THEMES.blue;

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl group">
              <img
                src={data.aboutImage}
                alt={data.aboutTitle}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* Overlay quote */}
              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-right">
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  "التزامنا بالجودة والاحترافية هو سر ثقة عملائنا المستمرة عاماً بعد عام."
                </p>
                <div className="mt-2 text-[11px] font-bold text-amber-400">
                  {data.businessName}
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -right-4 bg-slate-900/95 border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-white">خبرة مثبتة</div>
                <div className="text-xs text-slate-400">وفريق عمل معتمد</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <Shield className="w-4 h-4" />
              <span>نبذة عن الشركة ومسيرتنا</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.25]">
              {data.aboutTitle}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {data.aboutStory}
            </p>

            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">رؤيتنا المستقبلية:</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {data.aboutVision}
              </p>
            </div>

            {/* Bullets with checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {data.aboutBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 leading-normal">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className={`px-6 py-3 rounded-xl font-bold text-sm ${theme.buttonBg} shadow-lg transition-transform hover:scale-105`}
              >
                تحدث مع المستشار المختص
              </a>
              <a
                href="#portfolio"
                className="text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4"
              >
                مشاهدة سابقة الأعمال
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ClientWebsiteData } from '../types';
import { COLOR_THEMES } from '../data/presets';
import { 
  ArrowLeft, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Star,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  data: ClientWebsiteData;
  onOpenEditor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenEditor }) => {
  const theme = COLOR_THEMES[data.themeId] || COLOR_THEMES.blue;
  const whatsappClean = data.contactInfo.whatsapp.replace(/[^0-9]/g, '');

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Dynamic ambient background glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ backgroundColor: theme.primary }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            
            {/* Pill-less subtle badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold ${theme.badgeBg} border ${theme.badgeBorder} shadow-sm`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{data.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              {data.tagline}
            </h1>

            {/* Sub-tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {data.subTagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className={`px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base ${theme.buttonBg} shadow-xl shadow-brand/20 transition-all hover:scale-105 flex items-center justify-center gap-2 text-center`}
              >
                <span>طلب الخدمة أو الاستشارة</span>
                <ArrowLeft className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن تفاصيل خدمات ' + data.businessName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-600/90 hover:bg-emerald-600 text-white transition-all hover:scale-105 flex items-center justify-center gap-2 border border-emerald-500/30 shadow-lg shadow-emerald-900/30 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>محادثة واتساب سريعة</span>
              </a>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all hover:text-white text-center"
              >
                استعراض الخدمات
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ضمان الجودة ورضا العملاء</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>سرعة استجابة في أقل من 15 دقيقة</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>عقود رسمية والتزام تعاقدي</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 group bg-slate-800">
              <img
                src={data.heroImage}
                alt={data.businessName}
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Floating review card inside hero image */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center pointer-events-none">
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>تقييم ممتاز 4.9 من 5</span>
                </div>
              </div>

              {/* Bottom Card Info */}
              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{data.businessName}</h3>
                    <p className="text-xs text-slate-300">{data.businessCategory}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>متاح لاستقبال الطلبات</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

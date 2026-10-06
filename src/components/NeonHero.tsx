import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Smartphone, 
  ArrowLeft,
  Flame,
  Zap,
  ShieldAlert
} from 'lucide-react';

interface NeonHeroProps {
  lang: 'ar' | 'en';
  onOpenOrderModal: () => void;
}

export const NeonHero: React.FC<NeonHeroProps> = ({ lang, onOpenOrderModal }) => {
  const isAr = lang === 'ar';
  const whatsappUrl = `https://wa.me/201554232400?text=${encodeURIComponent('مرحباً مهندس مينا عايد، أود طلب تصميم موقع احترافي لعملي.')}`;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Headline & Description (in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0d1627] text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>{isAr ? 'تقنية 2026 • مواقع فائقة السرعة بقوة الذكاء الاصطناعي' : 'Tech 2026 • Ultra-Fast AI Powered Websites'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              {isAr ? (
                <>
                  مواقع إلكترونية ذكية <br />
                  تجمع بين <span className="text-cyan-400">روعة</span> التصميم <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                    وسرعة البيع
                  </span>
                </>
              ) : (
                <>
                  Smart Websites <br />
                  Blending <span className="text-cyan-400">Stunning</span> Design <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    With Explosive Sales
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {isAr
                ? 'نصمم لك موقعاً رقمياً مبهراً يلفت الأنظار، متوافقاً 100% مع الهواتف الذكية وسريع التحميل، ومجهزاً بأزرار الواتساب والاتصال المباشر لتحويل زوارك إلى عملاء فعليين.'
                : 'We craft stunning digital websites that turn heads, 100% mobile-friendly and ultra-fast, equipped with direct WhatsApp & call buttons to convert your visitors into paying customers.'}
            </p>

            {/* Direct Call / Contact Button */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-black text-base bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 fill-slate-950" />
                <span>{isAr ? 'تواصل معي واطلب موقعك الآن' : 'Contact Me & Order Your Site Now'}</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics Counter Bar */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-xs sm:text-sm">
              <div className="space-y-0.5">
                <div className="text-xs text-slate-400">{isAr ? 'سرعة التحميل' : 'Loading Speed'}</div>
                <div className="text-base font-black text-cyan-400">0.32 {isAr ? 'ثانية' : 'sec'}</div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xs text-slate-400">{isAr ? 'توافق الهواتف' : 'Mobile Compatibility'}</div>
                <div className="text-base font-black text-purple-400">100% {isAr ? 'استجابة' : 'Responsive'}</div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xs text-slate-400">{isAr ? 'معدل رضا العملاء' : 'Customer Satisfaction'}</div>
                <div className="text-base font-black text-emerald-400">99.8% {isAr ? 'تقييم' : 'Rating'}</div>
              </div>
            </div>

          </div>

          {/* Left Column: Dark Floating Showcase Card (in RTL) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-[#0b101c]/90 border border-slate-800/90 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl space-y-6">
              
              {/* Card Top Row */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-400">
                    {isAr ? 'جاهز للتسليم خلال أسبوع' : 'Ready For Delivery Within 1 Week'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <span>{isAr ? 'باقة تصميم وبرمجة موقع احترافي' : 'Pro Website Package'}</span>
                </div>
              </div>

              {/* Title & Price Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-cyan-400 block mb-1">
                    {isAr ? 'باقة موقع تجاري متكامل' : 'Complete Business Site Package'}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {isAr ? 'المحترف لتصميم المواقع' : 'Pro Web Design'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isAr ? 'تصميم مواقع وتطبيقات الذكاء الاصطناعي' : 'Web Design & AI Applications'}
                  </p>
                </div>

                <div className="text-left rtl:text-left space-y-1">
                  <div className="text-[10px] text-slate-400 font-semibold">{isAr ? 'سعر الباقة بعد الخصم' : 'Discounted Package Price'}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-emerald-400">
                      {isAr ? '6,500 ج.م' : '6,500 EGP'}
                    </span>
                    <del className="text-xs text-slate-500">
                      {isAr ? '8,500 ج.م' : '8,500 EGP'}
                    </del>
                  </div>
                  <div className="text-[11px] font-bold text-cyan-300">
                    {isAr ? '( يعادل 135$ بدلاً من 175$ )' : '( Approx $135 instead of $175 )'}
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    <Flame className="w-3 h-3 text-amber-400" />
                    <span>{isAr ? '🔥 خصم خاص 2,000 ج.م لفترة محدودة' : '🔥 2,000 EGP ($40) Limited Discount'}</span>
                  </div>
                </div>
              </div>

              {/* Checklist 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">{isAr ? 'متوافق 100% مع الهواتف والآيفون' : '100% Mobile & iPhone Friendly'}</span>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">{isAr ? 'ربط مباشر بزر واتساب للطلبات' : 'Direct WhatsApp Order Link'}</span>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">{isAr ? 'سرعة فتح قياسية (أقل من نصف ثانية)' : 'Record Speed (< 0.5s)'}</span>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">{isAr ? 'حماية مشفرة ضد السرقة والقرصنة' : 'Encrypted Anti-Theft Security'}</span>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>{isAr ? 'طلب الموقع الآن على الواتساب' : 'Order Website Now on WhatsApp'}</span>
                </a>
              </div>

              {/* Signature & Status */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
                <span className="font-bold text-slate-300">
                  {isAr ? 'تطوير وتنفيذ المهندس: مينا عايد (Mina Ayed)' : 'Developed by Eng. Mina Ayed'}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{isAr ? 'الموقع يعمل بكفاءة 100%' : '100% Operational'}</span>
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

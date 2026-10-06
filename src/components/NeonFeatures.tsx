import React, { useState } from 'react';
import { 
  BookOpen, 
  Smartphone, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  RotateCcw, 
  CheckCircle2 
} from 'lucide-react';

interface NeonFeaturesProps {
  lang: 'ar' | 'en';
}

export const NeonFeatures: React.FC<NeonFeaturesProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [aiTestRun, setAiTestRun] = useState(false);
  const [securityTestRun, setSecurityTestRun] = useState(false);

  const handleRunAiCheck = () => {
    setAiTestRun(true);
    setTimeout(() => setAiTestRun(false), 2000);
  };

  const handleRunSecurityCheck = () => {
    setSecurityTestRun(true);
    setTimeout(() => setSecurityTestRun(false), 2000);
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0d1627] text-cyan-400 border border-cyan-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isAr ? 'مميزات الموقع للعملاء' : 'Website Features For Clients'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {isAr
              ? '4 ركائز تضمن نجاح موقعك وتفوقه على المنافسين'
              : '4 Core Pillars Guaranteeing Your Website Success & Market Dominance'}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {isAr
              ? 'كل ما يحتاجه نشاطك التجاري ليظهر بأرقى مظهر ويزيد مبيعاتك وأرباحك من اليوم الأول.'
              : 'Everything your business needs to appear with prestigious look and scale sales from Day 1.'}
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: RESPONSIVE // 01 */}
          <div className="p-7 rounded-3xl bg-[#0c111e]/90 border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-cyan-400 border border-cyan-500/30 bg-cyan-950/40">
                  RESPONSIVE // 01
                </span>
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white">
                {isAr ? 'استجابة فائقة السرعة على الموبايل' : 'Ultra-Fast Mobile Responsiveness'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? 'أكثر من 85% من عملائك يتصفحون من الهاتف. نضمن أن يفتح موقعك بسلاسة وسرعة خيالية على جميع الشاشات بدون أي تقطيع.'
                  : 'Over 85% of your customers browse on smartphones. We ensure seamless fluidity and lightning speed on every screen without any lags.'}
              </p>
            </div>

            {/* Performance Visual Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-cyan-400">
                <span>{isAr ? 'سرعة التحميل على الهاتف:' : 'Mobile Load Speed:'}</span>
                <span className="font-bold">0.34s {isAr ? '(أسرع 10x)' : '(10x Faster)'}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full w-[94%] shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Loss: 0.00%</span>
                <span className="text-slate-300 font-bold">Google Lighthouse: 99/100</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI DRIVEN // 02 */}
          <div className="p-7 rounded-3xl bg-[#0c111e]/90 border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-purple-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-purple-400 border border-purple-500/30 bg-purple-950/40">
                  AI DRIVEN // 02
                </span>
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white">
                {isAr ? 'تصميم ذكي يجذب العملاء والمبيعات' : 'Smart Conversion-Driven Design'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? 'تصميم واجهات مبهرة ومدروسة سيكولوجياً لجعل العميل يضغط على زر الطلب والاتصال دون تردد، مما يرفع نسبة مبيعاتك.'
                  : 'Visually captivating UI crafted with consumer psychology, prompting customers to tap the order and call buttons without hesitation.'}
              </p>
            </div>

            {/* Interactive Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between text-purple-300">
                <span className="text-slate-400">{isAr ? 'حالة فحص التصميم:' : 'Design Audit:'}</span>
                <span className="font-bold">{isAr ? 'تصميم مثالي وناجح' : 'Optimal High-Converting'}</span>
              </div>

              <button
                onClick={handleRunAiCheck}
                className="w-full py-2.5 px-3 rounded-xl bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/40 text-purple-200 font-bold flex items-center justify-center gap-2 transition-all"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${aiTestRun ? 'animate-spin' : ''}`} />
                <span>{aiTestRun ? (isAr ? 'جاري الفحص السيكولوجي...' : 'Auditing...') : (isAr ? 'فحص جاهزية الموقع للبيع' : 'Test Conversion Readiness')}</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                <span>{isAr ? 'معدل التحويل: ممتاز' : 'CR: Excellent'}</span>
                <span className="text-slate-300">{isAr ? 'الدقة: 99.9%' : 'Accuracy: 99.9%'}</span>
              </div>
            </div>
          </div>

          {/* Card 3: SEO & SPEED // 03 */}
          <div className="p-7 rounded-3xl bg-[#0c111e]/90 border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-emerald-400 border border-emerald-500/30 bg-emerald-950/40">
                  SEO & SPEED // 03
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white">
                {isAr ? 'متوافق مع محركات البحث (SEO)' : 'Search Engine Optimized (SEO)'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? 'تهيئة كاملة للظهور في الصفحة الأولى على جوجل عندما يبحث العملاء عن خدماتك أو منتجاتك في مدينتك.'
                  : 'Full optimization to rank on Google’s first page when potential clients search for your services or products.'}
              </p>
            </div>

            {/* Performance Indicators */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="text-slate-400">{isAr ? 'مؤشرات الأداء على جوجل:' : 'Google Performance Signals:'}</div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-300">{isAr ? '1. سرعة تحميل الصفحة' : '1. Page Load Time'}</span>
                  <span className="text-emerald-400 font-bold">0.14s</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full w-[96%] shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-300">{isAr ? '2. استقرار الواجهة' : '2. Layout Shift'}</span>
                  <span className="text-cyan-400 font-bold">0.00 {isAr ? '(مثالي)' : '(Zero)'}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full w-[100%] shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: SECURITY // 04 */}
          <div className="p-7 rounded-3xl bg-[#0c111e]/90 border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-cyan-400 border border-cyan-500/30 bg-cyan-950/40">
                  SECURITY // 04
                </span>
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white">
                {isAr ? 'حماية مشفرة واستقرار 24/7' : 'Encrypted Security & 24/7 Uptime'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? 'موقعك محمي بالكامل بسيرفرات سحابية آمنة مع نظام قفل بكلمة مرور واسم مستخدم لمنع أي شخص من سرقة تصميمك أو بياناتك.'
                  : 'Your site is shielded on enterprise cloud servers with encrypted architecture preventing theft of your code or database.'}
              </p>
            </div>

            {/* Security Indicator Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>{isAr ? 'حالة السيرفر والأمان:' : 'Server Security Status:'}</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? 'مشفر ومحمي 100%' : '100% Encrypted'}</span>
                </span>
              </div>

              <button
                onClick={handleRunSecurityCheck}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-700/80 text-slate-200 font-bold flex items-center justify-center gap-2 transition-all font-mono"
              >
                <span>{securityTestRun ? (isAr ? 'فحص السيرفر السحابي...' : 'Checking Cloud...') : (isAr ? 'اختبار التعافي الذاتي للبيانات' : 'Run Data Self-Healing Test')}</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                <span className="text-emerald-400">{isAr ? 'الحماية: نشطة' : 'Firewall: Active'}</span>
                <span>{isAr ? 'زمن الإصلاح: أقل من 15ms' : 'Failover: < 15ms'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

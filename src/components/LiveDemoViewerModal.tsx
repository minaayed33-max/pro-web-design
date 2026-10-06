import React, { useState, useEffect } from 'react';
import { PresetKey, ClientWebsiteData } from '../types';
import { PRESETS_DATA, COLOR_THEMES } from '../data/presets';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Laptop, 
  Smartphone, 
  MessageCircle, 
  ExternalLink,
  Phone,
  Check,
  Star,
  ChevronDown,
  Sparkles,
  Award,
  Shield,
  Clock,
  Layers,
  AlertTriangle
} from 'lucide-react';

interface LiveDemoViewerModalProps {
  presetKey: PresetKey | null;
  onClose: () => void;
  lang: 'ar' | 'en';
}

const DEMO_TABS: Array<{ key: PresetKey; labelAr: string; labelEn: string; iconText: string }> = [
  { key: 'medical', labelAr: 'مجمع طبي وعيادات', labelEn: 'Medical Center', iconText: '🏥' },
  { key: 'contracting', labelAr: 'شركة مقاولات وهندسة', labelEn: 'Contracting Company', iconText: '🏗️' },
  { key: 'restaurant', labelAr: 'مطعم وكافيه', labelEn: 'Restaurant & Cafe', iconText: '☕' },
  { key: 'tech', labelAr: 'شركة برمجيات ومتجر', labelEn: 'Software & Store', iconText: '💻' },
  { key: 'law', labelAr: 'مكتب محاماة واستشارات', labelEn: 'Law Firm', iconText: '⚖️' },
  { key: 'marketing', labelAr: 'وكالة تسويق وإعلانات', labelEn: 'Marketing Agency', iconText: '🚀' },
];

export const LiveDemoViewerModal: React.FC<LiveDemoViewerModalProps> = ({
  presetKey,
  onClose,
  lang,
}) => {
  const [currentKey, setCurrentKey] = useState<PresetKey>(presetKey || 'medical');
  const [viewDevice, setViewDevice] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    if (presetKey) {
      setCurrentKey(presetKey);
    }
  }, [presetKey]);

  if (!presetKey) return null;

  const data: ClientWebsiteData = PRESETS_DATA[currentKey] || PRESETS_DATA.marketing;
  const theme = COLOR_THEMES[data.themeId] || COLOR_THEMES.blue;
  const isAr = lang === 'ar';

  const minaWhatsappUrl = `https://wa.me/201554232400?text=${encodeURIComponent(
    'مرحباً مهندس مينا عايد، أعجبني ديمو (' + data.businessName + ') وأود طلب تصميم موقع احترافي مماثل لنشاطي التجاري.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/95 backdrop-blur-2xl flex flex-col animate-in fade-in">
      
      {/* Top Demo Bar */}
      <header className="h-16 px-3 sm:px-6 bg-[#090d16] border-b border-slate-800 flex items-center justify-between shrink-0 z-50 gap-2">
        
        {/* Left: Close and Back */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors shrink-0 shadow-sm"
          >
            <ArrowRight className="w-4 h-4 rtl:rotate-0 rotate-180" />
            <span className="hidden xs:inline">{isAr ? 'العودة للموقع الرئيسي' : 'Back to Pro Web Design'}</span>
            <span className="xs:hidden">{isAr ? 'رجوع' : 'Back'}</span>
          </button>

          <div className="hidden lg:flex items-center gap-2 pr-3 border-r border-slate-700 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400">{isAr ? 'ديمو حي فعال:' : 'Active Live Demo:'}</span>
            <span className="font-bold text-cyan-400">{data.businessName}</span>
          </div>
        </div>

        {/* Center: Device Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
          <button
            onClick={() => setViewDevice('desktop')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              viewDevice === 'desktop'
                ? 'bg-cyan-500 text-slate-950 shadow-sm font-black'
                : 'text-slate-400 hover:text-white'
            }`}
            title={isAr ? 'عرض شاشة كمبيوتر' : 'Desktop View'}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isAr ? 'كمبيوتر' : 'Desktop'}</span>
          </button>
          
          <button
            onClick={() => setViewDevice('mobile')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              viewDevice === 'mobile'
                ? 'bg-cyan-500 text-slate-950 shadow-sm font-black'
                : 'text-slate-400 hover:text-white'
            }`}
            title={isAr ? 'عرض شاشة موبايل' : 'Mobile View'}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isAr ? 'موبايل' : 'Mobile'}</span>
          </button>
        </div>

        {/* Right: CTA to order a site like this */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={minaWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span className="hidden md:inline">{isAr ? 'اطلب موقعاً مثل هذا لنشاطك' : 'Order A Site Like This'}</span>
            <span className="md:hidden">{isAr ? 'طلب مثله' : 'Order'}</span>
          </a>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            title={isAr ? 'إغلاق المعاينة' : 'Close Preview'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </header>

      {/* Prominent Modern Orange Legal Disclaimer Banner */}
      <div className="bg-gradient-to-r from-[#2a1304] via-[#3a1b06] to-[#2a1304] border-b border-amber-500/50 py-2.5 px-4 text-center shrink-0 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="px-2 py-0.5 rounded-md bg-amber-500/25 text-amber-300 border border-amber-400/50 text-[10px] font-black shrink-0">
            تنبيه استرشادي وقانوني
          </span>
          <span className="leading-snug">
            هذا مثال للمعرفة وتوضيح التصميم الفني فقط وليست بيانات حقيقية • كافة الأسماء والصور والأنشطة والعناوين افتراضية تماماً لتوضيح إمكانيات الموقع للعملاء وتجنب أي تشابه أو مساءلة قانونية.
          </span>
        </div>
      </div>

      {/* Sub-bar: Category Tabs to quickly switch between all 6 live demos */}
      <nav aria-label="Demo niches tabs" className="bg-[#0b101c] border-b border-slate-800/80 px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none shrink-0 justify-start sm:justify-center">
        <span className="text-[11px] font-bold text-slate-400 shrink-0 hidden sm:inline">
          {isAr ? 'تصفح النماذج الأخرى:' : 'Switch Live Demo:'}
        </span>
        {DEMO_TABS.map((tab) => {
          const isActive = currentKey === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setCurrentKey(tab.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md font-black ring-2 ring-cyan-400/40'
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{tab.iconText}</span>
              <span>{isAr ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}
      </nav>

      {/* Main Scrollable Demo Body */}
      <div className="flex-1 overflow-y-auto bg-slate-950 p-2 sm:p-6 flex justify-center items-start">
        
        {/* Container framing (Desktop vs Mobile simulation) */}
        <div
          className={`transition-all duration-300 w-full bg-[#080d18] text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden ${
            viewDevice === 'mobile'
              ? 'max-w-[420px] ring-8 ring-slate-800 my-4'
              : 'max-w-6xl'
          }`}
          dir="rtl"
        >
          
          {/* In-Frame Orange Disclaimer Notice */}
          <div className="bg-amber-500/15 border-b border-amber-500/30 px-4 py-2 flex items-center justify-center gap-2 text-center text-[11px] font-bold text-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {isAr 
                ? 'هذا الموقع نموذج تجريبي توضيحي للمعرفة والمعاينة فقط • كافة الأسماء والصور والبيانات افتراضية وليست حقيقية منعاً لأي تشابه أو مساءلة قانونية.' 
                : 'This is an illustrative demo template for demonstration purposes only • All data and images are hypothetical.'}
            </span>
          </div>

          {/* Demo Sub-Header */}
          <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg text-white shadow-lg"
                style={{ backgroundColor: theme.primary }}
              >
                {data.businessName.charAt(0)}
              </div>
              <div>
                <h4 className="font-black text-sm sm:text-base text-white">{data.businessName}</h4>
                <p className="text-[11px] text-slate-400">{data.businessCategory}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                متاح لاستقبال الحجوزات والطلبات
              </span>
            </div>
          </div>

          {/* Demo Hero */}
          <div className="p-6 sm:p-12 relative overflow-hidden bg-gradient-to-b from-slate-900/50 to-transparent border-b border-slate-800/80">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-5">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg} border ${theme.badgeBorder}`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{data.heroBadge}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {data.tagline}
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {data.subTagline}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={minaWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm ${theme.buttonBg} shadow-lg transition-transform hover:scale-105 flex items-center gap-2`}
                  >
                    <span>طلب الخدمة أو الحجز</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>

                  <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="dir-ltr">{data.contactInfo.phone}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 group">
                  <img
                    src={data.heroImage}
                    alt={data.businessName}
                    className="w-full h-56 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-950/60 border-b border-slate-800 text-center">
            {data.stats.map((st) => (
              <div key={st.id} className="space-y-1">
                <div className={`text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>
                  {st.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">{st.label}</div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="p-6 sm:p-10 border-b border-slate-800 space-y-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">نبذة عن النشاط</div>
              <h2 className="text-xl sm:text-3xl font-black text-white">{data.aboutTitle}</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{data.aboutStory}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {data.aboutBullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="p-6 sm:p-10 border-b border-slate-800 space-y-8 bg-slate-950/40">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white">الخدمات المتاحة للعملاء</h3>
              <p className="text-xs text-slate-400">باقات وخدمات متخصصة بأعلى معايير الدقة والاحترافية.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.services.map((s) => (
                <div key={s.id} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-white">{s.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
                    <div className="pt-2 space-y-1.5">
                      {s.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-400">{s.price || 'حسب المتطلبات'}</span>
                    <a href={minaWhatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-cyan-400 hover:underline">
                      طلب الخدمة ←
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="p-6 sm:p-10 border-b border-slate-800 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white">الباقات والأسعار</h3>
              <p className="text-xs text-slate-400">خيارات مرنة تناسب ميزانيتك وأهدافك.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {data.pricingTiers.map((t) => (
                <div 
                  key={t.id} 
                  className={`p-6 rounded-2xl bg-slate-900/80 border space-y-4 flex flex-col justify-between ${
                    t.popular ? 'border-cyan-500 ring-1 ring-cyan-500/40 shadow-xl' : 'border-slate-800'
                  }`}
                >
                  <div className="space-y-3">
                    {t.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        الأكثر طلباً
                      </span>
                    )}
                    <h4 className="text-base font-black text-white">{t.name}</h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-white">{t.price}</span>
                      <span className="text-xs text-slate-400">{data.currency} / {t.period}</span>
                    </div>
                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      {t.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={minaWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-xl font-bold text-xs text-center block ${
                      t.popular ? theme.buttonBg : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    {t.ctaText}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="p-6 sm:p-10 border-b border-slate-800 space-y-6 bg-slate-950/40">
            <h3 className="text-lg sm:text-xl font-black text-white text-center">آراء وتقييمات العملاء</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.testimonials.map((t) => (
                <div key={t.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex text-amber-400 text-xs">
                    {Array(t.rating).fill('★').join('')}
                  </div>
                  <p className="text-xs text-slate-300 italic">"{t.comment}"</p>
                  <div className="text-[11px] font-bold text-white pt-2 border-t border-slate-800/80">
                    {t.name} - <span className="text-slate-400 font-normal">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box */}
          <div className="p-6 sm:p-10 space-y-4 bg-gradient-to-b from-[#0b101c] to-[#060a12] text-center">
            <h3 className="text-xl font-black text-white">هل أعجبك هذا النموذج وتريد مثله لعملك؟</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              يمكننا تخصيص هذا الموقع بالكامل باسمك وشعارك وخدماتك وأسعارك وتسليمه لك جاهزاً خلال 48 ساعة فقط.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <a
                href={minaWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>تواصل مع المهندس مينا لطلب هذا الموقع</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

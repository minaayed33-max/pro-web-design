import React from 'react';
import { Sparkles, Laptop, Eye, MessageCircle, ArrowLeft } from 'lucide-react';
import { PresetKey } from '../types';

interface DemoItem {
  id: string;
  presetKey: PresetKey;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  image: string;
  badgeAr: string;
  badgeEn: string;
}

const DEMOS_LIST: DemoItem[] = [
  {
    id: 'demo-medical',
    presetKey: 'medical',
    titleAr: 'مجمع طبي وعيادات',
    titleEn: 'Medical Center & Clinics',
    categoryAr: 'طب وصحة وعيادات',
    categoryEn: 'Medical & Healthcare',
    descAr: 'تصميم فندقي هادئ مع حجز مواعيد مباشر، أطباء المركز، وعروض التحاليل.',
    descEn: 'Serene clinic layout with instant appointment booking and staff directory.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    badgeAr: 'معاينة حية جاهزة',
    badgeEn: 'Live Demo Available',
  },
  {
    id: 'demo-contracting',
    presetKey: 'contracting',
    titleAr: 'شركة مقاولات وهندسة',
    titleEn: 'Contracting & Engineering Company',
    categoryAr: 'مقاولات وتشطيبات',
    categoryEn: 'Construction & Architecture',
    descAr: 'عرض المشاريع السابقة، شهادات الجودة، وباقات تسليم مفتاح مع مقايسة سريعة.',
    descEn: 'Showcase projects portfolio, ISO certificates, and instant quotation request.',
    image: '/contracting.jpg',
    badgeAr: 'معاينة حية جاهزة',
    badgeEn: 'Live Demo Available',
  },
  {
    id: 'demo-restaurant',
    presetKey: 'restaurant',
    titleAr: 'مطعم وكافيه',
    titleEn: 'Restaurant & Cafe',
    categoryAr: 'مطاعم وضيافة',
    categoryEn: 'Food & Hospitality',
    descAr: 'منيو إلكتروني تفاعلي سريع، حجز طاولات، وصور أطباق عالية الدقة.',
    descEn: 'Interactive QR digital menu, table booking, and appetizing gallery.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    badgeAr: 'معاينة حية جاهزة',
    badgeEn: 'Live Demo Available',
  },
  {
    id: 'demo-store',
    presetKey: 'tech',
    titleAr: 'شركة برمجيات ومتجر',
    titleEn: 'Software Company & Store',
    categoryAr: 'متاجر وتجارة إلكترونية',
    categoryEn: 'E-Commerce & Tech',
    descAr: 'سلة شراء خفيفة سريعة، ربط واتساب للطلبات، وتصميم يجذب الشراء الفوري.',
    descEn: 'Fast-loading cart, direct WhatsApp checkout, and high conversion flow.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    badgeAr: 'معاينة حية جاهزة',
    badgeEn: 'Live Demo Available',
  },
  {
    id: 'demo-law',
    presetKey: 'law',
    titleAr: 'مكتب محاماة واستشارات',
    titleEn: 'Law Firm & Legal Consulting',
    categoryAr: 'قانون واستشارات',
    categoryEn: 'Legal & Consulting',
    descAr: 'هيبة وموثوقية عالية، استشارات قانونية سرية، وصياغة عقود تجارية.',
    descEn: 'Prestigious corporate aesthetic, confidential consultation intake.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    badgeAr: 'معاينة حية جاهزة',
    badgeEn: 'Live Demo Available',
  },
  {
    id: 'demo-marketing',
    presetKey: 'marketing',
    titleAr: 'وكالة تسويق وإعلانات',
    titleEn: 'Marketing & Ads Agency',
    categoryAr: 'تسويق وإعلانات',
    categoryEn: 'Marketing & Ads',
    descAr: 'استعراض خدمات الـ SEO والحملات الإعلانية مع باقات أسعار واضحة وإحصائيات نمو.',
    descEn: 'Growth metrics, SEO services breakdown, and clear subscription packages.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    badgeAr: 'معاينة حية جاهزة',
    badgeEn: 'Live Demo Available',
  },
];

interface NeonDemosProps {
  lang: 'ar' | 'en';
  onSelectDemo: (presetKey: PresetKey) => void;
}

export const NeonDemos: React.FC<NeonDemosProps> = ({ lang, onSelectDemo }) => {
  const isAr = lang === 'ar';

  return (
    <section id="demos" className="py-20 md:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0d1627] text-cyan-400 border border-cyan-500/30">
            <Laptop className="w-3.5 h-3.5" />
            <span>{isAr ? 'معرض النماذج وسابقة الأعمال الحية' : 'Live Client Demos & Showcase'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {isAr
              ? 'نماذج وتجارب حية جاهزة للمعاينة الآن'
              : 'Live Functional Demos Ready For Inspection'}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {isAr
              ? 'اضغط على أي ديمو لفتحه وتصفحه مباشرة على شاشتك كمبيوتر وموبايل، واكتشف تجربة وسرعة الموقع التي سيشاهدها عملاؤك.'
              : 'Click any demo below to open and browse it live directly on your screen (Desktop & Mobile), and inspect the speed and responsiveness.'}
          </p>
        </div>

        {/* Prominent Legal Disclaimer Banner in modern Orange/Amber */}
        <div className="max-w-4xl mx-auto mb-12 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-950/80 via-orange-950/90 to-amber-950/80 border border-orange-500/50 shadow-lg shadow-orange-950/40 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-amber-200">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse"></span>
              <span className="px-2.5 py-0.5 rounded-md bg-orange-500/25 text-orange-300 border border-orange-400/50 text-[11px] font-black">
                {isAr ? 'تنبيه استرشادي وقانوني' : 'Legal Notice'}
              </span>
            </div>
            <p className="leading-relaxed text-amber-100/90 text-center sm:text-right">
              {isAr
                ? 'هذا مثال للمعرفة وتوضيح التصميم الفني فقط وليست بيانات حقيقية • كافة الأسماء والصور والأنشطة والعناوين المعروضة بالنماذج أدناه افتراضية تماماً لتوضيح إمكانيات الموقع للعملاء وتجنب أي تشابه أو مساءلة قانونية.'
                : 'These demos are illustrative templates for presentation purposes only • All names, logos, photos and addresses are hypothetical to prevent any likeness.'}
            </p>
          </div>
        </div>

        {/* Demos Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMOS_LIST.map((demo) => (
            <div
              key={demo.id}
              className="rounded-3xl bg-[#0b101c]/90 border border-slate-800 hover:border-cyan-500/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.18)] flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image (Clickable for quick preview) */}
                <div 
                  onClick={() => onSelectDemo(demo.presetKey)}
                  className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 cursor-pointer group/img"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectDemo(demo.presetKey);
                    }
                  }}
                  title={isAr ? 'اضغط لفتح ومعاينة هذا الديمو مباشرة' : 'Click to inspect live demo'}
                >
                  <img
                    src={demo.image}
                    alt={isAr ? demo.titleAr : demo.titleEn}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 opacity-80 group-hover/img:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b101c] via-transparent to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyan-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl text-xs font-black bg-cyan-400 text-slate-950 shadow-xl flex items-center gap-1.5 transform scale-90 group-hover/img:scale-100 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>{isAr ? 'فتح ومعاينة الديمو الحي' : 'Inspect Live Demo'}</span>
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-[#090e18]/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                    {isAr ? demo.badgeAr : demo.badgeEn}
                  </span>

                  <span className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900/90 text-slate-300 border border-slate-700">
                    {isAr ? demo.categoryAr : demo.categoryEn}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 
                    onClick={() => onSelectDemo(demo.presetKey)}
                    className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {isAr ? demo.titleAr : demo.titleEn}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isAr ? demo.descAr : demo.descEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Live Preview + WhatsApp Order */}
              <div className="p-6 pt-0 space-y-2.5">
                <button
                  type="button"
                  onClick={() => onSelectDemo(demo.presetKey)}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-black bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-slate-950" />
                  <span>{isAr ? 'فتح وتصفح الديمو الحي الآن 👁️' : 'Open & Browse Live Demo 👁️'}</span>
                </button>

                <a
                  href={`https://wa.me/201554232400?text=${encodeURIComponent(
                    `مرحباً مهندس مينا عايد، أود الاستفسار وطلب تصميم موقع احترافي لنشاطي التجاري مشابه لديمو (${isAr ? demo.titleAr : demo.titleEn}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg text-[11px] font-bold text-slate-400 hover:text-emerald-400 hover:bg-slate-900/80 border border-slate-800/80 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isAr ? 'طلب تصميم مثل هذا الديمو عبر الواتساب' : 'Order similar via WhatsApp'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

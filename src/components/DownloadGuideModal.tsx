import React, { useState } from 'react';
import { 
  X, 
  Download, 
  HelpCircle, 
  CheckCircle2, 
  Code, 
  Globe, 
  Coins, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink,
  Laptop,
  FileArchive
} from 'lucide-react';

interface DownloadGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
}

export const DownloadGuideModal: React.FC<DownloadGuideModalProps> = ({
  isOpen,
  onClose,
  onDownloadZip,
  isDownloading,
}) => {
  if (!isOpen) return null;

  const [activeStep, setActiveStep] = useState<number>(1);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex justify-center items-start sm:p-4 md:p-6 animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-none sm:rounded-3xl shadow-2xl flex flex-col max-h-screen sm:max-h-[92vh] overflow-hidden my-auto">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">دليل التحميل، التعديل والبيع للعملاء</h3>
              <p className="text-xs text-slate-400">
                شرح عملي خطوة بخطوة لكيفية تحميل الموقع، تخصيصه لأي عميل، ورفعه على الإنترنت وبيعه بنجاح.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-4 border-b border-slate-800 bg-slate-950/40 text-center text-xs font-bold">
          <button
            onClick={() => setActiveStep(1)}
            className={`py-3.5 px-3 border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeStep === 1
                ? 'border-amber-400 text-amber-400 bg-amber-400/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px]">1</span>
            <span className="hidden sm:inline">تحميل الموقع (Download)</span>
            <span className="sm:hidden">التحميل</span>
          </button>

          <button
            onClick={() => setActiveStep(2)}
            className={`py-3.5 px-3 border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeStep === 2
                ? 'border-amber-400 text-amber-400 bg-amber-400/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px]">2</span>
            <span className="hidden sm:inline">طريقة التعديل للعميل</span>
            <span className="sm:hidden">التعديل</span>
          </button>

          <button
            onClick={() => setActiveStep(3)}
            className={`py-3.5 px-3 border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeStep === 3
                ? 'border-amber-400 text-amber-400 bg-amber-400/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px]">3</span>
            <span className="hidden sm:inline">الرفع والاستضافة (Hosting)</span>
            <span className="sm:hidden">الرفع</span>
          </button>

          <button
            onClick={() => setActiveStep(4)}
            className={`py-3.5 px-3 border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeStep === 4
                ? 'border-amber-400 text-amber-400 bg-amber-400/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px]">4</span>
            <span className="hidden sm:inline">كيفية البيع والتسعير</span>
            <span className="sm:hidden">البيع</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-slate-300 leading-relaxed">
          
          {/* STEP 1: DOWNLOADING */}
          {activeStep === 1 && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <FileArchive className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">التحميل المباشر للكمبيوتر بضغطة واحدة (موصى به)</h4>
                    <p className="text-xs text-slate-300">
                      يقوم بتحميل مجلد مضغوط ZIP يحتوي على ملف <code className="text-emerald-400 font-mono">index.html</code> الجاهز وتنسيقاته بالكامل للتشغيل الفوري بدون خادم.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onDownloadZip}
                  disabled={isDownloading}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shrink-0 shadow-lg disabled:opacity-50"
                >
                  {isDownloading ? 'جاري التحميل...' : 'تحميل ZIP الآن'}
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-white text-base">ماذا تفعل بعد تحميل ملف الـ ZIP على الكمبيوتر؟</h4>
                
                <ol className="space-y-3 list-decimal list-inside text-xs sm:text-sm text-slate-300 pr-2">
                  <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <strong className="text-white">فك الضغط (Extract):</strong> اضغط بزر الفأرة الأيمن على الملف واختر <span className="text-amber-400 font-semibold">"Extract All"</span> أو "استخراج هنا".
                  </li>
                  <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <strong className="text-white">فتح الموقع:</strong> اضغط نقرتين على ملف <span className="text-emerald-400 font-semibold font-mono">index.html</span> وسيفتح الموقع فوراً في متصفح Google Chrome أو Edge بنفس التصميم والألوان والنصوص!
                  </li>
                  <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <strong className="text-white">التعديل في أي وقت:</strong> يمكنك فتح ملف <span className="text-emerald-400 font-semibold font-mono">index.html</span> بواسطة أي برنامج محرر مثل Notepad أو VS Code وتعديل أي كلمة أو رقم هاتف مباشرة وحفظ الملف (Ctrl + S).
                  </li>
                </ol>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-blue-400 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>هل تريد سورس كود الـ React بالكامل؟</span>
                </div>
                <p>
                  المشروع الحالي مبني بأحدث إصدار من React 19 و Vite و Tailwind CSS. جميع ملفات الـ TypeScript موجودة داخل مجلد <code className="text-amber-400 font-mono">/src</code> في AI Studio ويمكنك تصديرها أو رفعها على مستودع GitHub بنقرة واحدة عبر لوحة أدوات المطورين.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: CUSTOMIZING FOR CLIENTS */}
          {activeStep === 2 && (
            <div className="space-y-5">
              <h4 className="font-bold text-white text-base">كيف تصنع موقعاً جديداً لكل عميل في 3 دقائق؟</h4>
              
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">1</div>
                  <div>
                    <strong className="text-white block text-sm mb-1">افتح لوحة التخصيص (زر "تعديل بيانات العميل" بالأعلى)</strong>
                    <p className="text-xs text-slate-400">
                      اضغط على الزر الأصفر في الشريط العلوي لتفتح لك لوحة التحكم الشاملة.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">2</div>
                  <div>
                    <strong className="text-white block text-sm mb-1">اختر النشاط التجاري للعميل أو حدد قالباً جاهزاً</strong>
                    <p className="text-xs text-slate-400">
                      اختر من بين 6 مجالات جاهزة بنصوص تسويقية مكتوبة بعناية (مقاولات، تسويق، طب وعيادات، محاماة، برمجيات، كافيهات ومطاعم)، ثم اختر اللون المناسب لهوية العميل.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">3</div>
                  <div>
                    <strong className="text-white block text-sm mb-1">عدّل أرقام التواصل والواتساب</strong>
                    <p className="text-xs text-slate-400">
                      في تبويب "بيانات التواصل"، ضع رقم هاتف العميل ورقم الواتساب بالصيغة الدولية (مثل: <code className="text-emerald-400">966501234567</code>). فور إدخاله، تصبح كافة أزرار ونماذج الموقع مربوطة به مباشرة!
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">4</div>
                  <div>
                    <strong className="text-white block text-sm mb-1">اضغط "تصدير JSON" لحفظ نسخة هذا العميل</strong>
                    <p className="text-xs text-slate-400">
                      يمكنك حفظ ملف إعدادات العميل (مثلاً <code className="text-amber-400">dr-mohamed-clinic.json</code>) على جهازك لاسترجاع هذا الموقع في أي ثانية وتعديله لاحقاً.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DEPLOYMENT & HOSTING */}
          {activeStep === 3 && (
            <div className="space-y-5">
              <h4 className="font-bold text-white text-base">طرق رفع الموقع على الإنترنت وتسليمه للعميل:</h4>

              {/* Netlify Option */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm">
                    <Globe className="w-4 h-4" />
                    <span>الطريقة 1: استضافة مجانية وسريعة في 60 ثانية (Netlify Drop)</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                    الأسهل والأسرع
                  </span>
                </div>
                
                <ol className="space-y-2 list-decimal list-inside text-xs text-slate-300">
                  <li>افتح الرابط: <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-semibold">app.netlify.com/drop</a></li>
                  <li>اسحب وأفلت المجلد الذي قمت بفك ضغطه من الـ ZIP داخل المستطيل المنقط في الشاشة.</li>
                  <li>خلال 10 ثوانٍ، سيعطيك Netlify رابطاً حياً وسريعاً جداً للموقع مثل: <code className="text-emerald-400 font-mono">my-client.netlify.app</code>.</li>
                  <li>يمكنك ربط دومين العميل الخاص به مثل <code className="text-amber-400 font-mono">www.client-name.com</code> من إعدادات Domain Management مجاناً.</li>
                </ol>
              </div>

              {/* cPanel Option */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>الطريقة 2: الرفع على استضافة العميل التقليدية (cPanel أو Hostinger)</span>
                </div>
                
                <ol className="space-y-2 list-decimal list-inside text-xs text-slate-300">
                  <li>افتح لوحة تحكم الاستضافة (cPanel أو Hostinger hPanel).</li>
                  <li>ادخل على إدارة الملفات (File Manager) ثم افتح مجلد <code className="text-amber-400 font-mono">public_html</code>.</li>
                  <li>ارفع ملف <code className="text-emerald-400 font-mono">index.html</code> بداخله.</li>
                  <li>فوراً عند كتابة رابط موقع العميل، سيعمل الموقع مباشرة بأقصى سرعة!</li>
                </ol>
              </div>
            </div>
          )}

          {/* STEP 4: SELLING & PRICING */}
          {activeStep === 4 && (
            <div className="space-y-5">
              <h4 className="font-bold text-white text-base">استراتيجية بيع هذا الموقع للعملاء وتحقيق أرباح:</h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-400">باقة الهبوط السريعة (Landing Page)</div>
                  <div className="text-xl font-black text-amber-400">1,500 - 2,500 ر.س</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    موقع صفحة تعريفية كاملة متجاوبة مع الجوال وربط سريع بالواتساب ورفع على الاستضافة.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/40 ring-1 ring-amber-500/30 space-y-2">
                  <div className="text-xs font-bold text-amber-300">الباقة الاحترافية الشاملة</div>
                  <div className="text-xl font-black text-emerald-400">3,000 - 5,000 ر.س</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    شراء دومين مخصص للعميل (.com أو .sa)، حجز استضافة، تهيئة سيو محركات البحث، وصور احترافية.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-400">اشتراك صيانة سنوي (دخل متكرر)</div>
                  <div className="text-xl font-black text-blue-400">600 - 1,200 ر.س سنوياً</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    تجديد الدومين والاستضافة، تعديل الأسعار وأرقام الهاتف عند طلب العميل، ودعم فني دوري.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <h5 className="font-bold text-white text-xs">أقوى نقاط القوة التي يمكنك ذكرها لإقناع العميل بالشراء:</h5>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>سرعة خارقة:</strong> الموقع خفيف جداً يفتح في أقل من ثانية واحدة، مما يحسن إعلانات جوجل وتيك توك.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>تحويل الزوار إلى مبيعات:</strong> نموذج التواصل يحول رسالة العميل بالاسم والتفاصيل إلى رقم الواتساب فوراً.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>متوافق 100% مع الجوال:</strong> مظهر عصري وأنيق وتصميم فخم يرفع هيبة ومكانة شركته.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>كود نظيف تماماً:</strong> لا توجد تبعيات معقدة أو بطء مثل ووردبريس، وأمان 100% ضد الاختراق.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            جاهز لبدء التحميل؟
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              إغلاق
            </button>
            <button
              onClick={onDownloadZip}
              disabled={isDownloading}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-md disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? 'جاري التحميل...' : 'تحميل الموقع ZIP'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

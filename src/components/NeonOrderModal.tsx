import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Sparkles, Loader2 } from 'lucide-react';

interface NeonOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en';
}

export const NeonOrderModal: React.FC<NeonOrderModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    businessType: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to minaayed33@gmail.com via FormSubmit endpoint
      await fetch('https://formsubmit.co/ajax/minaayed33@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `طلب تصميم موقع جديد من: ${form.name} (${form.phone})`,
          الاسم: form.name,
          الهاتف_الواتساب: form.phone,
          نوع_النشاط: form.businessType,
          التفاصيل: form.details,
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.warn('FormSubmit background notification error', err);
    }

    // Prepare WhatsApp direct link as well for instant notification
    const whatsappMsg = `مرحباً مهندس مينا عايد (المحترف لتصميم المواقع - Pro Web Design)،
أود طلب تصميم موقع احترافي:
- الاسم: ${form.name}
- الهاتف: ${form.phone}
- نوع النشاط: ${form.businessType}
- التفاصيل: ${form.details}`;

    const waUrl = `https://wa.me/201554232400?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(waUrl, '_blank');

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  const isAr = lang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0c121e] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-slate-100"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'طلب تصميم موقع احترافي' : 'Request Professional Website'}</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            {isAr ? 'إرسال بيانات المشروع' : 'Submit Project Details'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            {isAr
              ? 'أدخل بياناتك وسيتم إرسالها فوراً إلى المهندس مينا عايد لمراجعتها والتواصل معك.'
              : 'Enter your details and they will be delivered immediately to Eng. Mina Ayed.'}
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in zoom-in-95">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-black text-white">
              {isAr ? 'تم إرسال بياناتك بنجاح!' : 'Details Sent Successfully!'}
            </h4>
            <p className="text-xs text-slate-300">
              {isAr
                ? 'تم إرسال نسخة إلى البريد minaayed33@gmail.com وجاري تحويلك للمحادثة المباشرة على الواتساب.'
                : 'A copy was dispatched to minaayed33@gmail.com and WhatsApp was opened for instant reply.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                {isAr ? 'الاسم الكريم *' : 'Full Name *'}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={isAr ? 'أدخل اسمك الكريم' : 'Enter your name'}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                {isAr ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="01xxxxxxxxx"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors dir-ltr text-right"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                {isAr ? 'نوع النشاط أو الموقع المطلوب *' : 'Business Type / Field *'}
              </label>
              <input
                type="text"
                required
                value={form.businessType}
                onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                placeholder={isAr ? 'مثال: شركة مقاولات، عيادة، متجر، محاماة، كافيه...' : 'e.g. Clinic, Contracting, SaaS, Restaurant...'}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                {isAr ? 'تفاصيل إضافية أو ميزات خاصة' : 'Additional Details or Features'}
              </label>
              <textarea
                rows={3}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder={isAr ? 'اكتب ما ترغب في إضافته في موقعك...' : 'Describe any specific requirements...'}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl font-black text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isAr ? 'جاري الإرسال...' : 'Sending...'}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال البيانات والتواصل الآن' : 'Submit & Connect Now'}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

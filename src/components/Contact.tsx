import React, { useState } from 'react';
import { ContactInfo, ServiceItem } from '../types';
import { COLOR_THEMES } from '../data/presets';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ContactProps {
  contactInfo: ContactInfo;
  services: ServiceItem[];
  themeId: string;
  businessName: string;
}

export const Contact: React.FC<ContactProps> = ({
  contactInfo,
  services,
  themeId,
  businessName,
}) => {
  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.blue;
  const whatsappClean = contactInfo.whatsapp.replace(/[^0-9]/g, '');

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: services[0]?.title || 'طلب عام',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '1b8e9ed1-349d-470c-ba11-c59191b8d1ae',
          subject: `رسالة جديدة من: ${formState.name} (${formState.phone})`,
          from_name: 'Pro Web Design',
          name: formState.name,
          phone: formState.phone,
          service: formState.service,
          message: formState.message,
        }),
      });
    } catch (err) {
      console.warn('Web3Forms error', err);
    }

    const formattedText = `مرحباً ${businessName}،
أود الاستفسار عن خدمة من خلال الموقع:
- الاسم: ${formState.name}
- الجوال: ${formState.phone}
- الخدمة: ${formState.service}
- التفاصيل: ${formState.message}`;

    const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };
    });
  } catch (err) {
    console.warn('Web3Forms error', err);
  }

    // Format WhatsApp message
    const formattedText = `مرحباً ${businessName}،
أود الاستفسار عن خدمة من خلال الموقع:
- الاسم: ${formState.name}
- الجوال: ${formState.phone}
- الخدمة: ${formState.service}
- التفاصيل: ${formState.message}`;

    const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(formattedText)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>تواصل مباشر وسريع</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                ابدأ محادثتك معنا اليوم
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                يسعدنا دائماً استقبال استفساراتك وتقديم المشورة الفنية وعروض الأسعار التفصيلية في أسرع وقت.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('مرحباً، أود التواصل مع ' + businessName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-emerald-400 font-semibold">محادثة واتساب فورية (موصى بها)</div>
                  <div className="text-sm font-bold text-white dir-ltr text-right">{contactInfo.whatsapp}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 font-medium">الاتصال الهاتفي المباشر</div>
                  <div className="text-sm font-bold text-white dir-ltr text-right">{contactInfo.phone}</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 font-medium">البريد الإلكتروني الرسمي</div>
                  <div className="text-sm font-bold text-slate-200 dir-ltr text-right">{contactInfo.email}</div>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">مقر الشركة والعنوان</div>
                  <div className="text-sm font-semibold text-slate-200 leading-relaxed mt-0.5">
                    {contactInfo.address}
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">أوقات العمل الرسمية</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {contactInfo.workingHours}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Interactive Message & Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-black text-white mb-2">
                أرسل طلبك أو استفسارك الآن
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
                املأ النموذج التالي وسيتم تحويل طلبك مباشرة لممثل خدمة العملاء مع ربط تلقائي بالواتساب للرد الفوري.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>تم تجهيز رسالتك وفتح محادثة الواتساب بنجاح!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="أدخل اسمك الكريم"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      رقم الجوال أو الواتساب *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="مثال: 0501234567"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors dir-ltr text-right"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    الخدمة أو الباقة المطلوبة
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="استشارة عامة ومقايسة مخصصة">استشارة عامة ومقايسة مخصصة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    تفاصيل الرسالة أو الاحتياج *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="اكتب نبذة عن مشروعك أو استفسارك لنتمكن من مساعدتك بدقة..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white ${theme.buttonBg} transition-all hover:scale-[1.01] flex items-center justify-center gap-2 shadow-xl shadow-brand/20`}
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الطلب والتواصل الفوري عبر الواتساب</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

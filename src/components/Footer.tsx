import React from 'react';
import { ClientWebsiteData } from '../types';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart
} from 'lucide-react';

interface FooterProps {
  data: ClientWebsiteData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const whatsappClean = data.contactInfo.whatsapp.replace(/[^0-9]/g, '');

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-lg">
                {data.businessName.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{data.businessName}</h3>
                <p className="text-xs text-slate-400">{data.businessCategory}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {data.subTagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {data.contactInfo.facebookUrl && (
                <a href={data.contactInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {data.contactInfo.twitterUrl && (
                <a href={data.contactInfo.twitterUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {data.contactInfo.instagramUrl && (
                <a href={data.contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {data.contactInfo.linkedinUrl && (
                <a href={data.contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">من نحن</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">الخدمات</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">أعمالنا</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">الباقات والأسعار</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">أبرز الخدمات</h4>
            <ul className="space-y-2 text-xs">
              {data.services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">معلومات التواصل</h4>
            <div className="space-y-2.5">
              <a href={`tel:${data.contactInfo.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="dir-ltr text-right">{data.contactInfo.phone}</span>
              </a>
              <a href={`https://wa.me/${whatsappClean}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span className="dir-ltr text-right">{data.contactInfo.whatsapp}</span>
              </a>
              <a href={`mailto:${data.contactInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="dir-ltr text-right">{data.contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{data.contactInfo.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            جميع الحقوق محفوظة © {currentYear} {data.businessName}.
          </p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>موقع مخصص تم تصميمه وبرمجته بأعلى معايير الويب</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

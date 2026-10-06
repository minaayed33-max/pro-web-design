import React, { useState, useEffect } from 'react';
import { ClientWebsiteData, ColorTheme } from '../types';
import { COLOR_THEMES } from '../data/presets';
import { 
  Phone, 
  MessageCircle, 
  SlidersHorizontal, 
  Download, 
  BookOpen, 
  Menu, 
  X,
  ExternalLink,
  Eye
} from 'lucide-react';

interface NavbarProps {
  data: ClientWebsiteData;
  onOpenEditor: () => void;
  onOpenGuide: () => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
  isClientView: boolean;
  onToggleClientView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  onOpenEditor,
  onOpenGuide,
  onDownloadZip,
  isDownloading,
  isClientView,
  onToggleClientView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme: ColorTheme = COLOR_THEMES[data.themeId] || COLOR_THEMES.blue;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappClean = data.contactInfo.whatsapp.replace(/[^0-9]/g, '');

  return (
    <>
      {/* Top Banner for Seller/Admin controls (Hidden in pure Client View) */}
      {!isClientView && (
        <div className="bg-slate-950/90 border-b border-slate-800 text-xs py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-slate-300">
                وضع تخصيص الموقع للعملاء
              </span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">
                النشاط الحالي: <span className="text-amber-400 font-bold">{data.businessName}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onToggleClientView}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                title="عرض الموقع بدون شريط التحكم كما سيراه العميل تماماً"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>معاينة كعميل</span>
              </button>

              <button
                onClick={onOpenEditor}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/30 transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>تعديل بيانات العميل</span>
              </button>

              <button
                onClick={onDownloadZip}
                disabled={isDownloading}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isDownloading ? 'جاري التحميل...' : 'تحميل الموقع ZIP'}</span>
              </button>

              <button
                onClick={onOpenGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden md:inline">دليل البيع والتشغيل</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Website Navigation */}
      <header
        className={`sticky ${isClientView ? 'top-0' : 'top-[41px]'} z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-105 transition-transform">
              {data.businessName.charAt(0) || '★'}
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-white leading-tight">
                {data.businessName}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {data.businessCategory}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">من نحن</a>
            <a href="#services" className="hover:text-white transition-colors">خدماتنا</a>
            <a href="#portfolio" className="hover:text-white transition-colors">أعمالنا</a>
            <a href="#pricing" className="hover:text-white transition-colors">الباقات والأسعار</a>
            <a href="#testimonials" className="hover:text-white transition-colors">آراء العملاء</a>
            <a href="#faq" className="hover:text-white transition-colors">الأسئلة الشائعة</a>
          </nav>

          {/* Desktop Direct Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${data.contactInfo.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="dir-ltr">{data.contactInfo.phone}</span>
            </a>

            <a
              href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدماتكم.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`https://wa.me/${whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 animate-in fade-in">
            <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-200">
              <a onClick={() => setMobileMenuOpen(false)} href="#hero" className="hover:text-amber-400 py-1">الرئيسية</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#about" className="hover:text-amber-400 py-1">من نحن</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#services" className="hover:text-amber-400 py-1">خدماتنا</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#portfolio" className="hover:text-amber-400 py-1">أعمالنا السابقة</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#pricing" className="hover:text-amber-400 py-1">باقات الأسعار</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#testimonials" className="hover:text-amber-400 py-1">آراء العملاء</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="hover:text-amber-400 py-1">الأسئلة الشائعة</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="hover:text-amber-400 py-1">تواصل معنا</a>
            </nav>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدماتكم.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تواصل عبر الواتساب</span>
              </a>

              <a
                href={`tel:${data.contactInfo.phone}`}
                className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 dir-ltr"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{data.contactInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

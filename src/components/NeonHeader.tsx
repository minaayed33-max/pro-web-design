import React from 'react';
import { Cpu, Globe, Send } from 'lucide-react';

interface NeonHeaderProps {
  lang: 'ar' | 'en';
  onToggleLang: () => void;
  onOpenOrderModal: () => void;
}

export const NeonHeader: React.FC<NeonHeaderProps> = ({
  lang,
  onToggleLang,
  onOpenOrderModal,
}) => {
  const isAr = lang === 'ar';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#070b13]/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Name & Icon */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl text-white tracking-tight">
              {isAr ? 'المحترف لتصميم المواقع' : 'Pro Web Design'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#141b2c] hover:bg-[#1a233a] text-slate-200 border border-indigo-500/30 transition-all shadow-sm"
          >
            <span>{isAr ? 'English' : 'العربية'}</span>
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
          </button>

          {/* Order & Lead Submission Button */}
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105"
          >
            <span>{isAr ? 'لطلب وإرسال البيانات' : 'Order & Submit Details'}</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};

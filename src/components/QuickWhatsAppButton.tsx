import React from 'react';
import { MessageCircle } from 'lucide-react';

interface QuickWhatsAppButtonProps {
  whatsapp: string;
  businessName: string;
}

export const QuickWhatsAppButton: React.FC<QuickWhatsAppButtonProps> = ({
  whatsapp,
  businessName,
}) => {
  const cleanNumber = whatsapp.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent('مرحباً ' + businessName + '، أود الاستفسار عن تفاصيل الخدمات.')}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 left-6 z-40 group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل فوري عبر الواتساب"
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-300/30"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          تواصل عبر الواتساب
        </span>
      </a>
    </aside>
  );
};

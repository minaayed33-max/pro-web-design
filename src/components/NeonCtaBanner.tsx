import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

interface NeonCtaBannerProps {
  lang: 'ar' | 'en';
  onOpenOrderModal: () => void;
}

export const NeonCtaBanner: React.FC<NeonCtaBannerProps> = ({ lang, onOpenOrderModal }) => {
  const isAr = lang === 'ar';
  const whatsappUrl = `https://wa.me/201554232400?text=${encodeURIComponent('مرحباً مهندس مينا عايد، أود الاستفسار وطلب تصميم موقع ذكي لعملي.')}`;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0e1424] to-[#090d17] border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] text-center space-y-6 overflow-hidden">
          
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {isAr
              ? 'جاهز لامتلاك موقع ذكي يبهر عملاءك ويزيد مبيعاتك؟'
              : 'Ready To Own A Smart Website That Stuns Clients & Boosts Sales?'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'تواصل معي مباشرة لتنفيذ موقعك وتخصيصه بالكامل بما يلائم مجالك (عيادات، شركات، عقارات، متاجر) بأعلى جودة وأفضل سعر.'
              : 'Connect with me directly to craft and tailor your website perfectly for your field (clinics, companies, real estate, stores) with unmatched quality and best value.'}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 fill-slate-950" />
              <span>{isAr ? 'تواصل معي على الواتساب' : 'Chat With Me on WhatsApp'}</span>
            </a>

            {/* Modal Order Button */}
            <button
              onClick={onOpenOrderModal}
              className="px-8 py-4 rounded-2xl font-bold text-sm sm:text-base bg-[#0f172a] hover:bg-[#1a233a] border border-cyan-500/40 text-cyan-300 hover:text-white shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? '( لطلب وإرسال البيانات )' : '( Submit Project Details )'}</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

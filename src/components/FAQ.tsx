import React, { useState } from 'react';
import { FAQItem } from '../types';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQProps {
  faq: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            <span>إجابات واضحة وفورية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            الأسئلة الأكثر شيوعاً
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            جمعنا لك إجابات مفصلة عن التساؤلات التي يطرحها عملاؤنا الكرام قبل بدء العمل.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-right p-6 flex items-center justify-between gap-4 font-bold text-base text-white focus:outline-none"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-500/20 text-amber-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

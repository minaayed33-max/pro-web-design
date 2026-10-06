import React from 'react';
import { TestimonialItem } from '../types';
import { Star, MessageSquareQuote } from 'lucide-react';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <MessageSquareQuote className="w-4 h-4" />
            <span>قصص نجاح ورضا العملاء</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            ماذا يقول عملاؤنا عنا؟
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            شهادات حقيقية نعتز بها من شركائنا الذين وضعوا ثقتهم في خدماتنا وحققنا معاً أهدافهم بنجاح.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.role} · <span className="text-slate-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

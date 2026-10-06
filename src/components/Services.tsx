import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { COLOR_THEMES } from '../data/presets';
import { 
  Sparkles, 
  CheckCircle, 
  ArrowLeft, 
  Target, 
  Search, 
  PenTool, 
  Layout, 
  Home, 
  Paintbrush, 
  Warehouse, 
  Wrench, 
  Smile, 
  Baby, 
  TestTube, 
  Briefcase, 
  Scale, 
  FileCheck, 
  Users, 
  Smartphone, 
  Server, 
  ShoppingBag, 
  Cpu, 
  Coffee, 
  Utensils, 
  CupSoda, 
  PartyPopper 
} from 'lucide-react';

interface ServicesProps {
  services: ServiceItem[];
  themeId: string;
  whatsapp: string;
  businessName: string;
}

export const Services: React.FC<ServicesProps> = ({
  services,
  themeId,
  whatsapp,
  businessName,
}) => {
  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.blue;
  const whatsappClean = whatsapp.replace(/[^0-9]/g, '');

  const renderServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-white" };
    switch (iconName) {
      case 'Target': return <Target {...props} />;
      case 'Search': return <Search {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Paintbrush': return <Paintbrush {...props} />;
      case 'Warehouse': return <Warehouse {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Baby': return <Baby {...props} />;
      case 'TestTube': return <TestTube {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Scale': return <Scale {...props} />;
      case 'FileCheck': return <FileCheck {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Server': return <Server {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'CupSoda': return <CupSoda {...props} />;
      case 'PartyPopper': return <PartyPopper {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>حلول وخدمات احترافية متكاملة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            الخدمات التي نتميز بتقديمها
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            تم تصميم كل خدمة بعناية فائقة لتلبي أعلى المعايير وتضمن لعملائنا سرعة الإنجاز وجودة المخرجات.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div>
                {/* Icon box */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: theme.primary }}
                >
                  {renderServiceIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Bullet List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400">التسعير التقديري</div>
                  <div className="text-xs font-bold text-slate-200">
                    {service.price || 'حسب المواصفات'}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('مرحباً ' + businessName + '، أود طلب تفاصيل خدمة: ' + service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>طلب الآن</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

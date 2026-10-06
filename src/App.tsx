/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NeonHeader } from './components/NeonHeader';
import { NeonHero } from './components/NeonHero';
import { NeonFeatures } from './components/NeonFeatures';
import { NeonDemos } from './components/NeonDemos';
import { NeonCtaBanner } from './components/NeonCtaBanner';
import { NeonOrderModal } from './components/NeonOrderModal';
import { LiveDemoViewerModal } from './components/LiveDemoViewerModal';
import { PresetKey } from './types';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedDemoKey, setSelectedDemoKey] = useState<PresetKey | null>(null);

  const isAr = lang === 'ar';

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div 
      className="min-h-screen bg-[#070b13] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950 font-['Cairo',sans-serif]"
      dir={isAr ? 'rtl' : 'ltr'}
    >

      {/* Header */}
      <NeonHeader
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <NeonHero
          lang={lang}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        {/* 4 Pillars Features Section */}
        <NeonFeatures lang={lang} />

        {/* Live Client Demos Section */}
        <NeonDemos 
          lang={lang} 
          onSelectDemo={(key) => setSelectedDemoKey(key)}
        />

        {/* Final CTA Banner */}
        <NeonCtaBanner
          lang={lang}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 left-6 z-40">
        <a
          href="https://wa.me/201554232400?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D9%87%D9%86%D8%AF%D8%B3%20%D9%85%D9%8A%D9%86%D8%A7%20%D8%B9%D8%A7%D9%8A%D8%AF%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D9%85%D9%88%D9%82%D8%B9."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-6 h-6 fill-slate-950 text-emerald-500" />
          <span className="hidden sm:inline text-xs font-black tracking-wide">
            {isAr ? 'واتساب المهندس مينا' : 'WhatsApp Eng. Mina'}
          </span>
        </a>
      </aside>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#05080e] py-10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <span className="font-bold text-white text-sm">
              {isAr ? 'المحترف لتصميم المواقع (Pro Web Design)' : 'Pro Web Design Studio'}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <a href="tel:01554232400" className="hover:text-cyan-400 flex items-center gap-1.5 dir-ltr">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>01554232400</span>
            </a>
            <a href="mailto:minaayed33@gmail.com" className="hover:text-cyan-400 flex items-center gap-1.5 dir-ltr">
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>minaayed33@gmail.com</span>
            </a>
          </div>

          <div className="text-slate-500 select-none">
            تطوير وتنفيذ المهندس مينا عايد (Mina Ayed) © {new Date().getFullYear()}
          </div>
        </div>
      </footer>

      {/* Order & Lead Submission Modal */}
      <NeonOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        lang={lang}
      />

      {/* Full-featured Interactive Live Demo Viewer Modal */}
      <LiveDemoViewerModal
        presetKey={selectedDemoKey}
        onClose={() => setSelectedDemoKey(null)}
        lang={lang}
      />
    </div>
  );
}

import React from 'react';
import { PresetKey } from '../types';
import { PRESET_OPTIONS } from '../data/presets';
import { SlidersHorizontal, Download, BookOpen, Layers } from 'lucide-react';

interface FloatingSellerDockProps {
  currentPresetId: string;
  onSelectPreset: (presetKey: PresetKey) => void;
  onOpenEditor: () => void;
  onOpenGuide: () => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
}

export const FloatingSellerDock: React.FC<FloatingSellerDockProps> = ({
  currentPresetId,
  onSelectPreset,
  onOpenEditor,
  onOpenGuide,
  onDownloadZip,
  isDownloading,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm sm:max-w-md">
      <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md flex items-center gap-2">
        
        {/* Quick Preset Selector Dropdown */}
        <div className="relative">
          <select
            value={currentPresetId}
            onChange={(e) => onSelectPreset(e.target.value as PresetKey)}
            className="appearance-none bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold py-2 pl-7 pr-3 rounded-xl border border-slate-700 focus:outline-none focus:border-amber-400 cursor-pointer"
          >
            {PRESET_OPTIONS.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.title} ({opt.category})
              </option>
            ))}
          </select>
          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            ▼
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={onOpenEditor}
          className="p-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 transition-colors"
          title="تخصيص بيانات الموقع"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>

        {/* Download ZIP Button */}
        <button
          onClick={onDownloadZip}
          disabled={isDownloading}
          className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md disabled:opacity-50"
          title="تحميل الموقع على جهازك"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">تحميل ZIP</span>
        </button>

        {/* Guide Button */}
        <button
          onClick={onOpenGuide}
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          title="دليل الشرح والبيع"
        >
          <BookOpen className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};

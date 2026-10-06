import React, { useState } from 'react';
import { ClientWebsiteData, ColorTheme, PresetKey, ServiceItem, PricingTier, FAQItem } from '../types';
import { PRESETS_DATA, PRESET_OPTIONS, COLOR_THEMES } from '../data/presets';
import { 
  X, 
  Save, 
  Download, 
  Upload, 
  FileJson, 
  RotateCcw, 
  Palette, 
  Briefcase, 
  Building2, 
  Phone, 
  Sparkles, 
  Plus, 
  Trash2, 
  Layers,
  FileText,
  DollarSign,
  HelpCircle,
  Check
} from 'lucide-react';

interface AdminEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ClientWebsiteData;
  onSaveData: (newData: ClientWebsiteData) => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
}

export const AdminEditorModal: React.FC<AdminEditorModalProps> = ({
  isOpen,
  onClose,
  data,
  onSaveData,
  onDownloadZip,
  isDownloading,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'presets' | 'general' | 'services' | 'pricing' | 'contact' | 'faq'>('presets');
  const [formData, setFormData] = useState<ClientWebsiteData>({ ...data });
  const [saveToast, setSaveToast] = useState(false);

  const handlePresetSelect = (presetKey: PresetKey) => {
    const selected = PRESETS_DATA[presetKey];
    if (selected) {
      setFormData({ ...selected });
      onSaveData({ ...selected });
      triggerSaveToast();
    }
  };

  const handleColorSelect = (themeId: string) => {
    const updated = { ...formData, themeId };
    setFormData(updated);
    onSaveData(updated);
  };

  const handleFieldChange = (field: keyof ClientWebsiteData, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    onSaveData(updated);
  };

  const handleContactChange = (field: string, value: string) => {
    const updated = {
      ...formData,
      contactInfo: {
        ...formData.contactInfo,
        [field]: value,
      },
    };
    setFormData(updated);
    onSaveData(updated);
  };

  const triggerSaveToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  // Export JSON file
  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `client-profile-${formData.id || 'site'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON file
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.businessName && parsed.services) {
          setFormData(parsed);
          onSaveData(parsed);
          triggerSaveToast();
        } else {
          alert('الملف غير متطابق مع تنسيق بيانات الموقع.');
        }
      } catch (err) {
        alert('حدث خطأ أثناء قراءة ملف JSON.');
      }
    };
    reader.readAsText(file);
  };

  // Services handlers
  const handleUpdateService = (idx: number, field: keyof ServiceItem, value: any) => {
    const updatedServices = [...formData.services];
    updatedServices[idx] = { ...updatedServices[idx], [field]: value };
    handleFieldChange('services', updatedServices);
  };

  const handleAddService = () => {
    const newService: ServiceItem = {
      id: 's_' + Date.now(),
      title: 'خدمة جديدة للعميل',
      description: 'وصف مختصر ومحفز للخدمة الجديدة والميزات التي يحصل عليها العميل.',
      price: 'حسب الطلب',
      icon: 'Sparkles',
      features: ['ميزة تنافسية أولى', 'ميزة ثانية', 'ضمان جودة'],
    };
    handleFieldChange('services', [...formData.services, newService]);
  };

  const handleDeleteService = (idx: number) => {
    const updatedServices = formData.services.filter((_, i) => i !== idx);
    handleFieldChange('services', updatedServices);
  };

  // Pricing handlers
  const handleUpdatePricing = (idx: number, field: keyof PricingTier, value: any) => {
    const updatedTiers = [...formData.pricingTiers];
    updatedTiers[idx] = { ...updatedTiers[idx], [field]: value };
    handleFieldChange('pricingTiers', updatedTiers);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex justify-center items-start sm:p-4 md:p-6 animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-none sm:rounded-3xl shadow-2xl flex flex-col max-h-screen sm:max-h-[92vh] overflow-hidden my-auto">
        
        {/* Modal Top Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
              <SlidersHorizontalIcon />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white">لوحة تخصيص بيانات الموقع</h3>
                <span className="text-[10px] font-bold bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30">
                  تحديث فوري
                </span>
              </div>
              <p className="text-xs text-slate-400">
                عدّل نصوص وصور وأسعار الموقع وفق متطلبات عميلك، ثم حمّل الموقع جاهزاً بضغطة زر.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onDownloadZip}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all disabled:opacity-50 shadow-md shadow-emerald-700/20"
            >
              <Download className="w-4 h-4" />
              <span>{isDownloading ? 'جاري التجهيز...' : 'تحميل الموقع ZIP'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Save confirmation toast */}
        {saveToast && (
          <div className="bg-emerald-500 text-slate-950 text-xs font-bold py-2 px-4 text-center flex items-center justify-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4" />
            <span>تم حفظ التعديلات وتطبيقها على الموقع فوراً!</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/40 px-4 gap-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('presets')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'presets'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>النماذج الجاهزة والألوان</span>
          </button>

          <button
            onClick={() => setActiveTab('general')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'general'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>البيانات الأساسية والهيرو</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'services'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>الخدمات ({formData.services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('pricing')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'pricing'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>الباقات والأسعار</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'contact'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>بيانات التواصل والواتساب</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'faq'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>الأسئلة الشائعة</span>
          </button>
        </div>

        {/* Tab Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm">
          
          {/* TAB 1: PRESETS & COLORS */}
          {activeTab === 'presets' && (
            <div className="space-y-8">
              
              {/* Presets Grid */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>اختر نموذج عمل جاهز بنقرة واحدة (جاهز للمعاينة والبيع للعميل فوراً):</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {PRESET_OPTIONS.map((item) => {
                    const isSelected = formData.id === item.key;
                    return (
                      <button
                        key={item.key}
                        onClick={() => handlePresetSelect(item.key)}
                        className={`text-right p-4 rounded-2xl border transition-all text-sm flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500 shadow-md ring-2 ring-amber-500/20'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-extrabold text-white text-base">{item.title}</span>
                            {isSelected && (
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400">{item.category}</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                          <span>تطبيق هذا النموذج</span>
                          <span>←</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Color Themes */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-blue-400" />
                  <span>تغيير طابع الألوان والهوية البصرية للموقع:</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {Object.values(COLOR_THEMES).map((theme) => {
                    const isSelected = formData.themeId === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => handleColorSelect(theme.id)}
                        className={`p-3 rounded-xl border text-right transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'bg-slate-800 border-white ring-2 ring-white/20'
                            : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <span 
                          className="w-5 h-5 rounded-full shrink-0 shadow-inner"
                          style={{ backgroundColor: theme.primary }}
                        ></span>
                        <div className="truncate">
                          <div className="text-xs font-bold text-white truncate">{theme.name.split(' ')[0]}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Import / Export JSON Actions */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h5 className="text-xs font-bold text-slate-200">حفظ واسترجاع إعدادات العملاء (JSON)</h5>
                  <p className="text-[11px] text-slate-400">
                    يمكنك تصدير ملف بيانات العميل وحفظه على جهازك، وإعادة رفعه في أي وقت بضغطة زر.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportJSON}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    <FileJson className="w-3.5 h-3.5" />
                    <span>تصدير JSON</span>
                  </button>

                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>استيراد JSON</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportJSON}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: GENERAL & HERO */}
          {activeTab === 'general' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">اسم النشاط أو الشركة</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleFieldChange('businessName', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">التصنيف أو التخصص</label>
                  <input
                    type="text"
                    value={formData.businessCategory}
                    onChange={(e) => handleFieldChange('businessCategory', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">الشعار التسويقي الرئيسي (Headline)</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => handleFieldChange('tagline', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">الوصف الفرعي بالهيرو (Sub-tagline)</label>
                <textarea
                  rows={2}
                  value={formData.subTagline}
                  onChange={(e) => handleFieldChange('subTagline', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">شارة الهيرو الترويجية (Hero Badge)</label>
                  <input
                    type="text"
                    value={formData.heroBadge}
                    onChange={(e) => handleFieldChange('heroBadge', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">العملة الافتراضية</label>
                  <input
                    type="text"
                    value={formData.currency}
                    onChange={(e) => handleFieldChange('currency', e.target.value)}
                    placeholder="ر.س أو ج.م أو $"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">رابط صورة الهيرو (Hero Image URL)</label>
                <input
                  type="url"
                  value={formData.heroImage}
                  onChange={(e) => handleFieldChange('heroImage', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs dir-ltr text-right focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* About section fields */}
              <div className="pt-4 border-t border-slate-800 space-y-4">
                <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider">قسم "من نحن" (About Us)</h4>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">عنوان قسم من نحن</label>
                  <input
                    type="text"
                    value={formData.aboutTitle}
                    onChange={(e) => handleFieldChange('aboutTitle', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">قصة الشركة / نبذة</label>
                  <textarea
                    rows={3}
                    value={formData.aboutStory}
                    onChange={(e) => handleFieldChange('aboutStory', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">رؤية الشركة</label>
                  <textarea
                    rows={2}
                    value={formData.aboutVision}
                    onChange={(e) => handleFieldChange('aboutVision', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">إدارة خدمات العميل</h4>
                  <p className="text-xs text-slate-400">يمكنك تعديل أسماء الخدمات وتفاصيلها ومميزاتها أو إضافة خدمات جديدة.</p>
                </div>
                <button
                  onClick={handleAddService}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>إضافة خدمة جديدة</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.services.map((service, idx) => (
                  <div key={service.id} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400">خدمة #{idx + 1}</span>
                      {formData.services.length > 1 && (
                        <button
                          onClick={() => handleDeleteService(idx)}
                          className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>حذف</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">اسم الخدمة</label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => handleUpdateService(idx, 'title', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">التسعير التقديري</label>
                        <input
                          type="text"
                          value={service.price || ''}
                          onChange={(e) => handleUpdateService(idx, 'price', e.target.value)}
                          placeholder="مثال: يبدأ من 2,500 ر.س"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">وصف الخدمة</label>
                      <textarea
                        rows={2}
                        value={service.description}
                        onChange={(e) => handleUpdateService(idx, 'description', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        المزايا المشمولة (افصل بين كل ميزة بفاصلة ,)
                      </label>
                      <input
                        type="text"
                        value={service.features.join(', ')}
                        onChange={(e) => handleUpdateService(idx, 'features', e.target.value.split(',').map(s => s.trim()))}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PRICING */}
          {activeTab === 'pricing' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">باقات الأسعار</h4>
                <p className="text-xs text-slate-400">تعديل باقات الاشتراك والأسعار المعروضة لعملاء الموقع.</p>
              </div>

              <div className="space-y-4">
                {formData.pricingTiers.map((tier, idx) => (
                  <div key={tier.id} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400">باقة #{idx + 1} ({tier.name})</span>
                      <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={tier.popular || false}
                          onChange={(e) => handleUpdatePricing(idx, 'popular', e.target.checked)}
                          className="rounded border-slate-700"
                        />
                        <span>تمييز كـ "الأكثر طلباً"</span>
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">اسم الباقة</label>
                        <input
                          type="text"
                          value={tier.name}
                          onChange={(e) => handleUpdatePricing(idx, 'name', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">السعر</label>
                        <input
                          type="text"
                          value={tier.price}
                          onChange={(e) => handleUpdatePricing(idx, 'price', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">المدة</label>
                        <input
                          type="text"
                          value={tier.period}
                          onChange={(e) => handleUpdatePricing(idx, 'period', e.target.value)}
                          placeholder="شهرياً / للمتر / للمشروع"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">وصف الباقة</label>
                      <input
                        type="text"
                        value={tier.description}
                        onChange={(e) => handleUpdatePricing(idx, 'description', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        المزايا المشمولة (افصل بين كل ميزة بفاصلة ,)
                      </label>
                      <input
                        type="text"
                        value={tier.features.join(', ')}
                        onChange={(e) => handleUpdatePricing(idx, 'features', e.target.value.split(',').map(s => s.trim()))}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CONTACT & WHATSAPP */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">أرقام التواصل والربط المباشر بالواتساب</h4>
                <p className="text-xs text-slate-400">
                  عند تغيير رقم الواتساب هنا، سيتم تحويل كافة طلبات الموقع إلى هذا الرقم تلقائياً.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-emerald-400 mb-1">
                    رقم الواتساب لاستقبال الطلبات (مع كود الدولة) *
                  </label>
                  <input
                    type="text"
                    value={formData.contactInfo.whatsapp}
                    onChange={(e) => handleContactChange('whatsapp', e.target.value)}
                    placeholder="966501234567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-300 text-sm focus:outline-none focus:border-emerald-400 dir-ltr text-right"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">بدون علامة + أو مسافات، مثال: 966501234567 أو 201012345678</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الهاتف المباشر</label>
                  <input
                    type="text"
                    value={formData.contactInfo.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400 dir-ltr text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">البريد الإلكتروني الرسمي</label>
                  <input
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(e) => handleContactChange('email', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400 dir-ltr text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">ساعات وأيام العمل</label>
                  <input
                    type="text"
                    value={formData.contactInfo.workingHours}
                    onChange={(e) => handleContactChange('workingHours', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">عنوان المقر / الفرع</label>
                <input
                  type="text"
                  value={formData.contactInfo.address}
                  onChange={(e) => handleContactChange('address', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-800">
                <h5 className="text-xs font-bold text-slate-300 mb-3">روابط حسابات التواصل الاجتماعي (اختياري)</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">رابط إنستغرام</label>
                    <input
                      type="url"
                      value={formData.contactInfo.instagramUrl || ''}
                      onChange={(e) => handleContactChange('instagramUrl', e.target.value)}
                      placeholder="https://instagram.com/..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs dir-ltr text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">رابط تويتر / X</label>
                    <input
                      type="url"
                      value={formData.contactInfo.twitterUrl || ''}
                      onChange={(e) => handleContactChange('twitterUrl', e.target.value)}
                      placeholder="https://twitter.com/..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs dir-ltr text-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">الأسئلة الشائعة وإجاباتها</h4>
                <p className="text-xs text-slate-400">إضافة وتعديل الأسئلة التي يبحث عنها زوار موقع العميل.</p>
              </div>

              <div className="space-y-4">
                {formData.faq.map((item, idx) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400">سؤال #{idx + 1}</span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">نص السؤال</label>
                      <input
                        type="text"
                        value={item.question}
                        onChange={(e) => {
                          const updatedFaq = [...formData.faq];
                          updatedFaq[idx] = { ...updatedFaq[idx], question: e.target.value };
                          handleFieldChange('faq', updatedFaq);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">الإجابة</label>
                      <textarea
                        rows={2}
                        value={item.answer}
                        onChange={(e) => {
                          const updatedFaq = [...formData.faq];
                          updatedFaq[idx] = { ...updatedFaq[idx], answer: e.target.value };
                          handleFieldChange('faq', updatedFaq);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            يتم تطبيق كافة التغييرات على المعاينة الحية فوراً.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              إغلاق المعاينة
            </button>

            <button
              onClick={onDownloadZip}
              disabled={isDownloading}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 shadow-lg shadow-emerald-700/20 transition-all disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isDownloading ? 'جاري تجهيز التحميل...' : 'تحميل الموقع على الكمبيوتر (ZIP)'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

function SlidersHorizontalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
}

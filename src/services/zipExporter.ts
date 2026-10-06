import JSZip from 'jszip';
import { ClientWebsiteData } from '../types';
import { COLOR_THEMES } from '../data/presets';

export async function generateClientWebsiteZip(data: ClientWebsiteData): Promise<Blob> {
  const zip = new JSZip();
  const theme = COLOR_THEMES[data.themeId] || COLOR_THEMES.blue;

  // 1. Generate standalone, production-ready index.html with live styling and interactivity
  const standaloneHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(data.businessName)} | ${escapeHtml(data.tagline)}</title>
  <meta name="description" content="${escapeHtml(data.subTagline)}">
  <meta property="og:title" content="${escapeHtml(data.businessName)} - ${escapeHtml(data.tagline)}">
  <meta property="og:description" content="${escapeHtml(data.subTagline)}">
  <meta property="og:type" content="website">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Cairo', 'sans-serif'],
          },
          colors: {
            brand: '${theme.primary}',
          }
        }
      }
    }
  </script>
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <style>
    body { font-family: 'Cairo', sans-serif; background-color: #0b1120; color: #f8fafc; }
    .glass-card { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
    .glass-nav { background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 min-h-screen flex flex-col justify-between">

  <!-- Navbar -->
  <header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform">
          ${data.businessName.charAt(0)}
        </div>
        <div class="flex flex-col">
          <span class="font-extrabold text-lg text-white tracking-tight">${escapeHtml(data.businessName)}</span>
          <span class="text-xs text-slate-400 font-medium">${escapeHtml(data.businessCategory)}</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#about" class="hover:text-white transition-colors">من نحن</a>
        <a href="#services" class="hover:text-white transition-colors">خدماتنا</a>
        <a href="#portfolio" class="hover:text-white transition-colors">أعمالنا</a>
        <a href="#pricing" class="hover:text-white transition-colors">الباقات</a>
        <a href="#testimonials" class="hover:text-white transition-colors">آراء العملاء</a>
        <a href="#faq" class="hover:text-white transition-colors">الأسئلة الشائعة</a>
      </nav>

      <!-- CTA Action -->
      <div class="hidden sm:flex items-center gap-3">
        <a href="https://wa.me/${data.contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدمات ' + data.businessName)}" target="_blank" class="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span>واتساب فوري</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 text-center lg:text-right space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold ${theme.badgeBg} border ${theme.badgeBorder}">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>${escapeHtml(data.heroBadge)}</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
            ${escapeHtml(data.tagline)}
          </h1>

          <p class="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            ${escapeHtml(data.subTagline)}
          </p>

          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#contact" class="px-8 py-3.5 rounded-xl font-bold text-base ${theme.buttonBg} shadow-xl shadow-brand/25 transition-all hover:scale-105 text-center">
              تواصل معنا الآن
            </a>
            <a href="#services" class="px-7 py-3.5 rounded-xl font-bold text-base glass-card text-white hover:bg-slate-800 transition-all text-center">
              استكشف خدماتنا
            </a>
          </div>

          <!-- Quick trust row -->
          <div class="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
            <div class="flex items-center gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>
              <span>ضمان جودة معتمد</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-amber-400"></i>
              <span>سرعة استجابة وتنفيذ</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i>
              <span>عقود رسمية موثقة</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
            <img src="${escapeHtml(data.heroImage)}" alt="${escapeHtml(data.businessName)}" class="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 right-6 left-6 glass-card p-4 rounded-xl border border-white/10">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-sm font-bold text-white">${escapeHtml(data.businessName)}</h4>
                  <p class="text-xs text-slate-300">${escapeHtml(data.businessCategory)}</p>
                </div>
                <span class="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">متاح الآن</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Stats Counter Bar -->
  <section class="border-y border-slate-800 bg-slate-900/60 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        ${data.stats.map(stat => `
          <div class="p-4 space-y-1">
            <div class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}">${escapeHtml(stat.value)}</div>
            <div class="text-xs sm:text-sm text-slate-400 font-medium">${escapeHtml(stat.label)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-5 order-2 lg:order-1">
          <div class="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <img src="${escapeHtml(data.aboutImage)}" alt="${escapeHtml(data.aboutTitle)}" class="w-full h-[400px] object-cover">
          </div>
        </div>

        <div class="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <div class="text-xs font-bold text-brand uppercase tracking-wider">من نحن</div>
          <h2 class="text-3xl sm:text-4xl font-black text-white">${escapeHtml(data.aboutTitle)}</h2>
          <p class="text-slate-300 leading-relaxed text-base">${escapeHtml(data.aboutStory)}</p>
          <p class="text-slate-400 text-sm leading-relaxed">${escapeHtml(data.aboutVision)}</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            ${data.aboutBullets.map(bullet => `
              <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <i data-lucide="check" class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"></i>
                <span class="text-xs sm:text-sm text-slate-200">${escapeHtml(bullet)}</span>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-24 bg-slate-900/40 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="text-xs font-bold text-brand uppercase tracking-wider">حلول متكاملة</div>
        <h2 class="text-3xl sm:text-4xl font-black text-white">خدماتنا المتميزة لك</h2>
        <p class="text-slate-400 text-base">نقدم باقة شاملة من الخدمات المصممة خصيصاً لتلبية طموحاتك وتحقيق أعلى درجات النجاح والكفاءة.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${data.services.map(s => `
          <div class="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-slate-600 transition-all hover:-translate-y-1 group">
            <div>
              <div class="w-12 h-12 rounded-xl bg-slate-800/90 text-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <i data-lucide="sparkles" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${escapeHtml(s.title)}</h3>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">${escapeHtml(s.description)}</p>
              
              <ul class="space-y-2 mb-6">
                ${s.features.map(f => `
                  <li class="flex items-center gap-2 text-xs text-slate-300">
                    <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i>
                    <span>${escapeHtml(f)}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-400">${escapeHtml(s.price || 'حسب المتطلبات')}</span>
              <a href="#contact" class="text-xs font-bold text-brand hover:underline flex items-center gap-1">
                <span>طلب الخدمة</span>
                <i data-lucide="arrow-left" class="w-3 h-3"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Portfolio / Projects -->
  <section id="portfolio" class="py-24 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="text-xs font-bold text-brand uppercase tracking-wider">سجل الإنجازات</div>
        <h2 class="text-3xl sm:text-4xl font-black text-white">نماذج من أعمالنا السابقة</h2>
        <p class="text-slate-400 text-base">نفتخر بثقة عملائنا وبالمشاريع الناجحة التي قمنا بتنفيذها بأعلى معايير الإتقان.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${data.portfolio.map(p => `
          <div class="rounded-2xl overflow-hidden glass-card border border-slate-800 group hover:border-slate-700 transition-all">
            <div class="relative h-56 overflow-hidden">
              <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 backdrop-blur-md text-slate-200 border border-slate-700">
                ${escapeHtml(p.category)}
              </span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="text-lg font-bold text-white">${escapeHtml(p.title)}</h3>
              <p class="text-xs text-slate-400 leading-relaxed">${escapeHtml(p.summary)}</p>
              ${p.results ? `
                <div class="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <i data-lucide="trending-up" class="w-4 h-4"></i>
                  <span>${escapeHtml(p.results)}</span>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Pricing Tiers -->
  <section id="pricing" class="py-24 bg-slate-900/50 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="text-xs font-bold text-brand uppercase tracking-wider">أسعار واضحة ومناسبة</div>
        <h2 class="text-3xl sm:text-4xl font-black text-white">اختر الباقة المناسبة لاحتياجاتك</h2>
        <p class="text-slate-400 text-base">باقات مرنة تناسب الشركات الناشئة، المتوسطة، والمؤسسات الكبرى بدون أي تكاليف خفية.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        ${data.pricingTiers.map(tier => `
          <div class="glass-card rounded-2xl p-8 flex flex-col justify-between relative ${tier.popular ? 'border-brand ring-2 ring-brand/30 shadow-2xl bg-slate-900/90' : 'border-slate-800'}">
            ${tier.popular ? `
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-brand text-white shadow-md">
                الأكثر طلباً واختياراً
              </div>
            ` : ''}

            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-2">${escapeHtml(tier.name)}</h3>
                <p class="text-xs text-slate-400">${escapeHtml(tier.description)}</p>
              </div>

              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-black text-white">${escapeHtml(tier.price)}</span>
                <span class="text-sm font-semibold text-slate-400">${escapeHtml(data.currency)} / ${escapeHtml(tier.period)}</span>
              </div>

              <ul class="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                ${tier.features.map(f => `
                  <li class="flex items-center gap-3">
                    <i data-lucide="check" class="w-4 h-4 text-emerald-400 shrink-0"></i>
                    <span>${escapeHtml(f)}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="pt-8">
              <a href="https://wa.me/${data.contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('مرحباً، أود الاشتراك في ' + tier.name + ' لـ ' + data.businessName)}" target="_blank" class="w-full block py-3.5 px-6 rounded-xl font-bold text-center text-sm ${tier.popular ? theme.buttonBg : 'bg-slate-800 hover:bg-slate-700 text-white'} transition-all">
                ${escapeHtml(tier.ctaText)}
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section id="testimonials" class="py-24 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="text-xs font-bold text-brand uppercase tracking-wider">شهادات نعتز بها</div>
        <h2 class="text-3xl sm:text-4xl font-black text-white">ماذا يقول عملاؤنا عنا؟</h2>
        <p class="text-slate-400 text-base">آراء حقيقية من شركاء وضيوف اختبروا خدماتنا وتلمسوا الفارق في أعمالهم.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${data.testimonials.map(t => `
          <div class="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border border-slate-800">
            <div class="space-y-3">
              <div class="flex items-center gap-1 text-amber-400">
                ${Array(t.rating).fill('★').join('')}
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">"${escapeHtml(t.comment)}"</p>
            </div>

            <div class="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <img src="${escapeHtml(t.avatar)}" alt="${escapeHtml(t.name)}" class="w-10 h-10 rounded-full object-cover border border-slate-700">
              <div>
                <h4 class="text-sm font-bold text-white">${escapeHtml(t.name)}</h4>
                <p class="text-xs text-slate-400">${escapeHtml(t.role)} - ${escapeHtml(t.company)}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="py-24 bg-slate-900/40 border-t border-slate-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 space-y-4">
        <div class="text-xs font-bold text-brand uppercase tracking-wider">إجابات فورية</div>
        <h2 class="text-3xl sm:text-4xl font-black text-white">الأسئلة الشائعة</h2>
        <p class="text-slate-400 text-base">إجابات واضحة عن أكثر التساؤلات التي يطرحها عملاؤنا الكرام.</p>
      </div>

      <div class="space-y-4">
        ${data.faq.map((item, idx) => `
          <details class="group glass-card rounded-xl border border-slate-800 overflow-hidden" ${idx === 0 ? 'open' : ''}>
            <summary class="flex items-center justify-between p-5 font-bold text-slate-100 cursor-pointer select-none">
              <span>${escapeHtml(item.question)}</span>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
            </summary>
            <div class="p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 mt-1">
              ${escapeHtml(item.answer)}
            </div>
          </details>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-24 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div class="lg:col-span-5 space-y-8">
          <div>
            <div class="text-xs font-bold text-brand uppercase tracking-wider">تواصل مباشر</div>
            <h2 class="text-3xl sm:text-4xl font-black text-white mt-2">نحن هنا للإجابة عن كافة استفساراتك</h2>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed">فريقنا جاهز لخدمتك وتقديم الاستشارات اللازمة لبدء العمل في أقرب وقت.</p>
          </div>

          <div class="space-y-4">
            <a href="tel:${data.contactInfo.phone}" class="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-slate-600 transition-colors">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <i data-lucide="phone" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="text-xs text-slate-400">الهاتف المباشر</div>
                <div class="text-sm font-bold text-white dir-ltr text-right">${escapeHtml(data.contactInfo.phone)}</div>
              </div>
            </a>

            <a href="https://wa.me/${data.contactInfo.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" class="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-emerald-600/40 transition-colors">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <i data-lucide="message-circle" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="text-xs text-slate-400">محادثة واتساب فورية</div>
                <div class="text-sm font-bold text-emerald-400 dir-ltr text-right">${escapeHtml(data.contactInfo.whatsapp)}</div>
              </div>
            </a>

            <div class="flex items-center gap-4 p-4 rounded-xl glass-card">
              <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <i data-lucide="map-pin" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="text-xs text-slate-400">العنوان والموقع</div>
                <div class="text-sm font-medium text-slate-200">${escapeHtml(data.contactInfo.address)}</div>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 rounded-xl glass-card">
              <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <i data-lucide="clock" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="text-xs text-slate-400">ساعات العمل الرسمية</div>
                <div class="text-sm font-medium text-slate-200">${escapeHtml(data.contactInfo.workingHours)}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="glass-card p-8 rounded-2xl border border-slate-800">
            <h3 class="text-xl font-bold text-white mb-2">أرسل استفسارك وسنعاود الاتصال بك</h3>
            <p class="text-xs text-slate-400 mb-6">سيتم تحويل رسالتك تلقائياً إلى رقم الواتساب المعتمد لسرعة الرد والمتابعة.</p>

            <form id="contactForm" class="space-y-4" onsubmit="event.preventDefault(); sendToWhatsApp();">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-2">الاسم الكامل *</label>
                  <input type="text" id="senderName" required placeholder="أدخل اسمك" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-2">رقم الجوال *</label>
                  <input type="tel" id="senderPhone" required placeholder="05xxxxxxxx" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand">
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-2">الخدمة المطلوبة</label>
                <select id="selectedService" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand">
                  ${data.services.map(s => `<option value="${escapeHtml(s.title)}">${escapeHtml(s.title)}</option>`).join('')}
                  <option value="استفسار عام">استفسار عام أو طلب مخصص</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-2">تفاصيل الرسالة أو الاستفسار *</label>
                <textarea id="senderMessage" rows="4" required placeholder="اكتب تفاصيل طلبك هنا..." class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand"></textarea>
              </div>

              <button type="submit" class="w-full py-4 px-6 rounded-xl font-bold text-white text-sm ${theme.buttonBg} transition-all hover:scale-[1.01] flex items-center justify-center gap-2">
                <i data-lucide="send" class="w-4 h-4"></i>
                <span>إرسال الرسالة عبر الواتساب</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <span class="font-bold text-white text-base">${escapeHtml(data.businessName)}</span>
        <span>·</span>
        <span>${escapeHtml(data.businessCategory)}</span>
      </div>
      <div>
        جميع الحقوق محفوظة © ${new Date().getFullYear()} ${escapeHtml(data.businessName)}
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Quick Button -->
  <a href="https://wa.me/${data.contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدماتكم.')}" target="_blank" class="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
    <i data-lucide="message-circle" class="w-7 h-7"></i>
  </a>

  <!-- Initialize Lucide Icons & WhatsApp Form Handler -->
  <script>
    lucide.createIcons();

    function sendToWhatsApp() {
      const name = document.getElementById('senderName').value;
      const phone = document.getElementById('senderPhone').value;
      const service = document.getElementById('selectedService').value;
      const message = document.getElementById('senderMessage').value;

      const text = encodeURIComponent(
        'مرحباً ' + '${escapeHtml(data.businessName)}' + '،\\n' +
        'الاسم: ' + name + '\\n' +
        'الجوال: ' + phone + '\\n' +
        'الخدمة المطلوبة: ' + service + '\\n' +
        'الرسالة: ' + message
      );

      const targetWhatsapp = '${data.contactInfo.whatsapp.replace(/[^0-9]/g, '')}';
      window.open('https://wa.me/' + targetWhatsapp + '?text=' + text, '_blank');
    }
  </script>
</body>
</html>`;

  // 2. Add files to the ZIP bundle
  zip.file('index.html', standaloneHtml);
  zip.file('client-config.json', JSON.stringify(data, null, 2));

  // 3. Clear Arabic README guide
  const readmeContent = `========================================================================
دليل تشغيل ورفع الموقع الإلكتروني للعميل | ${data.businessName}
========================================================================

أهلاً بك! هذا الملف يحتوي على الموقع الإلكتروني الكامل والمخصص لـ: ${data.businessName}.
الموقع مصمم بكود نظيف جداً ومتوافق مع جميع الهواتف الذكية والأجهزة اللوحية والكمبيوتر.

------------------------------------------------------------------------
1. كيفية فتح الموقع ومعاينته على جهازك:
------------------------------------------------------------------------
- فك الضغط عن هذا المجلد (Extract All / Unzip).
- اضغط مرتين على ملف "index.html" وسيفتح الموقع مباشرة في أي متصفح (Chrome, Edge, Safari).
- لا تحتاج إلى تنصيب أي برامج إضافية؛ الموقع يعمل ذاتياً وفورياً!

------------------------------------------------------------------------
2. كيفية رفع الموقع على الإنترنت مجاناً أو على استضافة العميل:
------------------------------------------------------------------------

الخيار أ: الرفع السريع المجاني في دقيقة واحدة (Netlify أو Vercel):
1. افتح موقع: https://app.netlify.com/drop
2. اسحب ملف "index.html" إلى المتصفح.
3. مبروك! أصبح الموقع حياً ومباشراً برابط سريع جداً وشهادة أمان SSL مجاناً.
4. يمكنك ربط دومين العميل الخاص (.com أو .sa) بضغطة زر من لوحة تحكم Netlify.

الخيار ب: الرفع على استضافة العميل التقليدية (cPanel أو Hostinger):
1. ادخل إلى لوحة تحكم الاستضافة (cPanel أو hPanel).
2. افتح مدير الملفات (File Manager) ثم مجلد "public_html".
3. ارفع ملف "index.html" بداخله.
4. سيفتح الموقع مباشرة عند كتابة الدومين الخاص بالعميل!

------------------------------------------------------------------------
3. كيفية تعديل البيانات مستقبلاً:
------------------------------------------------------------------------
- يمكنك فتح ملف "client-config.json" واستيراده في منشئ المواقع لتعديل أي بيانات وإعادة تحميل الموقع المحدث في ثوانٍ.
- أو يمكنك فتح ملف "index.html" بواسطة أي محرر نصوص (مثل Notepad أو VS Code) وتعديل أي أرقام هواتف أو أسماء بكل سهولة.

------------------------------------------------------------------------
4. ملفات الحزمة:
------------------------------------------------------------------------
- index.html: ملف الموقع الكامل المبرمج بأحدث تقنيات Tailwind CSS و Lucide Icons.
- client-config.json: ملف إعدادات العميل الاحتياطي لاستيراده في أي وقت.
- README_طريقة_التشغيل_والتعديل.txt: هذا الدليل الإرشادي.

تم التوليد بنجاح وجاهز للتسليم للعميل مباشرة!
`;

  zip.file('README_طريقة_التشغيل_والتعديل.txt', readmeContent);

  // 4. Netlify / Vercel redirects config
  zip.file('_redirects', '/*    /index.html   200');

  return await zip.generateAsync({ type: 'blob' });
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

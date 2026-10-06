import JSZip from 'jszip';

export async function generateNeonStudioZip(): Promise<Blob> {
  const zip = new JSZip();

  const standaloneHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>المحترف لتصميم المواقع | Pro Web Design</title>
  <meta name="description" content="المحترف لتصميم المواقع - نصمم لك موقعاً رقمياً مبهراً يلفت الأنظار، متوافقاً 100% مع الهواتف الذكية وسريع التحميل. تطوير وتنفيذ المهندس مينا عايد">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Cairo', 'sans-serif'],
          },
          colors: {
            cyan: {
              400: '#22d3ee',
              500: '#06b6d4',
            }
          }
        }
      }
    }
  </script>
  
  <!-- Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <style>
    body {
      font-family: 'Cairo', sans-serif;
      background-color: #070b13;
      color: #f8fafc;
    }
    .neon-card {
      background: rgba(12, 18, 30, 0.85);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
  </style>
</head>
<body class="bg-[#070b13] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen flex flex-col justify-between">

  <!-- Header -->
  <header class="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#070b13]/85 border-b border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.25)]">
          <i data-lucide="cpu" class="w-5 h-5"></i>
        </div>
        <span class="font-black text-xl text-white">المحترف لتصميم المواقع</span>
      </div>

      <div class="flex items-center gap-3">
        <a href="https://wa.me/201554232400?text=${encodeURIComponent('مرحباً مهندس مينا عايد، أود الاستفسار وطلب تصميم موقع.')}" target="_blank" class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2">
          <span>لطلب وإرسال البيانات</span>
          <i data-lucide="send" class="w-3.5 h-3.5"></i>
        </a>
      </div>

    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative pt-16 pb-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Right Column -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-right">
          
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0d1627] text-cyan-400 border border-cyan-500/30">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>تقنية 2026 • مواقع فائقة السرعة بقوة الذكاء الاصطناعي</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.2]">
            مواقع إلكترونية ذكية <br>
            تجمع بين <span class="text-cyan-400">روعة</span> التصميم <br>
            <span class="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              وسرعة البيع
            </span>
          </h1>

          <p class="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            نصمم لك موقعاً رقمياً مبهراً يلفت الأنظار، متوافقاً 100% مع الهواتف الذكية وسريع التحميل، ومجهزاً بأزرار الواتساب والاتصال المباشر لتحويل زوارك إلى عملاء فعليين.
          </p>

          <div class="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="https://wa.me/201554232400?text=${encodeURIComponent('مرحباً مهندس مينا عايد، أود طلب تصميم موقع احترافي لعملي.')}" target="_blank" class="px-8 py-4 rounded-2xl font-black text-base bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all flex items-center gap-3">
              <i data-lucide="phone" class="w-5 h-5"></i>
              <span>تواصل معي واطلب موقعك الآن</span>
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </a>
          </div>

          <div class="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-xs sm:text-sm">
            <div>
              <div class="text-slate-400">سرعة التحميل</div>
              <div class="text-base font-black text-cyan-400">0.32 ثانية</div>
            </div>
            <div>
              <div class="text-slate-400">توافق الهواتف</div>
              <div class="text-base font-black text-purple-400">100% استجابة</div>
            </div>
            <div>
              <div class="text-slate-400">معدل رضا العملاء</div>
              <div class="text-base font-black text-emerald-400">99.8% تقييم</div>
            </div>
          </div>

        </div>

        <!-- Left Column (Featured Card) -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl p-7 neon-card border border-slate-800 space-y-6">
            
            <div class="flex items-center justify-between border-b border-slate-800 pb-4">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-bold text-emerald-400">جاهز للتسليم خلال أسبوع</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                <i data-lucide="smartphone" class="w-4 h-4 text-cyan-400"></i>
                <span>باقة تصميم وبرمجة موقع احترافي</span>
              </div>
            </div>

            <div class="flex items-start justify-between gap-4">
              <div>
                <span class="text-[11px] font-bold text-cyan-400 block mb-1">باقة موقع تجاري متكامل</span>
                <h3 class="text-2xl font-black text-white">المحترف لتصميم المواقع</h3>
                <p class="text-xs text-slate-400 mt-1">تصميم مواقع وتطبيقات الذكاء الاصطناعي</p>
              </div>

              <div class="text-left space-y-1">
                <div class="text-[10px] text-slate-400 font-semibold">سعر الباقة بعد الخصم</div>
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl font-black text-emerald-400">6,500 ج.م</span>
                  <del class="text-xs text-slate-500">8,500 ج.م</del>
                </div>
                <div class="text-[11px] font-bold text-cyan-300">
                  ( يعادل 135$ بدلاً من 175$ )
                </div>
                <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <i data-lucide="flame" class="w-3 h-3 text-amber-400"></i>
                  <span>🔥 خصم خاص 2,000 ج.م لفترة محدودة</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-400 shrink-0"></i>
                <span>متوافق 100% مع الهواتف والآيفون</span>
              </div>
              <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-400 shrink-0"></i>
                <span>ربط مباشر بزر واتساب للطلبات</span>
              </div>
              <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-400 shrink-0"></i>
                <span>سرعة فتح قياسية (أقل من نصف ثانية)</span>
              </div>
              <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-400 shrink-0"></i>
                <span>حماية مشفرة ضد السرقة والقرصنة</span>
              </div>
            </div>

            <a href="https://wa.me/201554232400?text=${encodeURIComponent('مرحباً مهندس مينا عايد، أود طلب باقة الموقع المتكاملة.')}" target="_blank" class="w-full py-3.5 px-4 rounded-xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>طلب الموقع الآن على الواتساب</span>
            </a>

            <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span class="font-bold text-slate-300">تطوير وتنفيذ المهندس: مينا عايد (Mina Ayed)</span>
              <span class="text-emerald-400 font-semibold">• يعمل بكفاءة 100%</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 4 Pillars Section -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0d1627] text-cyan-400 border border-cyan-500/30">
          <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
          <span>مميزات الموقع للعملاء</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-black text-white">
          4 ركائز تضمن نجاح موقعك وتفوقه على المنافسين
        </h2>

        <p class="text-slate-400 text-sm sm:text-base">
          كل ما يحتاجه نشاطك التجاري ليظهر بأرقى مظهر ويزيد مبيعاتك وأرباحك من اليوم الأول.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Pillar 1 -->
        <div class="p-7 rounded-3xl neon-card space-y-6">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-cyan-400 border border-cyan-500/30">RESPONSIVE // 01</span>
            <div class="w-10 h-10 rounded-xl bg-cyan-950/60 text-cyan-400 flex items-center justify-center">
              <i data-lucide="smartphone" class="w-5 h-5"></i>
            </div>
          </div>
          <h3 class="text-xl font-black text-white">استجابة فائقة السرعة على الموبايل</h3>
          <p class="text-xs sm:text-sm text-slate-300">أكثر من 85% من عملائك يتصفحون من الهاتف. نضمن أن يفتح موقعك بسلاسة وسرعة خيالية على جميع الشاشات بدون أي تقطيع.</p>
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
            <div class="flex justify-between text-cyan-400"><span>سرعة التحميل على الهاتف:</span><span class="font-bold">0.34s (أسرع 10x)</span></div>
            <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden"><div class="h-full bg-cyan-400 rounded-full w-[94%]"></div></div>
            <div class="flex justify-between text-[11px] text-slate-400"><span>Loss: 0.00%</span><span>Google Lighthouse: 99/100</span></div>
          </div>
        </div>

        <!-- Pillar 2 -->
        <div class="p-7 rounded-3xl neon-card space-y-6">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-purple-400 border border-purple-500/30">AI DRIVEN // 02</span>
            <div class="w-10 h-10 rounded-xl bg-purple-950/60 text-purple-400 flex items-center justify-center">
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </div>
          </div>
          <h3 class="text-xl font-black text-white">تصميم ذكي يجذب العملاء والمبيعات</h3>
          <p class="text-xs sm:text-sm text-slate-300">تصميم واجهات مبهرة ومدروسة سيكولوجياً لجعل العميل يضغط على زر الطلب والاتصال دون تردد، مما يرفع نسبة مبيعاتك.</p>
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
            <div class="flex justify-between text-purple-300"><span class="text-slate-400">حالة فحص التصميم:</span><span class="font-bold">تصميم مثالي وناجح</span></div>
            <div class="p-2.5 rounded-xl bg-purple-900/40 text-center text-purple-200 font-bold">فحص جاهزية الموقع للبيع ✔</div>
            <div class="flex justify-between text-[11px] text-slate-400"><span>معدل التحويل: ممتاز</span><span>الدقة: 99.9%</span></div>
          </div>
        </div>

        <!-- Pillar 3 -->
        <div class="p-7 rounded-3xl neon-card space-y-6">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-emerald-400 border border-emerald-500/30">SEO & SPEED // 03</span>
            <div class="w-10 h-10 rounded-xl bg-emerald-950/60 text-emerald-400 flex items-center justify-center">
              <i data-lucide="activity" class="w-5 h-5"></i>
            </div>
          </div>
          <h3 class="text-xl font-black text-white">متوافق مع محركات البحث (SEO)</h3>
          <p class="text-xs sm:text-sm text-slate-300">تهيئة كاملة للظهور في الصفحة الأولى على جوجل عندما يبحث العملاء عن خدماتك أو منتجاتك في مدينتك.</p>
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
            <div class="text-slate-400">مؤشرات الأداء على جوجل:</div>
            <div class="flex justify-between text-[11px]"><span>1. سرعة تحميل الصفحة</span><span class="text-emerald-400 font-bold">0.14s</span></div>
            <div class="w-full h-1.5 rounded-full bg-slate-800"><div class="h-full bg-emerald-400 rounded-full w-[96%]"></div></div>
            <div class="flex justify-between text-[11px] pt-1"><span>2. استقرار الواجهة</span><span class="text-cyan-400 font-bold">0.00 (مثالي)</span></div>
            <div class="w-full h-1.5 rounded-full bg-slate-800"><div class="h-full bg-cyan-400 rounded-full w-full"></div></div>
          </div>
        </div>

        <!-- Pillar 4 -->
        <div class="p-7 rounded-3xl neon-card space-y-6">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-cyan-400 border border-cyan-500/30">SECURITY // 04</span>
            <div class="w-10 h-10 rounded-xl bg-cyan-950/60 text-cyan-400 flex items-center justify-center">
              <i data-lucide="shield-check" class="w-5 h-5"></i>
            </div>
          </div>
          <h3 class="text-xl font-black text-white">حماية مشفرة واستقرار 24/7</h3>
          <p class="text-xs sm:text-sm text-slate-300">موقعك محمي بالكامل بسيرفرات سحابية آمنة مع نظام قفل بكلمة مرور واسم مستخدم لمنع أي شخص من سرقة تصميمك أو بياناتك.</p>
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
            <div class="flex justify-between text-slate-400"><span>حالة السيرفر والأمان:</span><span class="text-emerald-400 font-bold">مشفر ومحمي 100% ✔</span></div>
            <div class="p-2.5 rounded-xl bg-slate-900 text-center text-slate-200 font-mono text-xs">الحماية نشطة وسحابية بالكامل</div>
            <div class="flex justify-between text-[11px] text-slate-400"><span>الحماية: نشطة</span><span>زمن الإصلاح: أقل من 15ms</span></div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA Banner Section -->
  <section class="py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0e1424] to-[#090d17] border border-slate-800 text-center space-y-6">
        <h2 class="text-3xl sm:text-5xl font-black text-white">جاهز لامتلاك موقع ذكي يبهر عملاءك ويزيد مبيعاتك؟</h2>
        <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">تواصل معي مباشرة لتنفيذ موقعك وتخصيصه بالكامل بما يلائم مجالك (عيادات، شركات، عقارات، متاجر) بأعلى جودة وأفضل سعر.</p>
        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a href="https://wa.me/201554232400?text=${encodeURIComponent('مرحباً مهندس مينا عايد، أود الاستفسار وطلب تصميم موقع ذكي لعملي.')}" target="_blank" class="px-8 py-4 rounded-2xl font-black text-base bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 shadow-lg flex items-center gap-2">
            <i data-lucide="phone" class="w-5 h-5"></i>
            <span>تواصل معي على الواتساب</span>
          </a>
          <a href="mailto:minaayed33@gmail.com?subject=طلب%20تصميم%20موقع%20جديد" class="px-8 py-4 rounded-2xl font-bold text-base bg-[#0f172a] border border-cyan-500/40 text-cyan-300 hover:text-white flex items-center gap-2">
            <i data-lucide="message-square" class="w-4 h-4"></i>
            <span>( لطلب وإرسال البيانات )</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-slate-800/80 bg-[#06090f] py-8 text-center text-xs text-slate-400">
    <div class="max-w-7xl mx-auto px-4">
      <p>المحترف لتصميم المواقع (Pro Web Design) © ${new Date().getFullYear()} — تطوير وتنفيذ المهندس مينا عايد (Mina Ayed) • هاتف/واتساب: 01554232400</p>
    </div>
  </footer>

  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;

  zip.file('index.html', standaloneHtml);
  zip.file('README_تشغيل_الموقع.txt', `========================================================================
المحترف لتصميم المواقع | Pro Web Design
تطوير وتنفيذ: المهندس مينا عايد (Mina Ayed)
هاتف وواتساب: 01554232400
البريد الإلكتروني: minaayed33@gmail.com
========================================================================

أهلاً بك مهندس مينا!
هذا هو موقع "المحترف لتصميم المواقع (Pro Web Design)" الكامل والمبرمج بأعلى تقنيات الويب والتصميم المستقبلي.

1. طريقة الفتح على الكمبيوتر:
- اضغط مرتين على ملف "index.html" وسيفتح فوراً في أي متصفح (Chrome, Edge, Safari).
- يعمل فورياً بدون الحاجة لتثبيت برامج أو سيرفرات.

2. الرفع على الإنترنت:
- يمكنك رفعه على Netlify Drop (https://app.netlify.com/drop) بالسحب والإفلات خلال 10 ثوانٍ.
- أو رفعه على استضافة cPanel داخل مجلد public_html.

جميع أزرار الواتساب مربوطة برقمك: 01554232400
وطلبات البريد موجهة إلى: minaayed33@gmail.com
`);

  return await zip.generateAsync({ type: 'blob' });
}

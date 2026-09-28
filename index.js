const HTML = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- ===== SEO — Meta Tags ===== -->
<title>تعمیرات تخصصی نرم‌افزاری موبایل، کامپیوتر و تلویزیون هوشمند | تعمیر نرم‌افزار گوشی، ویندوز و اسمارت‌تی‌وی</title>
<meta name="description" content="خدمات نرم‌افزاری انواع گوشی‌های Android و iOS، رفع مشکلات ویندوز کامپیوتر و لپ‌تاپ، عیب‌یابی نرم‌افزاری تلویزیون‌های هوشمند. فلش، ریست، آپدیت اندروید، رفع FRP و Activation Lock، بازیابی اطلاعات. هزینه کف قیمت همکاران.">
<meta name="keywords" content="تعمیرات نرم‌افزاری موبایل, تعمیر نرم‌افزار گوشی, فلش گوشی, ریست گوشی, رفع FRP, رفع iCloud, بازیابی اطلاعات, تعمیر ویندوز, تعمیر تلویزیون هوشمند, آپدیت اندروید">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0e7490">
<link rel="canonical" href="https://your-domain.workers.dev/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:locale" content="fa_IR">
<meta property="og:title" content="تعمیرات نرم‌افزاری تخصصی موبایل، کامپیوتر و تلویزیون هوشمند">
<meta property="og:description" content="خدمات تخصصی و منصفانه با توضیح کامل مشکل و راهکار قبل از انجام کار. هزینه کف قیمت همکاران.">
<meta property="og:url" content="https://your-domain.workers.dev/">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="تعمیرات تخصصی نرم‌افزاری موبایل، کامپیوتر و تلویزیون هوشمند">

<!-- JSON-LD — Structured Data برای سئوی گوگل -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "خدمات تخصصی تعمیرات نرم‌افزاری موبایل، کامپیوتر و تلویزیون هوشمند",
  "description": "خدمات نرم‌افزاری انواع گوشی‌های Android و iOS، رفع مشکلات ویندوز کامپیوتر و لپ‌تاپ، عیب‌یابی نرم‌افزاری تلویزیون‌های هوشمند.",
  "areaServed": "IR",
  "serviceType": "Software Repair & Troubleshooting",
  "provider": {
    "@type": "LocalBusiness",
    "name": "خدمات تعمیرات نرم‌افزاری",
    "priceRange": "مشاوره رایگان"
  },
  "offers": {
    "@type": "Offer",
    "description": "بررسی و رفع مشکلات نرم‌افزاری دستگاه‌ها",
    "priceCurrency": "IRR"
  }
}
</script>

<style>
  :root{
    --primary:#0e7490;
    --primary-dark:#155e75;
    --accent:#f59e0b;
    --bg:#f8fafc;
    --text:#0f172a;
    --muted:#64748b;
    --card:#ffffff;
    --radius:18px;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    font-family:"Segoe UI", Tahoma, Vazirmatn, sans-serif;
    background:var(--bg);color:var(--text);line-height:1.8;
  }
  .container{max-width:1100px;margin:0 auto;padding:0 20px}

  /* ---------- Header ---------- */
  header{
    background:linear-gradient(135deg,#0e7490 0%,#155e75 60%,#0f766e 100%);
    color:#fff;padding:80px 0 60px;text-align:center;
    position:relative;overflow:hidden;
  }
  header::after{
    content:"";position:absolute;bottom:-40px;left:0;right:0;height:80px;
    background:var(--bg);border-radius:50% 50% 0 0;
  }
  .logo{
    font-size:2.6rem;font-weight:800;letter-spacing:-1px;
    margin-bottom:10px;
  }
  .logo span{color:var(--accent)}
  header p.tagline{font-size:1.25rem;opacity:.95;max-width:720px;margin:0 auto}
  .badges{margin-top:24px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
  .badge{
    background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);
    padding:6px 16px;border-radius:30px;font-size:.9rem;backdrop-filter:blur(4px);
  }

  /* ---------- CTA ---------- */
  .cta-box{
    background:var(--card);border-radius:var(--radius);
    box-shadow:0 20px 50px rgba(2,32,48,.12);
    padding:36px;margin-top:20px;text-align:center;
    border-top:6px solid var(--accent);
  }
  .cta-box h2{font-size:1.6rem;color:var(--primary-dark);margin-bottom:12px}
  .cta-box p{color:var(--muted);margin-bottom:24px}
  .btn{
    display:inline-block;background:var(--primary);color:#fff;
    padding:14px 30px;border-radius:40px;text-decoration:none;
    font-weight:700;font-size:1.05rem;transition:.25s;margin:6px;
    box-shadow:0 8px 20px rgba(14,116,144,.3);
  }
  .btn:hover{transform:translateY(-2px);opacity:.92}
  .btn-call{background:#22c55e;box-shadow:0 8px 20px rgba(34,197,94,.3)}
  .btn-call:hover{background:#16a34a}
  .btn-tg{background:#229ed9;box-shadow:0 8px 20px rgba(34,158,217,.3)}
  .btn-tg:hover{background:#1b8ac7}
  .btn-ig{background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);box-shadow:0 8px 20px rgba(220,39,67,.3)}
  .btn-ig:hover{opacity:.9}

  /* ---------- Services ---------- */
  section{padding:60px 0}
  .section-title{text-align:center;font-size:2rem;color:var(--primary-dark);margin-bottom:40px}
  .section-title::after{content:"";display:block;width:70px;height:4px;background:var(--accent);margin:12px auto 0;border-radius:4px}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
  .card{
    background:var(--card);border-radius:var(--radius);padding:28px;
    box-shadow:0 10px 30px rgba(2,32,48,.08);
    transition:.25s;border:1px solid #e2e8f0;
  }
  .card:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(2,32,48,.15)}
  .card .icon{
    width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;
    font-size:1.7rem;margin-bottom:16px;background:linear-gradient(135deg,#e0f2fe,#cffafe);
  }
  .card h3{font-size:1.2rem;color:var(--primary-dark);margin-bottom:10px}
  .card p{color:var(--muted);font-size:.95rem}

  /* ---------- Features ---------- */
  .features{background:#fff}
  .feature-item{
    display:flex;align-items:flex-start;gap:14px;padding:14px 0;border-bottom:1px dashed #e2e8f0;
  }
  .feature-item:last-child{border-bottom:none}
  .check{
    flex-shrink:0;width:28px;height:28px;border-radius:50%;
    background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1rem;
  }
  .feature-item b{color:var(--primary-dark)}

  /* ---------- Promise ---------- */
  .promise{
    background:linear-gradient(135deg,#0f766e,#155e75);color:#fff;text-align:center;
    border-radius:var(--radius);padding:40px;margin:40px 0;
  }
  .promise h2{font-size:1.6rem;margin-bottom:14px}
  .promise .stars{color:var(--accent);font-size:1.6rem;letter-spacing:4px;margin-bottom:10px}
  .promise p{opacity:.95;max-width:640px;margin:0 auto}

  /* ---------- Pricing ---------- */
  .price-note{
    background:#fffbeb;border:2px solid var(--accent);border-radius:var(--radius);
    padding:24px 30px;text-align:center;font-size:1.15rem;font-weight:700;color:#92400e;
  }

  /* ---------- Contact ---------- */
  .contact-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:20px}
  .contact-card{
    background:var(--card);border-radius:var(--radius);padding:24px;
    text-align:center;box-shadow:0 10px 30px rgba(2,32,48,.08);
    border:1px solid #e2e8f0;transition:.25s;
  }
  .contact-card:hover{transform:translateY(-5px)}
  .contact-card .icon{font-size:2.2rem;margin-bottom:10px}
  .contact-card b{color:var(--primary-dark);display:block;margin-bottom:6px}
  .contact-card a{color:var(--primary);text-decoration:none;font-weight:700;word-break:break-all}
  .contact-card a:hover{text-decoration:underline}

  /* ---------- FAQ ---------- */
  .faq details{
    background:var(--card);border:1px solid #e2e8f0;border-radius:12px;
    padding:18px 22px;margin-bottom:14px;cursor:pointer;
  }
  .faq summary{font-weight:700;color:var(--primary-dark)}
  .faq p{margin-top:10px;color:var(--muted)}

  /* ---------- Footer ---------- */
  footer{
    background:#0f172a;color:#94a3b8;text-align:center;
    padding:34px 20px;font-size:.9rem;
  }
  footer a{color:var(--accent);text-decoration:none}

  @media(max-width:600px){
    header{padding:60px 0 50px}
    .logo{font-size:1.9rem}
    .cta-box{padding:26px}
  }
</style>
</head>
<body>

<!-- ================= HEADER ================= -->
<header>
  <div class="container">
  <img src="https://i.ibb.co/WW8N7brt/ios-android-windows-os-removebg-preview.png"
     alt="لوگوی تعمیرات نرم‌افزاری" style="width:100px;height:auto;">
    <div class="logo">🔧 <span>تعمیرات تخصصی</span> نرم ‌افزاری</div>
    <p class="tagline">تعمیرات تخصصی نرم‌افزاری  موبایل، کامپیوتر و تلویزیون هوشمند</p>
    <div class="badges">
      <span class="badge">⭐ تخصصی</span>
      <span class="badge">🤝 منصفانه</span>
      <span class="badge">📋 توضیح کامل مشکل قبل از انجام کار</span>
    </div>
  </div>
</header>

<!-- ================= CTA ================= -->
<div class="container">
  <div class="cta-box">
    <h2>مشاوره و استعلام هزینه رایگان</h2>
    <p>جهت مشاوره و استعلام هزینه، از طریق تماس یا پیام با ما در ارتباط باشید.</p>
    <a class="btn btn-call" href="tel:+989360479638">📞 تماس: 09360479638</a>
    <a class="btn btn-tg" href="https://t.me/farzinetam" target="_blank" rel="noopener">✈️ تلگرام</a>
    <a class="btn btn-ig" href="https://instagram.com/farzinetam" target="_blank" rel="noopener">📸 اینستاگرام</a>
  </div>
</div>

<!-- ================= SERVICES ================= -->
<section id="services">
  <div class="container">
    <h2 class="section-title">خدمات ما</h2>
    <div class="grid">

      <div class="card">
        <div class="icon">📱</div>
        <h3>تعمیرات تخصصی نرم‌افزاری موبایل</h3>
        <p>خدمات نرم‌افزاری انواع گوشی‌های Android و iOS — فلش، ریست، رفع مشکلات نرم‌افزاری و آپدیت سیستم‌عامل.</p>
      </div>

      <div class="card">
        <div class="icon">💻</div>
        <h3>رفع مشکلات ویندوز کامپیوتر و لپ‌تاپ</h3>
        <p>عیب‌یابی و رفع مشکلات نرم‌افزاری ویندوز، نصب مجدد سیستم‌عامل و بهبود عملکرد سیستم.</p>
      </div>

      <div class="card">
        <div class="icon">📺</div>
        <h3>تعمیر تلویزیون هوشمند</h3>
        <p>عیب‌یابی و رفع مشکلات نرم‌افزاری تلویزیون‌های هوشمند (Smart TV) از جمله مشکلات سیستم‌عامل و اپلیکیشن‌ها.</p>
      </div>

      <div class="card">
        <div class="icon">🔄</div>
        <h3>فلش و نصب مجدد سیستم‌عامل</h3>
        <p>✅ فلش و نصب مجدد سیستم‌عامل گوشی برای رفع مشکلات و بازگرداندن عملکرد صحیح دستگاه.</p>
      </div>

      <div class="card">
        <div class="icon">🧹</div>
        <h3>ریست و رفع مشکلات نرم‌افزاری</h3>
        <p>✅ ریست و رفع مشکلات نرم‌افزاری انواع گوشی‌های Android و iOS.</p>
      </div>

      <div class="card">
        <div class="icon">⬆️</div>
        <h3>آپدیت اندروید گوشی‌های قدیمی</h3>
        <p>✅ آپدیت اندروید گوشی‌های قدیمی به نسخه‌های جدیدتر، در صورت امکان.</p>
      </div>

      <div class="card">
        <div class="icon">🔓</div>
        <h3>رفع قفل و حساب کاربری</h3>
        <h3> Frp / Activation Lock </h3>
        <p>• بررسی و رفع مشکلات FRP در دستگاه‌های مجاز<br>• رفع مشکلات Activation Lock / iCloud با ارائه مدارک و احراز مالکیت<br>•باز کردن قفل Activation Lock تمامی ورژن های iOS<br>•ساخت اپل آی دی معتبر زیر قیمت بازار</p>
      </div>

      <div class="card">
        <div class="icon">💾</div>
        <h3>بازیابی اطلاعات و فایل‌های حذف‌شده</h3>
        <p>بررسی امکان بازگردانی عکس، فیلم، فایل و اسناد پاک‌شده (بسته به شرایط دستگاه و اطلاعات حذف‌شده).</p>
      </div>

      <div class="card">
        <div class="icon">🛠️</div>
        <h3>عیب‌یابی وسایل هوشمند</h3>
        <p>عیب‌یابی نرم‌افزاری انواع وسایل الکترونیکی هوشمند.</p>
      </div>

    </div>
  </div>
</section>

<!-- ================= NOTE FOR OLD PHONES ================= -->
<section class="features">
  <div class="container">
    <h2 class="section-title">گوشی قدیمی دارید؟</h2>
    <div class="feature-item">
      <div class="check">✓</div>
      <div>
        <p>گوشی قدیمی دارید و فعلاً توان خرید گوشی جدید ندارید؟ <b>بررسی می‌کنیم</b> ببینیم امکان به‌روزرسانی و بهبود عملکرد دستگاه شما وجود دارد یا نه.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================= PROMISE ================= -->
<div class="container">
  <div class="promise">
    <h2>تعهد ما به شما</h2>
    <div class="stars">⭐⭐⭐⭐⭐</div>
    <p>تخصصی | منصفانه | با توضیح کامل مشکل و راهکار <b>قبل از انجام کار</b></p>
  </div>
</div>

<!-- ================= PRICING ================= -->
<div class="container">
  <div class="price-note">
    💰 هزینه کف قیمت همکارای دیگه. <br>
    جهت مشاوره و استعلام هزینه پیام دهید.
  </div>
</div>

<!-- ================= CONTACT ================= -->
<section id="contact">
  <div class="container">
    <h2 class="section-title">راه‌های ارتباطی</h2>
    <p style="text-align:center;color:var(--muted);margin-bottom:10px">از طریق هر یک از راه‌های زیر با ما در تماس باشید:</p>
    <div class="contact-cards">
      <div class="contact-card">
        <div class="icon">📞</div>
        <b>تماس تلفنی</b>
        <a href="tel:+989360479638">09360479638</a>
      </div>
      <div class="contact-card">
        <div class="icon">✈️</div>
        <b>تلگرام</b>
        <a href="https://t.me/farzinetam" target="_blank" rel="noopener">@farzinetam</a>
      </div>
      <div class="contact-card">
        <div class="icon">📸</div>
        <b>اینستاگرام</b>
        <a href="https://instagram.com/farzinetam" target="_blank" rel="noopener">@farzinetam</a>
      </div>
    </div>
  </div>
</section>

<!-- ================= FAQ ================= -->
<section class="faq">
  <div class="container">
    <h2 class="section-title">سوالات متداول</h2>

    <details>
      <summary>گوشی من FRP دارد؛ آیا می‌توانید آن را رفع کنید؟</summary>
      <p>بله، رفع مشکلات FRP فقط در دستگاه‌های مجاز انجام می‌شود. ابتدا دستگاه بررسی شده و امکان رفع قفل با توجه به شرایط تایید می‌شود.</p>
    </details>
<details>
      <summary> گوشی آیفون من Activation Lock  شده آیا میتونید بازش کنید؟</summary>
      <p>بله، رفع مشکلات َActivation Lock فقط در دستگاه‌های مجاز انجام می‌شود. ابتدا دستگاه بررسی شده و امکان رفع قفل با توجه به شرایط تایید می‌شود.</p>
    </details>
    <details>
      <summary>آیا امکان بازیابی عکس‌ها و فایل‌های پاک‌شده وجود دارد؟</summary>
      <p>بررسی امکان بازگردانی عکس، فیلم، فایل و اسناد پاک‌شده انجام می‌شود. نتیجه بسته به شرایط دستگاه و اطلاعات حذف‌شده متفاوت است.</p>
    </details>

    <details>
      <summary>گوشی قدیمی دارم؛ آیا می‌توانم آن را آپدیت کنم؟</summary>
      <p>در صورت امکان، گوشی‌های قدیمی به نسخه‌های جدیدتر اندروید آپدیت می‌شوند. قبل از هر اقدامی امکان به‌روزرسانی بررسی و با شما مشورت می‌شود.</p>
    </details>

    <details>
      <summary>هزینه خدمات چگونه محاسبه می‌شود؟</summary>
      <p>هزینه کف قیمت همکاران است. قبل از انجام هر کاری، مشکل و راهکار به‌طور کامل توضیح داده شده و استعلام هزینه انجام می‌شود.</p>
    </details>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer>
  <div class="container">
    <p>🔧 تعمیرات نرم‌افزاری تخصصی موبایل، کامپیوتر و تلویزیون هوشمند</p>
    <p>
      📞 <a href="tel:+989360479638">09360479638</a> &nbsp;|&nbsp;
      ✈️ <a href="https://t.me/farzinetam" target="_blank" rel="noopener">@farzinetam</a> &nbsp;|&nbsp;
      📸 <a href="https://instagram.com/farzinetam" target="_blank" rel="noopener">@farzinetam</a>
    </p>
    <p style="margin-top:10px">© 2018 — تمامی حقوق محفوظ است.</p>
  </div>
</footer>

</body>
</html>`;

// ============================================================
//  هندلر درخواست — سرو صفحات با هدرهای بهینه برای سئو و کش
// ============================================================
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // فقط مسیر اصلی را سرو کن (بقیه به روت هدایت شود)
    if (path !== "/" && path !== "/index.html") {
      return Response.redirect(url.origin + "/", 301);
    }

    // جایگذاری دامنه اختصاصی (خودکار از آدرس درخواست)
    let finalHtml = HTML.replace(
      "https://your-domain.workers.dev/",
      url.origin + "/"
    );

    return new Response(finalHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer-when-downgrade",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      },
    });
  },
};
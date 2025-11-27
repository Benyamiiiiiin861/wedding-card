import React from "react";
import "./App.css";
import bg from "./wedding.jpg"; // بذار src/wedding.jpg

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("name") ? decodeURIComponent(params.get("name")) : "مهمان عزیز";

  // اگر می‌خوای نام عروس و داماد رو عوض کنی از اینجا
  const bride = "زهرا";
  const groom = "محمدرضا";
  const mainCalligraphy = "نورِ چشمِ ما، عشقتان جاودان باد"; // متن میانی (می‌تونی SVG نستعلیق بذاری)

  return (
    <div className="page-root">
      <div className="card-frame">
        {/* بالا: عکس با قاب سفید باریک */}
        <div className="photo-area">
          <img src={bg} alt="wedding" className="photo" />
          {/* موج سفید (curved divider) که به شکل کارت نمونه هست */}
          <svg className="curved-divider" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden>
            <path d="M0,120 C150,40 350,40 520,110 C700,180 900,90 1200,120 L1200,200 L0,200 Z" fill="#ffffff"/>
            {/* طرح‌های برجسته (drop shadow subtle) */}
          </svg>
        </div>

        {/* پایین: پنل سفید با متن‌ها */}
        <div className="panel">
          {/* نام‌ها در کناره‌ها */}
          <div className="side-names">
            <div className="name right-name">{bride}</div>
            <div className="name left-name">{groom}</div>
          </div>

          {/* تایپوگرافی مرکـزی: اینجا می‌تونی فونت نستعلیق/تصویر SVG بذاری */}
          <div className="calligraphy-wrap" aria-hidden>
            {/* اگر فونت نستعلیق داری، می‌تونی متن داخل <div> رو با کلاس calligraphy-font استایل بدی */}
            <div className="calligraphy">{mainCalligraphy}</div>
          </div>

          {/* مهمان */}
          <div className="to-guest">جناب آقای / سرکار خانم</div>
          <div className="guest-name">{guestName}</div>

          {/* تاریخ بزرگ */}
          <div className="date-row">
            <div className="date">جمعه ۲۸ شهریور</div>
          </div>

          {/* خط تزئینی قرمز */}
          <div className="red-divider" aria-hidden>
            <svg viewBox="0 0 600 40" className="flourish">
              <g fill="none" stroke="#e85a6f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 20 C 45 2, 105 2, 150 20 C 200 40, 260 40, 300 20 C 340 0, 400 0, 440 20 C 480 40, 540 40, 590 20"/>
              </g>
            </svg>
          </div>

          {/* جزئیات پایین */}
          <div className="info-row">
            <div className="info-left">۱۹ تا ۲۳ به صرف شام و شیرینی</div>
            <div className="info-right">باغ تالار مشاهیر، خیابان ستارخان، نبش جهانی‌نسب</div>
          </div>
        </div>
      </div>

      {/* footer کوچک */}
      <div className="small-footer">دعوتنامه دیجیتال — ساخته شده با ❤️</div>
    </div>
  );
}

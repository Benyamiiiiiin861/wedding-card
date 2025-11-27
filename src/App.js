import React, { useState, useEffect } from "react";
import "./App.css";
import bg from "./wedding.jpg";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("name") ? decodeURIComponent(params.get("name")) : "مهمان عزیز";

  const bride = "زهرا";
  const groom = "محمدرضا";
  const mainCalligraphy = "دو دل به عهدِ محبت سپردند مهرِ خویش";
  const mainCalligraphy1 = "فلک گواهِ شبِ وصل و سپیده‌دم به پیش";

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 9000); // ۵.۳ ثانیه انیمیشن قشنگ، بعد کارت اصلی میاد
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* اینترو عروسی — گلبرگ + اسم عروس و داماد */}
      {showIntro && (
        <div className="wedding-intro">
          
          {/* گلبرگ‌های ریزان */}
          {[...Array(16)].map((_, i) => (
            <div  key={i}  className={`petal p${i}`}> </div>
          ))}

          <div className="intro-content">
            <h1 className="couple-name">
              {bride} <span>&</span> {groom}
            </h1>
            
          </div>
        </div>
      )}

      {/* کارت اصلی شما — دقیقاً همون کد قبلی بدون هیچ تغییری */}
      <div className={`page-root ${showIntro ? "hidden" : "visible"}`}>
        <div className="card-frame">
          <div className="photo-area">
            <img src={bg} alt="wedding" className="photo" />
            <svg className="curved-divider" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden>
              <path d="M0,120 C150,40 350,40 520,110 C700,180 900,90 1200,120 L1200,200 L0,200 Z" fill="#ffffff"/>
            </svg>
          </div>

          <div className="panel">
            <div className="side-names">
              <div className="name right-name">{bride}</div>
              <div className="name left-name">{groom}</div>
            </div>

            <div className="calligraphy-wrap">
              <div className="calligraphy">{mainCalligraphy}</div>
            </div>
            <div className="calligraphy-wrap">
              <div className="calligraphy">{mainCalligraphy1}</div>
            </div>

            <div className="to-guest">جناب آقای </div>
            <div className="guest-name">{guestName}</div>

            <div className="date-row">
              <div className="date">پنجشنبه 11 دی </div>
            </div>

            <div className="red-divider" aria-hidden>
              <svg viewBox="0 0 600 40" className="flourish">
                <g fill="none" stroke="#e85a6f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 20 C 45 2, 105 2, 150 20 C 200 40, 260 40, 300 20 C 340 0, 400 0, 440 20 C 480 40, 540 40, 590 20"/>
                </g>
              </svg>
            </div>

            <div className="info-row">
              <div className="info-left">۱۹ تا ۲۳ به صرف شام و شیرینی</div>
              <div className="info-right">باغ تالار مشاهیر، خیابان ستارخان، نبش جهانی‌نسب</div>
            </div>
          </div>
        </div>

        <div className="small-footer">دعوتنامه دیجیتال — ساخته شده با ❤️</div>
      </div>
    </>
  );
}
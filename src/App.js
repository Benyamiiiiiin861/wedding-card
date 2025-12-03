import React, { useState, useEffect } from "react";
import "./App.css";
import bg from "./wedding.jpg";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("name") ? decodeURIComponent(params.get("name")) : "مهمان عزیز";

  const bride = "زهرا";
  const groom = "محمدرضا";
  const mainCalligraphy = "به سنت عشق گرد هم می آییم";
  const mainCalligraphy1 = "آنجا که دوست داشتن تنها کلام زندگیست";

  const location = {
    name: "تالار ونوس",
    address: "  تربت حیدریه،باهنر۵۶،تالار ونوس",
   
    lat: 35.30984942078933, 
    lng: 59.21183983874068,
  
    getGoogleMapsUrl: function() {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.lat},${this.lng}&travelmode=driving&dir_action=navigate`;
    }
  };

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  
  const openGoogleMaps = () => {
    window.open(location.getGoogleMapsUrl(), '_blank', 'noopener noreferrer');
  };

  return (
    <>
   
      {showIntro && (
        <div className="wedding-intro">
          {[...Array(24)].map((_, i) => (
            <div key={i} className={`petal p${i}`}> </div>
          ))}

          <div className="intro-content">
            <h1 className="couple-name">
             {groom} <span>&</span>  {bride}
            </h1>
          </div>
        </div>
      )}

     
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
              <div className="name right-name">{groom}</div>
              <div className="name left-name">{bride}</div>
            </div>

            <div className="calligraphy-wrap">
              <div className="calligraphy">{mainCalligraphy}</div>
            </div>
            <div className="calligraphy-wrap">
              <div className="calligraphy">{mainCalligraphy1}</div>
            </div>

            <div className="to-guest"> مهمان عزیز: </div>
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
              <div className="info-left">۱۷ تا ۲۳ به صرف شام و شیرینی</div>
              <div className="info-right">{location.address}</div>
            </div>

         
            <div className="navigation-section">
              <div className="location-title">
                <FaMapMarkerAlt className="location-icon" />
                <span>دریافت مسیر از طریق Google Maps</span>
              </div>
              
              <button 
                className="nav-btn google-btn"
                onClick={openGoogleMaps}
                aria-label="مسیریابی با Google Maps"
              >
                <FaDirections className="btn-icon" />
                <span>مسیریابی با Google Maps</span>
              </button>
              
              <p className="location-hint">
                با کلیک روی دکمه بالا، مستقیماً به Google Maps منتقل می‌شوید
              </p>
            </div>
          </div>
        </div>

        <div className="small-footer">دعوتنامه دیجیتال — Created By Beni</div>
      </div>
    </>
  );
}
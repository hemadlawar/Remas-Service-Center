import React, { useState, useEffect } from "react";
import RemasLogo from "../assets/REMAS.png";
export default function ServiceTable() {
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      number: 1,
      name: "Service",
      phone: "+9647728441777",
      whatsapp: "+9647728441777",
    },
    {
      number: 2,
      name: "Service",
      phone: "+9647511041777",
      whatsapp: "+9647511041777",
    },
    {
      number: 3,
      name: "Security",
      phone: "+9647508302771",
      whatsapp: "+9647508302771",
    },
    {
      number: 4,
      name: "Security",
      phone: "+9647704302771",
      whatsapp: "+9647704302771",
    },
  ];

  const toArabicDigits = (num) => {
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num.toString().replace(/[0-9]/g, (d) => arabicDigits[d]);
  };

  const translateName = (name) => {
    if (language === "ku") {
      if (name === "Service") return "خزمه‌تگوزاری";
      if (name === "Security") return "ئاسایش";
    } else if (language === "ar") {
      if (name === "Service") return "خدمات";
      if (name === "Security") return "أمن";
    }
    return name;
  };

  const translateTitle = () => {
    if (language === "ku") return "سەنتەری خزمەتگوزاری رێماس";
    if (language === "ar") return "مركز ريمس للخدمات";
    return "Remas City Service Center";
  };

  const columnsLTR = [
    { key: "number", label: "#", align: "left" },
    { key: "name", label: translateName("Service") },
    {
      key: "phone",
      label:
        language === "en" ? "Phone" : language === "ku" ? "پەیوەندی" : "اتصال",
    },
    {
      key: "whatsapp",
      label:
        language === "en"
          ? "WhatsApp"
          : language === "ku"
          ? "واتس ئاپ"
          : "واتس اب",
    },
  ];
  const columnsRTL = [
    { key: "name", label: translateName("Service") },
    {
      key: "phone",
      label:
        language === "en" ? "Phone" : language === "ku" ? "پەیوەندی" : "اتصال",
    },
    {
      key: "whatsapp",
      label:
        language === "en"
          ? "WhatsApp"
          : language === "ku"
          ? "واتس ئاپ"
          : "واتس اب",
    },
    { key: "number", label: "#", align: "right" },
  ];

  const columns = language === "en" ? columnsLTR : columnsRTL;

  const renderCell = (service, col) => {
    if (col.key === "number") {
      const value =
        language === "en" ? service.number : toArabicDigits(service.number);
      return <span className="number">{value}</span>;
    }
    if (col.key === "name")
      return (
        <span className="service-name">{translateName(service.name)}</span>
      );
    if (col.key === "phone")
      return (
        <a href={`tel:${service.phone}`} className="contact-link">
          <img src={RemasLogo} alt="Call" className="icon" />
          {service.phone}
        </a>
      );
    if (col.key === "whatsapp")
      return (
        <a
          href={`https://wa.me/${service.whatsapp.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="icon"
          />
          {service.whatsapp}
        </a>
      );
  };

  return (
    <div className="page-container" dir={language === "en" ? "ltr" : "rtl"}>
      <div className="glass-card fade-in">
        <img src={RemasLogo} alt="Remas Logo" className="logo bounce" />
        <h1 className="title">{translateTitle()}</h1>

        <div className="lang-buttons">
          <button
            onClick={() => setLanguage("en")}
            className={language === "en" ? "active" : ""}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("ku")}
            className={language === "ku" ? "active" : ""}
          >
            کورد
          </button>
          <button
            onClick={() => setLanguage("ar")}
            className={language === "ar" ? "active" : ""}
          >
            العربیة
          </button>
        </div>

        <table className="service-table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key}>{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <tr key={i}>
                {columns.map((c) => (
                  <td key={c.key}>{renderCell(service, c)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="support-section">
          <p>
            {language === "en" &&
              "For any requests send your request to support"}
            {language === "ku" &&
              "بۆ هەر داواکاریەک پەیوەندی بە تیمی سەپۆرتی رێماس بکەن"}
            {language === "ar" && "لأي طلبات، أرسل طلبك إلى الدعم"}
          </p>
          <button
            className="support-btn"
            onClick={() =>
              (window.location.href = "https://support.netgrow.krd/")
            }
          >
            {language === "en" && "Go to Support"}
            {language === "ku" && "تیمی سەپۆڕت"}
            {language === "ar" && "اذهب إلى الدعم"}
          </button>
        </div>
      </div>
    </div>
  );
}

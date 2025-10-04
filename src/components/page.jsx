import React, { useState, useEffect } from "react";
// Import the CSS file

export default function ServiceTable() {
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for mobile
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

  // Convert Western digits to Arabic-Indic
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

  // Table columns for LTR and RTL
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

  // Correct RTL order → Service | Phone | WhatsApp | #
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

  // Helper to render cell content
  const renderCell = (service, col) => {
    if (col.key === "number") {
      const value =
        language === "en" ? service.number : toArabicDigits(service.number);
      return (
        <span style={{ textAlign: col.align || "center", display: "block" }}>
          {value}
        </span>
      );
    }
    if (col.key === "name")
      return (
        <span className={isMobile ? "service-name-mobile" : ""}>
          {translateName(service.name)}
        </span>
      );
    if (col.key === "phone")
      return (
        <a
          href={`tel:${service.phone}`}
          className={isMobile ? "link-mobile" : ""}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Call"
            className="icon"
          />
          <span>{service.phone}</span>
        </a>
      );
    if (col.key === "whatsapp")
      return (
        <a
          href={`https://wa.me/${service.whatsapp.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className={isMobile ? "link-mobile" : ""}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="icon"
          />
          <span>{service.whatsapp}</span>
        </a>
      );
    return null;
  };

  return (
    <div
      className={`container${isMobile ? " mobile" : ""}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="table-container">
        <img
          src="https://i.ibb.co/39PSWqcT/376748679-775601211239377-3433871285863762361-n-1.jpg"
          alt="Remas Logo"
          className="logo"
        />

        <div className="title">{translateTitle()}</div>

        <div className="button-container">
          <button className="lang-btn" onClick={() => setLanguage("en")}>
            English
          </button>
          <button className="lang-btn" onClick={() => setLanguage("ku")}>
            کورد
          </button>
          <button className="lang-btn" onClick={() => setLanguage("ar")}>
            العربیة
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="service-table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    style={{
                      textAlign: col.align || "center",
                    }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((service, idx) => (
                <tr key={idx}>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      style={{
                        textAlign: col.align || "center",
                      }}
                    >
                      {renderCell(service, col)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`support-section${isMobile ? " support-mobile" : ""}`}>
        <p>
          {language === "en" && "For any requests send your request to support"}
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
  );
}

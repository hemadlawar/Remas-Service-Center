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

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    background: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "10px",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    overflowX: "hidden",
  };

  const tableContainerStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
    overflowX: "auto",
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
    padding: "0 5px",
    boxSizing: "border-box",
    color: isMobile ? "black" : "inherit", // Black on mobile
  };

  const logoStyle = {
    width: "100px",
    maxWidth: "30%",
    height: "auto",
    margin: "10px auto",
    display: "block",
  };

  const titleStyle = {
    textAlign: "center",
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "12px 0",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap",
    margin: "8px 0",
  };

  const buttonStyle = {
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#1976d2",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "13px",
    transition: "background 0.3s",
    flex: "1 1 30%",
    minWidth: "80px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
    tableLayout: "auto",
  };

  const thStyle = {
    backgroundColor: "#e3f2fd",
    color: "#333",
    padding: "8px 5px",
    textAlign: "center",
    fontSize: "14px",
    borderBottom: "2px solid #bbdefb",
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "8px 5px",
    textAlign: "center",
    borderBottom: "1px solid #e0e0e0",
    fontSize: "13px",
    wordBreak: "break-word",
    color: isMobile ? "black" : "inherit", // Black text on mobile
  };

  const iconStyle = {
    width: "20px",
    height: "20px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  };

  const supportSectionStyle = {
    marginTop: "20px",
    textAlign: "center",
    padding: "0 10px",
    color: isMobile ? "black" : "inherit", // Black text on mobile
  };

  const supportButtonStyle = {
    padding: "8px 16px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px",
  };

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

  const getProvider = (phone) => {
    if (phone.includes("772") || phone.includes("770")) return "Asiacell";
    return "Korek Telecom";
  };

  return (
    <div className={`container${isMobile ? " mobile" : ""}`}>
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
                <th>#</th>
                <th>{translateName("Service")}</th>
                <th>
                  {language === "en"
                    ? "Phone"
                    : language === "ku"
                    ? "پەیوەندی"
                    : "اتصال"}
                </th>
                <th>
                  {language === "en"
                    ? "WhatsApp"
                    : language === "ku"
                    ? "واتس ئاپ"
                    : "واتس اب"}
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.number}</td>
                  <td className={isMobile ? "service-name-mobile" : ""}>
                    {translateName(service.name)}
                  </td>
                  <td>
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
                  </td>
                  <td>
                    <a
                      href={`https://wa.me/${service.whatsapp.replace(
                        "+",
                        ""
                      )}`}
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
                  </td>
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

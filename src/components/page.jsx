import React, { useState } from "react";

export default function ServiceTable() {
  const [language, setLanguage] = useState("en");

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    background: "#ffffff", // Changed background to white
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    flexDirection: "column", // To stack the support button vertically
  };

  const tableContainerStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
    overflow: "hidden",
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
    padding: "0 10px",
    boxSizing: "border-box",
  };

  const logoStyle = {
    width: "120px",
    height: "auto",
    margin: "15px auto",
    display: "block",
  };

  const titleStyle = {
    textAlign: "center",
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "15px 0",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    margin: "10px 0",
  };

  const buttonStyle = {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#1976d2",
    color: "#fff",
    fontWeight: "bold",
    transition: "background 0.3s",
    flex: "1 1 30%",
    minWidth: "90px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  };

  const thStyle = {
    backgroundColor: "#e3f2fd",
    color: "#333",
    padding: "12px 8px",
    textAlign: "center",
    fontSize: "16px",
    borderBottom: "2px solid #bbdefb",
  };

  const tdStyle = {
    padding: "10px 6px",
    textAlign: "center",
    borderBottom: "1px solid #e0e0e0",
    fontSize: "14px",
    wordBreak: "break-word",
  };

  const iconStyle = {
    width: "25px",
    height: "25px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  };

  const supportSectionStyle = {
    marginTop: "30px",
    textAlign: "center",
  };

  const supportButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
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
    <div style={containerStyle}>
      <div style={tableContainerStyle}>
        {/* Logo */}
        <img
          src="https://i.ibb.co/39PSWqcT/376748679-775601211239377-3433871285863762361-n-1.jpg"
          alt="Remas Logo"
          style={logoStyle}
        />

        {/* Title */}
        <div style={titleStyle}>{translateTitle()}</div>

        {/* Language Buttons */}
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => setLanguage("en")}>
            English
          </button>
          <button style={buttonStyle} onClick={() => setLanguage("ku")}>
            کورد
          </button>
          <button style={buttonStyle} onClick={() => setLanguage("ar")}>
            العربیة
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>#</th>
                <th style={thStyle}>{translateName("Service")}</th>
                <th style={thStyle}>
                  {language === "en"
                    ? "Phone"
                    : language === "ku"
                    ? "پەیوەندی"
                    : "اتصال"}
                </th>
                <th style={thStyle}>
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
                  <td style={tdStyle}>{service.number}</td>
                  <td style={tdStyle}>{translateName(service.name)}</td>
                  <td style={tdStyle}>
                    <a
                      href={`tel:${service.phone}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                        alt="Call"
                        style={iconStyle}
                      />
                      <span
                        style={{
                          minWidth: "100px",
                          textAlign: "left",
                          fontSize: "13px",
                        }}
                      >
                        {getProvider(service.phone)}
                      </span>
                    </a>
                  </td>
                  <td style={tdStyle}>
                    <a
                      href={`https://wa.me/${service.whatsapp.replace(
                        "+",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "6px",
                        color: "#25D366",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        style={iconStyle}
                      />
                      <span
                        style={{
                          minWidth: "100px",
                          textAlign: "left",
                          fontSize: "13px",
                        }}
                      >
                        {getProvider(service.whatsapp)}
                      </span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Support Section */}
      <div style={supportSectionStyle}>
        <p style={{ marginBottom: "10px", fontSize: "14px" }}>
          For any requests send your request to support
        </p>
        <button
          style={supportButtonStyle}
          onClick={() => (window.location.href = "https://netgrow.krd/")}
        >
          Go to Support
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function ServiceTable() {
  const [language, setLanguage] = useState("en");

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #f8f9fa, #e8ecf1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  const tableContainerStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
    overflow: "hidden",
    width: "700px",
    textAlign: "center",
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
    marginTop: "10px",
    marginBottom: "10px",
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
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#e3f2fd",
    color: "#333",
    padding: "12px 10px",
    textAlign: "center",
    fontSize: "16px",
    borderBottom: "2px solid #bbdefb",
  };

  const tdStyle = {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #e0e0e0",
    fontSize: "15px",
  };

  const iconStyle = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
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
        {/* Logo at the top */}
        <img
          src="https://i.ibb.co/39PSWqcT/376748679-775601211239377-3433871285863762361-n-1.jpg"
          alt="Remas Logo"
          style={logoStyle}
        />

        <div style={titleStyle}>{translateTitle()}</div>

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

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>#</th>
              <th style={thStyle}>
                {language === "en"
                  ? "Service"
                  : language === "ku"
                  ? "خزمه‌تگوزاری"
                  : "خدمات"}
              </th>
              <th style={thStyle}>
                {language === "en"
                  ? "Phone Call"
                  : language === "ku"
                  ? "پەیوەندی"
                  : "اتصال"}
              </th>
              <th style={thStyle}>WhatsApp</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td style={tdStyle}>{service.number}</td>
                <td style={tdStyle}>{translateName(service.name)}</td>

                {/* Phone column */}
                <td style={tdStyle}>
                  <a
                    href={`tel:${service.phone}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                      alt="Call"
                      style={iconStyle}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    <span style={{ minWidth: "90px", textAlign: "left" }}>
                      {getProvider(service.phone)}
                    </span>
                  </a>
                </td>

                {/* WhatsApp column */}
                <td style={tdStyle}>
                  <a
                    href={`https://wa.me/${service.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    <span style={{ minWidth: "90px", textAlign: "left" }}>
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
  );
}

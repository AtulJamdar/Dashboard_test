import { NAV_ITEMS } from "../data/constants";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Hamburger button - visible on mobile */}
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          display: "none",
          position: "fixed",
          top: 12,
          left: 12,
          zIndex: 1000,
          background: "none",
          border: "none",
          fontSize: 20,
          cursor: "pointer",
          color: "#333",
          padding: 0,
        }}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className="sidebar"
        style={{
          width: 200,
          background: "#1a2340",
          height: "100vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: "20px 16px",
            fontSize: 18,
            fontWeight: 700,
            color: "#fff",
            borderBottom: "1px solid #2d3f6b",
          }}
        >
          INHPL
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1 }}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                background: item.active ? "#2d3f6b" : "transparent",
                color: item.active ? "#fff" : "#8fa3c0",
                borderLeft: item.active ? "3px solid #4a90d9" : "3px solid transparent",
                fontSize: 13,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.background = "#252f4a";
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
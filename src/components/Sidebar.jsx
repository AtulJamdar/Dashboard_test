import { useState } from "react";
import { NAV_ITEMS } from "../data/constants";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Sales");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          position: "fixed",
          top: 12,
          left: 12,
          zIndex: 1000,
          background: "#1a2340",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "6px 10px",
          fontSize: 18,
          cursor: "pointer",
        }}
        className="hamburger"
      >
        ☰
      </button>

      {/* Overlay for mobile - closes sidebar when clicked */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="sidebar-overlay"
          style={{
            display: "none",
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 998,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar ${isOpen ? "sidebar-open" : ""}`}
        style={{
          width: 200,
          background: "#1a2340",
          display: "flex",
          flexDirection: "column",
          padding: "16px 0",
          flexShrink: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Logo */}
        <div style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 16,
          padding: "0 16px 20px",
          letterSpacing: 1,
          borderBottom: "1px solid #2d3f6b",
          marginBottom: 8,
        }}>
          INHPL
        </div>

        {/* Nav items */}
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 16px",
              cursor: "pointer",
              color: activeItem === item.label ? "#fff" : "#8fa3c0",
              background: activeItem === item.label ? "#2d3f6b" : "transparent",
              borderLeft: activeItem === item.label
                ? "3px solid #4a90d9"
                : "3px solid transparent",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 15 }}>{item.icon}</span>
            <span style={{ fontSize: 12.5 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
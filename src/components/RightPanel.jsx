import { useState } from "react";

export default function RightPanel() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    orderValue: "",
    buyingPlan: "",
    name: "",
    mobileNumber: "",
    email: "",
    leadStatus: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const fileButtonStyle = {
    padding: "5px 10px",
    background: "#1a2340",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: 11,
    cursor: "pointer",
    fontWeight: 500,
    transition: "background 0.2s",
  };

  return (
    <div
      className="right-panel"
      style={{
        width: 300,
        background: "#fff",
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        flexShrink: 0,
        height: "fit-content",
      }}
    >
      {/* Tabs — match original style */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        flexWrap: "wrap",
        borderBottom: "1px solid #eee",
        paddingBottom: 10,
      }}>
        {[
          { icon: "🔵", label: "Task Manager" },
          { icon: "💬", label: "Chat View" },
          { icon: "✦",  label: "Chanakya" },
          { icon: "🖊",  label: "Sarthii" },
        ].map((tab, i) => (
          <div
            key={tab.label}
            onClick={() => setActiveTab(i)}
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 500,
              cursor: "pointer",
              background: activeTab === i ? "#1a2340" : "transparent",
              color: activeTab === i ? "#fff" : "#555",
              display: "flex",
              alignItems: "center",
              gap: 4,
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 10 }}>{tab.icon}</span>
            {tab.label}
          </div>
        ))}
      </div>

      {/* Sales Person row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
      }}>
        <div>
          <span style={{ fontWeight: 600 }}>Sales Person Name: </span>
          <span style={{ color: "#555" }}>INT Vedant Sales</span>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <button style={fileButtonStyle}>Choose File</button>
          <span style={{ cursor: "pointer" }}>📎</span>
          <span style={{ cursor: "pointer" }}>⬇</span>
          <span style={{ cursor: "pointer", color: "#e05c2b" }}>🗑</span>
        </div>
      </div>

      {/* Order Value + Buying Plan — inline label style */}
      <div style={{ display: "flex", gap: 10 }}>
        <InlineField
          label="Order Value:"
          value={formData.orderValue}
          onChange={(val) => handleChange("orderValue", val)}
          type="text"
          icon="✎"
        />
        <InlineField
          label="Buying Plan:"
          value={formData.buyingPlan}
          onChange={(val) => handleChange("buyingPlan", val)}
          type="date"
          icon="📅"
        />
      </div>

      {/* Purchase Decision Maker heading */}
      <div style={{
        fontWeight: 600,
        fontSize: 12,
        color: "#1a2340",
        borderTop: "1px solid #eee",
        paddingTop: 10,
      }}>
        Purchase Decision Maker
      </div>

      {/* Name + Mobile inline */}
      <div style={{ display: "flex", gap: 10 }}>
        <InlineField label="Name:" value={formData.name}
          onChange={(val) => handleChange("name", val)} type="text" icon="✎" />
        <InlineField label="Mobile Number:" value={formData.mobileNumber}
          onChange={(val) => handleChange("mobileNumber", val)} type="tel" icon="✎" />
      </div>

      {/* Email full width */}
      <InlineField label="E - Mail:" value={formData.email}
        onChange={(val) => handleChange("email", val)}
        type="email" icon="✎" fullWidth />

      {/* Lead Status */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#333", whiteSpace: "nowrap" }}>
          Lead Acknowledgment Status:
        </span>
        <select
          value={formData.leadStatus}
          onChange={(e) => handleChange("leadStatus", e.target.value)}
          style={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: 6,
            padding: "5px 8px",
            fontSize: 12,
            color: formData.leadStatus ? "#333" : "#999",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          <option value="">Select Lead Status</option>
          <option value="acknowledged">Acknowledged</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
}

// ── Sub components ──────────────────────────────────────

function InlineField({ label, value, onChange, type, icon, fullWidth }) {
  return (
    <div style={{
      flex: fullWidth ? "1 1 100%" : 1,
      display: "flex",
      flexDirection: "column",
      gap: 3,
    }}>
      <label style={{ fontSize: 11, color: "#666", fontWeight: 500 }}>
        {label}
      </label>
      <div style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: 6,
        overflow: "hidden",
        background: "#fff",
      }}>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            flex: 1,
            border: "none",
            padding: "5px 8px",
            fontSize: 12,
            outline: "none",
            background: "transparent",
          }}
          onFocus={(e) => (e.target.parentElement.style.borderColor = "#4a90d9")}
          onBlur={(e) => (e.target.parentElement.style.borderColor = "#ddd")}
        />
        <span style={{
          padding: "0 6px",
          color: "#aaa",
          fontSize: 12,
          borderLeft: "1px solid #eee",
          cursor: "pointer",
        }}>
          {icon}
        </span>
      </div>
    </div>
  );
}
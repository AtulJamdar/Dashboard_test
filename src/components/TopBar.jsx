export default function TopBar() {
  return (
    <div
      className="topbar"
      style={{
        background: "#fff",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e0e0e0",
        flexShrink: 0,
      }}
    >
      {/* Title */}
      <span
        style={{
          fontWeight: 700,
          fontSize: 16,
          color: "#1a2340",
        }}
        className="topbar-title"
      >
        Welcome to IDIMS Pro
      </span>

      {/* Right icons */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {/* Settings */}
        <div style={iconStyle}>⚙</div>

        {/* Notifications */}
        <div style={{ position: "relative" }}>
          <div style={iconStyle}>🔔</div>
          <span style={{
            position: "absolute",
            top: -3,
            right: -3,
            background: "#e05c2b",
            color: "#fff",
            borderRadius: "50%",
            width: 14,
            height: 14,
            fontSize: 9,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}>3</span>
        </div>

        {/* Avatar */}
        <div style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "#4a90d9",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
        }}>
          AK
        </div>
      </div>
    </div>
  );
}

const iconStyle = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "#f0f2f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: 15,
};
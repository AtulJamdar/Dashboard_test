export default function TopBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className="topbar"
      style={{
        background: "#fff",
        padding: "12px 20px",
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
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {/* Settings */}
        <span style={{ fontSize: 18, cursor: "pointer" }}>⚙</span>

        {/* Notifications */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <span style={{ fontSize: 18, cursor: "pointer" }}>🔔</span>
          <span style={{
            position: "absolute",
            top: -8,
            right: -8,
            background: "#e05c2b",
            color: "#fff",
            borderRadius: "50%",
            width: 20,
            height: 20,
            fontSize: 10,
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
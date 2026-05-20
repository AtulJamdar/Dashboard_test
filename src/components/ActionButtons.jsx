import { ACTION_BUTTONS } from "../data/constants";

export default function ActionButtons() {
  const handleClick = (label) => {
    console.log(`Clicked: ${label}`);
    // in real app — open modal, navigate, etc.
  };

  return (
    <div
      className="action-buttons-grid"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
        {ACTION_BUTTONS.map((label) => {
          const isPrimary = label === "+ Add Reminder";

          return (
            <button
              key={label}
              onClick={() => handleClick(label)}
              style={{
                padding: "7px 14px",
                border: isPrimary ? "none" : "1px solid #c8d6e8",
                borderRadius: 6,
                background: isPrimary ? "#1a2340" : "#fff",
                color: isPrimary ? "#fff" : "#333",
                fontSize: 12,
                fontWeight: isPrimary ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (isPrimary) {
                  e.target.style.background = "#2d3f6b";
                } else {
                  e.target.style.background = "#f0f4f8";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isPrimary ? "#1a2340" : "#fff";
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

  );
}
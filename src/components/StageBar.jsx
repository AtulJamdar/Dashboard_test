import { STAGES, FORM_LINKS } from "../data/constants";

export default function StageBar({ activeStage, setActiveStage }) {
  return (
    <>
      {/* Top dropdown row - badge + stage name + arrow */}
      <div style={{
        display: "flex",
        gap: 12,
        marginBottom: 14,
        flexWrap: "wrap",
      }}>
        {STAGES.map((stage, i) => (
          <div
            key={stage}
            onClick={() => setActiveStage(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 11,
              color: activeStage === i ? "#1a2340" : "#555",
              fontWeight: activeStage === i ? 700 : 400,
              cursor: "pointer",
            }}
          >
            {/* Badge */}
            <span style={{
              background: "#4a90d9",
              color: "#fff",
              borderRadius: "50%",
              width: 17,
              height: 17,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              flexShrink: 0,
            }}>
              3
            </span>
            <span>{stage}</span>
            <span style={{ color: "#999", fontSize: 10 }}>▾</span>
          </div>
        ))}
      </div>

      {/* Chevron pipeline */}
      <div
        className="chevron-pipeline"
        style={{
          display: "flex",
          marginBottom: 14,
          overflowX: "auto",
        }}
      >
        {STAGES.map((stage, i) => {
          const isCompleted = i < activeStage;
          const isCurrent = i === activeStage;
          const isPending = i > activeStage;

          return (
            <div
              key={stage}
              onClick={() => setActiveStage(i)}
              style={{
                flex: "1 0 auto",
                minWidth: 100,
                padding: "9px 6px 9px 18px",
                textAlign: "center",
                fontSize: 11,
                fontWeight: isCurrent ? 700 : 500,
                background: isCurrent
                  ? "#1a2340"
                  : isCompleted
                  ? "#3a5080"
                  : "#d0dbe8",
                color: isPending ? "#555" : "#fff",
                clipPath:
                  i === 0
                    ? "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)"
                    : "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)",
                marginLeft: i === 0 ? 0 : -1,
                cursor: "pointer",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {stage}
            </div>
          );
        })}
      </div>

      {/* Form links row */}
      <div style={{
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
      }}>
        {FORM_LINKS.map((link) => (
          <span
            key={link}
            style={{
              fontSize: 11,
              color: "#1a2340",
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 3,
              whiteSpace: "nowrap",
            }}
          >
            {link}
            <span style={{ fontSize: 10, color: "#4a90d9" }}>✎</span>
          </span>
        ))}
      </div>

    </>
  );
}
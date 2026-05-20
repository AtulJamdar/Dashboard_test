import { OPPORTUNITY_INFO } from "../data/constants";

export default function InfoBar() {
  const items = [
    { label: "Opportunity ID", value: OPPORTUNITY_INFO.id },
    { label: "Date", value: OPPORTUNITY_INFO.date },
    { label: "Product Name", value: OPPORTUNITY_INFO.productName },
    { label: "Customer Name", value: OPPORTUNITY_INFO.customerName },
    { label: "Buying Plan", value: OPPORTUNITY_INFO.buyingPlan },
    { label: "Customer Meeting Request", value: OPPORTUNITY_INFO.meetingRequest, highlight: true },
  ];

  return (
    <div
      className="infobar-grid"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        fontSize: 12,
        color: "#555",
        gap: "4px 0",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
        padding: "8px 0",
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#888", whiteSpace: "nowrap" }}>
            {item.label}:{" "}
          </span>
          <span style={{
            fontWeight: 600,
            color: item.highlight ? "#2a6db5" : "#1a2340",
            whiteSpace: "nowrap",
            marginLeft: 3,
          }}>
            {item.value}
          </span>

          {/* Pipe separator — not after last item */}
          {i < items.length - 1 && (
            <span style={{ color: "#ccc", margin: "0 10px" }}>|</span>
          )}
        </div>
      ))}
    </div>
  );
}
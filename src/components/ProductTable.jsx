import { useState } from "react";
import { PRODUCTS, PRODUCT_TABS } from "../data/constants";

export default function ProductTable() {
  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleCheckbox = (sr) => {
    setSelected((prev) =>
      prev.includes(sr) ? prev.filter((id) => id !== sr) : [...prev, sr]
    );
  };

  const handleCreateProcurement = () => {
    if (selected.length === 0) {
      alert("Please select at least one product.");
      return;
    }
    console.log("Creating procurement for:", selected);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #e8edf3",
          marginBottom: 14,
          overflowX: "auto",
        }}
      >
        {PRODUCT_TABS.map((tab, i) => (
          <div
            key={tab}
            onClick={() => setActiveTab(i)}
            style={{
              padding: "8px 16px",
              fontSize: 12,
              fontWeight: activeTab === i ? 600 : 400,
              color: activeTab === i ? "#1a2340" : "#888",
              borderBottom: activeTab === i
                ? "2px solid #1a2340"
                : "2px solid transparent",
              marginBottom: -2,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Table wrapper — scrollable on mobile */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 12,
            minWidth: 600,
          }}
        >
          {/* Table head */}
          <thead>
            <tr style={{ background: "#1a2340" }}>
              {[
                "Sr.No",
                "Product Name",
                "Make",
                "Model",
                "Quality",
                "Target Price",
                "Select Product For Procurement",
              ].map((heading) => (
                <th
                  key={heading}
                  style={{
                    padding: "9px 12px",
                    textAlign: "left",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 11,
                    whiteSpace: "nowrap",
                  }}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {PRODUCTS.map((product, i) => (
              <tr
                key={product.sr}
                style={{
                  background: i % 2 === 0 ? "#fff" : "#f8fafc",
                  borderBottom: "1px solid #edf0f5",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#eef4fb";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    i % 2 === 0 ? "#fff" : "#f8fafc";
                }}
              >
                <td style={tdStyle}>{product.sr}</td>
                <td style={{ ...tdStyle, color: "#2a6db5", fontWeight: 500 }}>
                  {product.name}
                </td>
                <td style={tdStyle}>{product.make}</td>
                <td style={tdStyle}>{product.model}</td>
                <td style={tdStyle}>{product.quality}</td>
                <td style={{ ...tdStyle, fontWeight: 600 }}>{product.price}</td>
                <td style={{ ...tdStyle, textAlign: "center" }}>
                  <input
                    type="checkbox"
                    checked={selected.includes(product.sr)}
                    onChange={() => handleCheckbox(product.sr)}
                    style={{ cursor: "pointer", width: 14, height: 14 }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        className="table-footer"
        style={{
          marginTop: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {/* Create Procurement */}
        <button
          onClick={handleCreateProcurement}
          style={{
            padding: "8px 20px",
            background: "#1a2340",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#2d3f6b")}
          onMouseLeave={(e) => (e.target.style.background = "#1a2340")}
        >
          Create Procurement
        </button>

        {/* Note */}
        <span
          style={{
            fontSize: 11,
            color: "#e05c2b",
            fontStyle: "italic",
          }}
        >
          Note: Once you done with procurement, you can move forward
        </span>

        {/* Prev / Next */}
        <div style={{ display: "flex", gap: 8 }}>
          <button style={secondaryBtnStyle}>Previous</button>
          <button
            style={{
              ...secondaryBtnStyle,
              background: "#1a2340",
              color: "#fff",
              border: "none",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => (e.target.style.background = "#2d3f6b")}
            onMouseLeave={(e) => (e.target.style.background = "#1a2340")}
          >
            Submit & Next
          </button>
        </div>
      </div>
    </div>
  );
}

// Shared styles
const tdStyle = {
  padding: "9px 12px",
  color: "#333",
};

const secondaryBtnStyle = {
  padding: "7px 16px",
  border: "1px solid #c8d6e8",
  borderRadius: 6,
  background: "#fff",
  color: "#333",
  fontSize: 12,
  fontWeight: 500,
  cursor: "pointer",
  transition: "background 0.2s",
};
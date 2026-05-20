import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import StageBar from "./components/StageBar";
import InfoBar from "./components/InfoBar";
import ActionButtons from "./components/ActionButtons";
import ProductTable from "./components/ProductTable";
import RightPanel from "./components/RightPanel";

export default function App() {
  const [activeStage, setActiveStage] = useState(2);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f0f2f5",
        fontSize: 13,
      }}
    >
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
            display: "none",
          }}
        />
      )}

      {/* Main content area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* TopBar */}
        <TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div
          className="content-area"
          style={{
            flex: 1,
            display: "flex",
            gap: 16,
            padding: 16,
            overflowY: "auto",
          }}
        >
          {/* Left column */}
          <div
            className="left-column"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              minWidth: 0,
            }}
          >
            {/* Card wrapping StageBar + InfoBar + ActionButtons */}
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: 16,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <StageBar activeStage={activeStage} setActiveStage={setActiveStage} />
              <InfoBar />
              <ActionButtons />
            </div>

            {/* Product Table Card */}
            <ProductTable />
          </div>

          {/* Right Panel */}
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
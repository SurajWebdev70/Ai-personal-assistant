import { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import Transcript from "../components/Transcript";
import Summary from "../components/summary";
import ActionItems from "../components/ActionItems";
import Controls from "../components/Footer";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <div className="dashboard-frame">
        <div
          className={`dashboard-layout${isSidebarOpen ? "" : " dashboard-layout--sidebar-closed"}`}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen((current) => !current)}
          />
          <div className="dashboard-content">
            <div className="dashboard-header-row">
              <Header />
            </div>
            <div className="dashboard-panels grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Transcript />
              <Summary />
            </div>
            <div className="mt-4">
              <ActionItems />
            </div>
            <div className="mt-4">
              <Controls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

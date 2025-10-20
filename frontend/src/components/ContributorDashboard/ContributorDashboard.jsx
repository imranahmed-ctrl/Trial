import Header from "./Header";
import StatsCards from "./StatsCards";
import NavTabs from "./NavTabs";
import "./dashboard.css";

export default function ContributorDashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-inner">
        {/* Header Section */}
        <Header />

        {/* Stats Cards Section */}
        <div className="stats-container">
          <StatsCards />
        </div>

        {/* Nav Tabs Section with Curved Container */}
        <div className="nav-section">
          <div className="nav-tabs-wrapper">
            <NavTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import DashboardRoutes from "./DashboardRoutes";

//import './dashboard.scss'

//import "./styles/dashboard.scss";

const DashboardContainer = () => {
    return (
      <div className={DashboardContainer.styles.root}>
        <div className={DashboardContainer.styles.content}>
          <DashboardRoutes />
        </div>
        {/* <Footer /> */}
      </div>
    );
};

DashboardContainer.styles = {
    root: "nos-ds__dashboard-root",
    content: "nos-ds__dashboard-content"
};

export default DashboardContainer;
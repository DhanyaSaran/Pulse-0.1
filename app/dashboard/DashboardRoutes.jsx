import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./views/components/Profile";
import PlanAndPricing from "./views/components/PlanAndPricing";

const DashboardRoutes = () => {
    return (
      <div>
        <Switch>
          <Route path="/dashboard" exact component={Profile} />
          <Route path="/dashboard/plan" component={PlanAndPricing} /> 
        </Switch>
        {/* <Route path="/dashboard/sessions" component={SessionReport} /> */}
      </div>
    );
};

export default DashboardRoutes;

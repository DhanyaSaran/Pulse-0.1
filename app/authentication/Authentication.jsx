import React from "react";
import { Route } from "react-router-dom";
import { Login, Registration, VerifyOTP } from "./views";

const Authentication = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Login} />
    <Route path="/verifyOTP" component={VerifyOTP} />
    <Route path="/profile" component={Registration} />
  </div>
);

export default Authentication;

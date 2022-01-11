import React from "react";
import { Route, Switch,BrowserRouter, Link } from "react-router-dom";
import cluster from "./cluster";
import metrics from "./metrics";
import events from "./events";
import config from "./config";
import Menu from './components/Menu'
const Cpanel=()=>
{
    return(
<div>

<BrowserRouter>     
<Menu/>
        <Route path='/cPanel' exact component={cluster}></Route>
        <Route path='/cPanel/metrics' component={metrics}></Route>
        <Route path='/cPanel/events' component={events}></Route>
        <Route path='/cPanel/config' component={config}></Route>
    </BrowserRouter>   
</div>
       
    )
   
}


export default Cpanel
import React ,{useState,useEffect} from 'react';
import { BrowserRouter, Link, Redirect,Route } from "react-router-dom";
import '../styles/menu.scss'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Store from '../../../Store';
import AuthenticationActionTypes from '../../../authentication/redux/AuthenticationActionTypes';

import logo from '../../../../assets/episilia_logo_edited.webp'
import ProfileMenu from '../../views/components/profileMenu/ProfileMenu'
import VERBIAGE from '../../../utils/enums/Verbiage'

import {isMobileView} from '../../../utils/Responsive';
import Header from '../../views/layouts/Header';



console.log(isMobileView())

let selectedMenuItem;
const getMenu = (selectedId, setSelectedId) => {
    return <ProfileMenu selectedId={selectedId} onSelect={setSelectedId} />
  }


const Menu=({history})=>{
const [selectedId, setSelectedId] = useState(selectedMenuItem || "cluster");

console.log(selectedId)
useEffect(()=>{
    isMobileView()
},[])

useEffect(() => {
    setSelectedId(selectedId)
    if (selectedId === 'cluster') {
      history.push(VERBIAGE.NAVIGATION.PATHS.DASHBOARD);
    
    } else if (selectedId === 'metrics') {
      history.push(VERBIAGE.NAVIGATION.PATHS.METRICS);

    } else if (selectedId === 'events') {
      history.push(VERBIAGE.NAVIGATION.PATHS.EVENTS);
 
    } else if (selectedId === 'config') {
      history.push(VERBIAGE.NAVIGATION.PATHS.CONFIG);
  
    } else {
      localStorage.clear();
      Store.dispatch({ type: AuthenticationActionTypes.UNAUTH_USER })
    }

  }, [selectedId])



if(!isMobileView())
{
    return(

    
        <div>
          
        <div className='header'>
         <img style={{marginRight:10,width:'15%'}} src={logo}/>
        
            <div className='header-container'>
            <span className='header-components'> YOUR ORGANISATION</span><br></br>
            <span className='header-components-value'>answer</span>
            </div>
    
            <div className='header-container'>
            <span className='header-components'>CLIENT ID</span><br></br>
            <span className='header-components-value'>answer</span>
            </div>
    
            <div className='header-container'>
            <span className='header-components'>ENVIRONMENT</span><br></br>
            <span className='header-components-value'>answer</span>
            </div>
    
        
    
         <span className='header-components-value-cPanel'>Cpanel</span>
        
        </div>
    
    
        <div className="profile-menu-desktop-content">
          {getMenu(selectedId, setSelectedId)}
        </div>
        </div>
            
           
        
        
        
    
    
    
        )
}
else
{
    return(
        <div className="profile-menu-header">
      <Header menu={getMenu(selectedId, setSelectedId)} />
    </div>
    )
}

    

}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Menu));




// <div className='left-menu'>
// <Link to='/dashboard' className='selected-link'>
// Cluster
// {/* <button className={cname} onClick={cname='selected-link'}></button>     */}
// </Link>
// <br></br>

// <Link to='/dashboard/sessions'>
//     {console.log("line 50 ",sname)}
//     Sessions
//     </Link>
  
// </div>
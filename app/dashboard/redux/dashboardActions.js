import DashboardActionTypes from "./dashboardActionTypes";
import URLBuilder from "../../utils/Url_builder";
import store from '../../Store';
import _ from "lodash";

import api from "../../utils/API";
import URL from "../../utils/URL";
import VERBIAGE from "../../utils/enums/Verbiage";

const DashboardActions = {

  setLicenseResponse: payload => ({
    type: DashboardActionTypes.SET_LICENSE,
    payload
  }),

  setNewLicenseResponse: payload => ({
    type: DashboardActionTypes.SET_NEW_LICENSE,
    payload
  }),

  setIsMobileView: payload => ({
    type: DashboardActionTypes.SET_RESPONSIVE_VIEW,
    payload
  }),

  setProfile: payload => ({
    type: DashboardActionTypes.SET_PROFILE_DETAILS,
    payload
  }),

  resetFetched: () => ({
    type: DashboardActionTypes.CLOSE_DIALOG
  }),

  getLicenseKey: () => (dispatch) => {
    const { authentication } = store.getState();
    let url = URLBuilder.build(URL.DAHSBOARD.PROFILE.GET_LICENSE);
    url = url.replace('$token', localStorage.getItem("Token"));
    url = url.replace('$uuid', localStorage.getItem("userId"));
    api.get(url).then(response => {
      if (response.data)
        dispatch(DashboardActions.setLicenseResponse(response.data));
      else
        dispatch(DashboardActions.generateLicenseKey())
    }).catch(error => {
      dispatch(DashboardActions.generateLicenseKey())
    });
  },

  generateLicenseKey: () => (dispatch) => {
    const { authentication } = store.getState();
    let url = URLBuilder.build(URL.DAHSBOARD.PROFILE.GENERATE_LICENSE);
    url = url.replace('$token', localStorage.getItem("Token"));
    const userId = localStorage.getItem("userId");
    api.post(url, {
      uuid: userId,
      policy: VERBIAGE.PLANS.COMMUNITY_LOWERCASE
    }).then(response => {
      dispatch(DashboardActions.setNewLicenseResponse(response.data));
    });
  },

  getProfileDetails: () => (dispatch) => {
    const { authentication } = store.getState();
    let url = URLBuilder.build(URL.DAHSBOARD.PROFILE.GET_PROFILE);
    url = url.replace('$token', localStorage.getItem("Token"));
    url = url.replace('$uuid', localStorage.getItem("userId"));
    api.get(url).then(response => {
        dispatch(DashboardActions.setProfile(response.data));
    }).catch(error => {
      //dispatch(DashboardActions.generateLicenseKey())
    });
  },

  updateProfileDetails: (payload) => (dispatch) => {
    dispatch({type: DashboardActionTypes.UPDATING});
    let url = URLBuilder.build(URL.DAHSBOARD.PROFILE.UPDATE_PROFILE);
    url = url.replace('$token', localStorage.getItem("Token"));
    url = url.replace('$uuid', localStorage.getItem("userId"));
    api.put(url, payload).then(response => {
        if(_.get(response, 'data.uuid'))
        dispatch({type: DashboardActionTypes.PROFILE_UPDATION_SUCCESS});
        else
        dispatch({type: DashboardActionTypes.PROFILE_UPDATION_FAILED});
        dispatch(DashboardActions.setProfile(response.data));
    }).catch(error => {
      //dispatch({type: DashboardActionTypes.FETCHING_FAILED});
    });
  },


  navigateToPath: (props, path) => {
    props.history.push(path);
  }
};

export default DashboardActions;

import AuthenticationActionTypes from "./AuthenticationActionTypes";
import URLBuilder from "../../utils/Url_builder";
import store from '../../Store';
import _ from "lodash";

import api from "../../utils/API";
import URL from "../../utils/URL";
import VERBIAGE from "../../utils/enums/Verbiage";

const AuthenticationActions = {
  setAuthenticationResponse: payload => ({
    type: AuthenticationActionTypes.SET_SESSION,
    payload
  }),

  setRegistrationResponse: payload => ({
    type: AuthenticationActionTypes.SET_REGISTRATION_DETAILS,
    payload
  }),

  setAuthFailResponse: payload => ({
    type: AuthenticationActionTypes.SET_SESSION,
    payload
  }),

  setGenarateOtpResponse: payload => ({
    type: AuthenticationActionTypes.SET_OTP_STATUS,
    payload
  }),

  validateCredentials: () => (dispatch) => {
    const token = localStorage.getItem('Token');
    const payload = {
      session: {token}
    }
    dispatch(AuthenticationActions.setAuthenticationResponse(payload));
  },

  resetFetched: () => ({
    type: AuthenticationActionTypes.CLOSE_DIALOG
  }),

  setRoute: (payload) => ({
    type: AuthenticationActionTypes.SET_ROUTE,
    payload
  }),

  setPreviousRoute: (props) => (dispatch) => {
    if(props.history.location.pathname === VERBIAGE.NAVIGATION.PATHS.REGISTER)
    dispatch(AuthenticationActions.setRoute({route: VERBIAGE.NAVIGATION.PATHS.REGISTER}));
    else
    dispatch(AuthenticationActions.setRoute({route: VERBIAGE.NAVIGATION.PATHS.LOGIN}));
  },




  postCredentials: (credentials, props) => dispatch => {
    const email = localStorage.getItem('ID');
    api.post(URLBuilder.build(URL.AUTHENTICATION.VERIFY), {
      otp: credentials.otp,
      email
    }).then(response => {
      dispatch(AuthenticationActions.setAuthenticationResponse(response.data));
      const token = _.get(response, 'data.session.token');
      const userId = _.get(response, 'data.user.uuid');
      if(token) localStorage.setItem('Token', token)
      if(userId) localStorage.setItem('userId', userId)
      if (_.get(response, 'data.registered')){
        dispatch({type: AuthenticationActionTypes.VERIFIED});
        AuthenticationActions.navigateToPath(props, VERBIAGE.NAVIGATION.PATHS.DASHBOARD)
      }
      else{
        dispatch({type: AuthenticationActionTypes.VERIFIED});
        AuthenticationActions.navigateToPath(props, VERBIAGE.NAVIGATION.PATHS.PROFILE)
      }
    }).catch(error => {
      dispatch({type: AuthenticationActionTypes.VERIFIED});
      dispatch(AuthenticationActions.setAuthFailResponse(error.data));
    })
  },

  generateOTP: credentials => (dispatch) => {
    api.post(URLBuilder.build(URL.AUTHENTICATION.GENERATE_OTP), {
      email: credentials.email
    }).then(response => {
      dispatch(AuthenticationActions.setGenarateOtpResponse(response.data));
    });
  },

  resendOtp: (props) => (dispatch) => {
    const email = localStorage.getItem('ID');
    api.post(URLBuilder.build(URL.AUTHENTICATION.RESEND_OTP), {
      email
    }).then(response => {
      dispatch(AuthenticationActions.setGenarateOtpResponse(response.data));
    });
  },

  registerUser: (payload, props) => (dispatch) => {
    const { authentication } = store.getState();
    dispatch({type: AuthenticationActionTypes.FETCHING});
    let url = URLBuilder.build(URL.AUTHENTICATION.REGISTER);
    url = url.replace('$token', localStorage.getItem("Token"));
    api.post(url, payload)
      .then(response => {
        const userId = _.get(response, 'data.uuid');
        if(userId) {
          dispatch({type: AuthenticationActionTypes.FETCHING_SUCCESS});
          localStorage.setItem("userId", userId);
          //AuthenticationActions.navigateToPath(props, VERBIAGE.NAVIGATION.PATHS.DASHBOARD)
        }else
        dispatch({type: AuthenticationActionTypes.FETCHING_FAILED});
        dispatch(AuthenticationActions.setRegistrationResponse(response.data));
      });
  },

  navigateToPath: (props, path) => {
    props.history.push(path);
  }
};

export default AuthenticationActions;

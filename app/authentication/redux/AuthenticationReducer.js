import AuthenticationActionTypes from "./AuthenticationActionTypes";
import _ from "lodash";

const initialState = {
  email: "",
  token: "",
  expiry: "",
  isUserAuthenticated: false,
  isOtpGenerated: false,
  registered: false,
  userId: "",
  isOtpInvalid: false,
  fetching: false,
  fetched: false,
  showDialog: false,
  route: "/login",
  verified: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthenticationActionTypes.FETCH_DATA:
      return {
        ...state
      };
    case AuthenticationActionTypes.SET_SESSION:
      return {
        ...state,
        isUserAuthenticated: !!_.get(action, 'payload.session.token'),
        token: _.get(action, 'payload.session.token') ? _.get(action, 'payload.session.token') : "",
        expiry: _.get(action, 'payload.session.token') ? action.payload.session.expiry : "",
        registered: _.get(action, 'payload.session.token') ? action.payload.registered : false,
        userId: _.get(action , 'payload.user') ? action.payload.user.uuid : "",
        isOtpInvalid: _.get(action, 'payload.session.token') ? false : true

      };
    case AuthenticationActionTypes.SET_OTP_STATUS:
      return {
        ...state,
        isOtpGenerated: action.payload.msg === "otp sent",

      };
    case AuthenticationActionTypes.ON_INVALID_OTP:
      return {
        ...state,
        isOtpExpired: true,

      };
    case AuthenticationActionTypes.SET_REGISTRATION_DETAILS:
      return {
        ...state,
        userId: _.get(action, 'payload.uuid', ""),
        email: _.get(action, 'payload.attributes.email', "")

      };
    case AuthenticationActionTypes.UNAUTH_USER:
      return {
        ...state,
        ...initialState
      };
    case AuthenticationActionTypes.FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case AuthenticationActionTypes.VERIFIED:
      return {
        ...state,
        verified: true,
      };
    case AuthenticationActionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        showDialog: true
      };
    case AuthenticationActionTypes.FETCHING_FAILED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        showDialog: true
      };
    case AuthenticationActionTypes.CLOSE_DIALOG:
      return {
        ...state,
        fetching: false,
        fetched: false,
        showDialog: false
      };
    case AuthenticationActionTypes.CLOSE_DIALOG:
      return {
        ...state,
        fetching: false,
        fetched: false,
        showDialog: false
      };
    case AuthenticationActionTypes.SET_ROUTE:
      return {
        ...state,
        route: _.get(action, 'payload.route'),
      };
    default:
      return state;
  }
};

export default authenticationReducer;

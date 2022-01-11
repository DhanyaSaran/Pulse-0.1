const AuthenticationActionTypes = {
  FETCH_DATA: "authentication/FETCH_DATA",
  SET_SESSION: "authentication/SET_SESSION",
  SET_OTP_STATUS: "authentication/SET_OTP_STATUS",
  ON_INVALID_OTP: "authentication/ON_INVALID_OTP",
  SET_REGISTRATION_DETAILS: "authentication/SET_REGISTRATION_DETAILS",
  UNAUTH_USER: "authentication/UNAUTH_USER",
  FETCHING: "authentication/FETCHING",
  VERIFIED: "authentication/VERIFIED",
  FETCHING_SUCCESS: "authentication/FETCHING_SUCCESS",
  FETCHING_FAILED: "authentication/FETCHING_FAILED",
  CLOSE_DIALOG: "authentication/CLOSE_DIALOG",
  SET_ROUTE: "authentication/SET_ROUTE"
};

export default AuthenticationActionTypes;

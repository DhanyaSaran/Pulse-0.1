import DashboardActionTypes from "./dashboardActionTypes";
import _ from "lodash";

const initialState = {
  active: false,
  key: "",
  policy: "",
  expiry: "",
  userId: "",
  name: "",
  email: "",
  phone: "",
  createdAt: "",
  client_id: "",
  company: "",
  fetching: false,
  fetched: false,
  showDialog: false,
  profileUpdateDialog: {
    fetching: false,
    fetched: false,
    showDialog: false
  }

};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DashboardActionTypes.SET_LICENSE:
      return {
        ...state,
        active: _.get(action, 'payload.license.[0].active', ""),
        key: _.get(action, 'payload.license.[0].key', ""),
        policy: _.capitalize(_.get(action, 'payload.license.[0].policy',"")),
        expiry: _.get(action, 'payload.license.[0].expiry',""),
        userId: _.get(action, 'payload.user.uuid',"") ? action.payload.user.uuid : "",
        createdAt: _.get(action, 'payload.license.[0].created', "")
      };
    case DashboardActionTypes.SET_NEW_LICENSE:
      return {
        ...state,
        active: _.get(action, 'payload.license.active', ""),
        key: _.get(action, 'payload.license.key', ""),
        policy: _.capitalize(_.get(action, 'payload.license.policy', "")),
        expiry: _.get(action, 'payload.license.expiry', ""),
        userId: _.get(action, 'payload.user.uuid') ? action.payload.user.uuid : "",
        createdAt: _.get(action, 'payload.license.created', "")
      };
    case DashboardActionTypes.SET_RESPONSIVE_VIEW:
      return {
        ...state,
        isMobileView: action.payload
      };
    case DashboardActionTypes.SET_PROFILE_DETAILS:
      return {
        ...state,
        email: _.get(action, 'payload.attributes.email', ""),
        name: _.get(action, 'payload.attributes.name', ""),
        company:_.get(action, 'payload.attributes.company', ""),
        phone: _.get(action, 'payload.attributes.phone'),
        client_id: _.get(action, 'payload.client_id', "")
      };
    case DashboardActionTypes.FETCHING:
      return {
        ...state,
        fetching: true
      };
      case DashboardActionTypes.PROFILE_UPDATING:
      return {
        ...state,
        profileUpdateDialog: {
          fetching: true
        }
      };
    case DashboardActionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        showDialog: true
      };
      case DashboardActionTypes.PROFILE_UPDATION_SUCCESS:
      return {
        ...state,
        profileUpdateDialog: {
          fetching: false,
          fetched: true,
          showDialog: true
        }
      };
    case DashboardActionTypes.FETCHING_FAILED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        showDialog: true
      };
      case DashboardActionTypes.PROFILE_UPDATION_FAILED:
      return {
        ...state,
        profileUpdateDialog: {
          fetching: false,
          fetched: false,
          showDialog: true
        }
      };
    case DashboardActionTypes.CLOSE_DIALOG:
      return {
        ...state,
        fetching: false,
        fetched: false,
        showDialog: false,
        profileUpdateDialog: {
          fetching: false,
          fetched: false,
          showDialog: false
        }
      };
    default:
      return state;
  }
};

export default dashboardReducer;

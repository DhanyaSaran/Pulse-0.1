import React from "react";
import PropTypes from "prop-types";
import * as AntDIcons from "@ant-design/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import { oneOfProperties } from "../../utils/propTypes";

import "./icon.scss";

const UIIcon = ({ name, type, icon }) => {
  if (type === UIIcon.type.antd) {
    const AntdIcon = AntDIcons[name];
    return <AntdIcon/>
  } else if(icon){
    return <div className="faSizeFix"><FontAwesomeIcon icon={icon}/></div>
  }else{
    return "";
  }
}

UIIcon.type = {
  antd: "antd",
  fontAwesome: "fontAwesome"
}

UIIcon.propTypes = {
  type: oneOfProperties(UIIcon.type).isRequired
}

export default UIIcon;
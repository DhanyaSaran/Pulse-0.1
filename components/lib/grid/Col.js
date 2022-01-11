import React from "react";
import { Col } from "antd";
import PropTypes from "prop-types";

const UICol = (props) => {
  
  return (
    <Col {...props} />
  );
};

UICol.propyTypes = {
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string
}

export default UICol;

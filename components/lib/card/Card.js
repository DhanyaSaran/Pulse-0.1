import React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";

import "./card.scss";

const UICard = (props ) => {
  
  return (
    <Card {...props} className={UICard.styles.card}>
      {props.children}
    </Card>
  );
};

// UIButton.propTypes = {
//   children: PropTypes.any,
//   icon: PropTypes.any,
//   isBusy: PropTypes.bool,
//   isDisabled: PropTypes.bool,
//   isFullWidth: PropTypes.bool,
//   isRounded: PropTypes.bool,
//   type: PropTypes.string,
//   ghost: PropTypes.bool
// };

// UIButton.defaultProps = {
//   children: undefined,
//   icon: undefined,
//   isBusy: false,
//   isFullWidth: false,
//   isDisabled: false,
//   isRounded: false,
//   ghost: false,
//   type: "default"
// };

// UIButton.types = {
//   primary: "primary",
//   default: "default",
//   danger: "danger",
//   transparent: "transparent"
// };

UICard.styles = {
  card: "card"
};

export default UICard;

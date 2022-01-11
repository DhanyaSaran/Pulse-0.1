import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.scss";

const getClassName = (type, className) => {
  return classNames([
    {[UIButton.styles.button]: true},
    {[UIButton.styles.transparent]: type === UIButton.types.transparent},
    {[className]: className},
  ])
}

const UIButton = ({ children, isRounded, type, isDisabled, icon, isBusy, isFullWidth, onClick, className, ghost } ) => {
  
  return (
    <Button
      shape={isRounded ? "round" : "default"}
      type={type === UIButton.types.danger || type === UIButton.types.transparent ? undefined : type}
      danger={type === UIButton.types.danger}
      disabled={isDisabled}
      loading={isBusy}
      icon={icon}
      block={isFullWidth}
      onClick={onClick}
      ghost={ghost}
      className={getClassName(type, className)}
    >
      {children}
    </Button>
  );
};

UIButton.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
  isBusy: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isRounded: PropTypes.bool,
  type: PropTypes.string,
  ghost: PropTypes.bool
};

UIButton.defaultProps = {
  children: undefined,
  icon: undefined,
  isBusy: false,
  isFullWidth: false,
  isDisabled: false,
  isRounded: false,
  ghost: false,
  type: "primary"
};

UIButton.types = {
  primary: "primary",
  default: "default",
  danger: "danger",
  transparent: "transparent"
};

UIButton.styles = {
  button: "btn",
  transparent: "btnTransparent"
};

export default UIButton;

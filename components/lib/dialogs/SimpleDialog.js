import React from "react";
import PropTypes from "prop-types";
import { Modal } from 'antd';
import classNames from "classnames";
import Icon from "../icon/icon";
import Button from "../button/Button";
import UITypography from "../typography/typography";
import "./simpleDialog.scss";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const getSectionTopClassName = (variant) => {
  return classNames("section-top", [
    {[UISimpleDialog.styles.success]: variant === UISimpleDialog.types.success},
    {[UISimpleDialog.styles.error]: variant === UISimpleDialog.types.error},
    {[UISimpleDialog.styles.default]: undefined || false || UISimpleDialog.types.default},
  ])
}

const UISimpleDialogIcons = {
  success:  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0981 36.1888L28.0283 49.4117L53.5295 23.3333" stroke="black" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="35" cy="35" r="33" stroke="black" strokeWidth="4"/>
            </svg>,
  error:  <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.4459 19.363C35.6661 19.1578 35.8436 18.9112 35.9685 18.6373C36.0933 18.3634 36.163 18.0677 36.1735 17.7669C36.1841 17.4661 36.1353 17.1661 36.0299 16.8842C35.9245 16.6023 35.7646 16.3439 35.5594 16.1237C35.3541 15.9036 35.1075 15.726 34.8337 15.6012C34.5598 15.4763 34.264 15.4067 33.9632 15.3961C33.6624 15.3856 33.3625 15.4344 33.0806 15.5398C32.7987 15.6452 32.5403 15.805 32.3201 16.0103L25.6147 22.262L19.363 15.5542C18.9447 15.1258 18.3753 14.8781 17.7767 14.8641C17.1781 14.8502 16.5978 15.0711 16.16 15.4796C15.7222 15.888 15.4616 16.4516 15.4341 17.0498C15.4065 17.6479 15.6142 18.2331 16.0126 18.6801L22.2643 25.3855L15.5566 31.6372C15.3287 31.8403 15.1436 32.087 15.0124 32.3627C14.8811 32.6383 14.8063 32.9374 14.7922 33.2424C14.7782 33.5474 14.8252 33.8522 14.9306 34.1387C15.036 34.4253 15.1975 34.6879 15.4058 34.9112C15.6141 35.1344 15.8649 35.3138 16.1435 35.4388C16.4221 35.5637 16.7228 35.6318 17.028 35.6389C17.3333 35.646 17.6369 35.5921 17.921 35.4802C18.2051 35.3684 18.4639 35.2009 18.6824 34.9876L25.3878 28.7382L31.6395 35.4436C31.8413 35.6758 32.0879 35.8649 32.3644 35.9997C32.6409 36.1345 32.9417 36.2123 33.2489 36.2284C33.5561 36.2445 33.8634 36.1985 34.1525 36.0933C34.4415 35.9881 34.7065 35.8258 34.9315 35.6161C35.1565 35.4063 35.3369 35.1534 35.4621 34.8724C35.5873 34.5914 35.6546 34.288 35.6601 33.9805C35.6655 33.6729 35.609 33.3674 35.4939 33.0821C35.3787 32.7969 35.2073 32.5377 34.9899 32.3201L28.7405 25.6147L35.4459 19.363Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.291748 25.5C0.291748 11.5781 11.5782 0.291626 25.5001 0.291626C39.422 0.291626 50.7084 11.5781 50.7084 25.5C50.7084 39.4218 39.422 50.7083 25.5001 50.7083C11.5782 50.7083 0.291748 39.4218 0.291748 25.5ZM25.5001 46.125C22.7916 46.125 20.1096 45.5915 17.6072 44.555C15.1049 43.5185 12.8312 41.9992 10.916 40.084C9.00079 38.1688 7.48157 35.8951 6.44507 33.3928C5.40856 30.8905 4.87508 28.2085 4.87508 25.5C4.87508 22.7914 5.40856 20.1095 6.44507 17.6071C7.48157 15.1048 9.00079 12.8311 10.916 10.9159C12.8312 9.00067 15.1049 7.48145 17.6072 6.44494C20.1096 5.40844 22.7916 4.87496 25.5001 4.87496C30.9702 4.87496 36.2162 7.04794 40.0842 10.9159C43.9521 14.7838 46.1251 20.0299 46.1251 25.5C46.1251 30.97 43.9521 36.2161 40.0842 40.084C36.2162 43.952 30.9702 46.125 25.5001 46.125Z" fill="black"/>
          </svg>,
  default: <div className="default-dialog-icon"><Icon type="fontAwesome" icon={faInfoCircle} type={Icon.type.fontAwesome}/></div>
};


const getActionButtonByVariant = (variant, actionText, onActionClick) => {
  switch (variant){
    case UISimpleDialog.types.success:
      return <Button className="action" isRounded onClick={onActionClick}>{actionText}</Button>;
    case UISimpleDialog.types.error:
      return <Button className="action btn-error" isRounded type="transparent" onClick={onActionClick}>{actionText}</Button>;
    default:
      return <Button className="action" isRounded type="transparent" onClick={onActionClick}>{actionText}</Button>;
  }
};


const UISimpleDialog = ({ isModalVisible, title, content, variant, actionText, onActionClick, onClose }) => {
  

  return (
    <Modal visible={isModalVisible} footer={null} onCancel={onClose} className="dialog-root" closable={false} centered>
        <div className={getSectionTopClassName(variant)}>
          <div className="icon-container" onClick={onClose} >
            <Icon type="antd" name="CloseOutlined"/>
          </div>
          <div className="header">
            {variant ? UISimpleDialogIcons[variant] : UISimpleDialogIcons[UISimpleDialog.types.default]}
            {title && <UITypography className="title">{title}</UITypography>}
          </div>
          
        </div>
        <div className="section-bottom">
          {content && <UITypography className="content">{content}</UITypography>}
          {actionText && getActionButtonByVariant(variant, actionText, onActionClick)}
        </div>
    </Modal>
  )
};

UISimpleDialog.propTypes = {
  isModalVisible: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.string,
  actionText: PropTypes.string,
  onActionClick: PropTypes.func,
  onClose: PropTypes.func
}

UISimpleDialog.types = {
  success: "success",
  error: "error",
  default: "default"
}

UISimpleDialog.styles = {
  success: "success",
  error: "error", 
};

export default UISimpleDialog;

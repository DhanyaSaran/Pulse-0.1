import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import { Button, Form, message } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Typography from '../../../../components/lib/typography/typography';
import Input from '../../../../components/lib/input/input';
import Wrapper from './Wrapper';

import VERBIAGE from "../../../utils/enums/Verbiage";
import AuthenticationActions from "../../redux/AuthenticationActions";
import RightSegment from './RightSegment';
import Logo from "../common/Logo";
import Footer from "../common/Footer";

import "../styles/verify.scss";

const VerifyOTP = props => {
  const { authentication, validateCredentials, postCredentials, resendOtp } = props;

  const [otpTimer, setOtpTimer] = useState(60);

  const redirectToDashboard = () => {
    if (authentication.isUserAuthenticated) {
      props.history.push("/dashboard");
    }
  };

  const onFinish = async (values) => {
    await postCredentials({ otp: values.OTP }, props);
  };

  const initiateTimer = () => {
    var x = setInterval(() => {
      setOtpTimer((prev) => {
        if (prev === 0) {
          clearInterval(x);
          return 0;
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleOnResendOTP = async () => {
    setOtpTimer(60);
    initiateTimer();
    await resendOtp(props);
  }


  useEffect(() => initiateTimer(), []);

  return (
    <Wrapper>
      <div className={VerifyOTP.styles.container}>
        <div className={VerifyOTP.styles.leftSection} data-testid="title">
          <Logo />
          <div className={VerifyOTP.styles.header} data-testid="subTitle">
            <Typography level="h5" strong={true} className={VerifyOTP.styles.title}>
              {authentication.route === VERBIAGE.NAVIGATION.PATHS.REGISTER ? VERBIAGE.TITLE.REGISTER : VERBIAGE.TITLE.HOME}
            </Typography>
            <Typography level="h3" type="secondary" className={VerifyOTP.styles.subTitle} >
              {VERBIAGE.SUB_TITLE.HOME}
            </Typography>
          </div>
          <div className={VerifyOTP.styles.message} data-testid="message">
            <Typography className={VerifyOTP.styles.text}>
              {VERBIAGE.TEXT.OTP_SENT_MESSAGE_PART_ONE}
            </Typography>
            <Typography className={VerifyOTP.styles.text}>
              {VERBIAGE.TEXT.OTP_SENT_MESSAGE_PART_TWO}
            </Typography>
          </div>

          <div className={VerifyOTP.styles.Inputform}>
            <Form layout="vertical" className={VerifyOTP.styles.form} onFinish={onFinish}
              initialValues={{
                otp: ""
              }}>
              <Form.Item className={VerifyOTP.styles.label} wrapperCol={{ span: 24 }} name="OTP" label="OTP" rules={[{ required: true, max: 6 }]} data-testid="otpLevel">
                <Input
                  placeholder={VERBIAGE.PLACEHOLDERS.OTP}
                  className={VerifyOTP.styles.inputText}
                  data-testid="otpField"
                />
              </Form.Item>
              {!authentication.token && authentication.verified && <Typography className={VerifyOTP.styles.ValidationText}>{VERBIAGE.TEXT.INVALID_OTP}</Typography>}
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button className={VerifyOTP.styles.button} htmlType="submit" data-testid="login">
                  {authentication.route === VERBIAGE.NAVIGATION.PATHS.REGISTER ? VERBIAGE.BUTTONS.CREATE_ACCOUNT : VERBIAGE.BUTTONS.LOGIN}
                </Button>
              </Form.Item>
            </Form>

            <div className={VerifyOTP.styles.noOtp}>
              {!!otpTimer && <Typography className={VerifyOTP.styles.noOtpCountdown}>
                {`00:${otpTimer}`}
              </Typography>}
              <Typography level="h3" className={VerifyOTP.styles.noOtpText}>
                {VERBIAGE.TEXT.OTP_NOT_RECEIVED}
              </Typography>
              <Button type="link" className={VerifyOTP.styles.noOtpLink} disabled={!!otpTimer} onClick={handleOnResendOTP} data-testid="resend">
                {VERBIAGE.LINKS.RESEND_NEW_OTP}
              </Button>
            </div>
          </div>
          <Footer />
        </div>
        <RightSegment />
      </div>
    </Wrapper>
  );
};

VerifyOTP.propTypes = {
  validateCredentials: PropTypes.func.isRequired,
  postCredentials: PropTypes.func.isRequired,
  resendOtp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
  validateCredentials: () => {
    dispatch(AuthenticationActions.validateCredentials());
  },
  postCredentials: (credentials, props) => {
    dispatch(AuthenticationActions.postCredentials(credentials, props));
  },
  resendOtp: (props) => {
    dispatch(AuthenticationActions.resendOtp(props));
  }
});

VerifyOTP.styles = {
  container: "page-container",
  leftSection: "page-container__left-section",
  header: "page-container__left-section__header",
  title: "page-container__left-section__header__title",
  subTitle: "page-container__left-section__header__sub-title",
  message: "page-container__left-section__message",
  text: "page-container__left-section__message__text",
  Inputform: "page-container__left-section__form",
  form: "page-container__left-section__form__form-container",
  ValidationText: "page-container__left-section__form__vld-text",
  label: "page-container__left-section__form__label",
  error: "page-container__left-section__form__error",
  inputText: "page-container__left-section__form__text-field",
  button: "page-container__left-section__form__btn",
  noAcc: "page-container__left-section__form__na-acc",
  noAccText: "page-container__left-section__form__na-acc__text",
  noAccLink: "page-container__left-section__form__na-acc__link",
  noOtp: "page-container__left-section__form__na-otp",
  noOtpText: "page-container__left-section__form__na-otp__text",
  noOtpCountdown: "page-container__left-section__form__na-otp__countdown",
  noOtpLink: "page-container__left-section__form__na-otp__link",
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(VerifyOTP));

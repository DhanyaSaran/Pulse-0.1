import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import { Button, Form } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UIButton from '../../../../components/lib/button/Button';
import Typography from '../../../../components/lib/typography/typography';
import Input from '../../../../components/lib/input/input';
import Wrapper from './Wrapper';

import VERBIAGE from "../../../utils/enums/Verbiage";
import AuthenticationActions from "../../redux/AuthenticationActions";
import RightSegment from './RightSegment';
import Logo from "../common/Logo";
import Footer from "../common/Footer";


import "../styles/login.scss";

const Login = props => {
  const { authentication, validateCredentials, generateOTP, setPreviousRoute } = props;

  const [isRouteRegister, setIsRouteRegister] = useState(false);

  const redirectToDashboard = () => {
    if (authentication.isUserAuthenticated) {
      props.history.push(VERBIAGE.NAVIGATION.PATHS.DASHBOARD);
    }
  };

  const onFinish = async (values) => {
    await generateOTP({ email: values.Email });
    //sessionStorage.setItem('ID', values.Email)
    localStorage.setItem('ID', values.Email)
    props.history.push(VERBIAGE.NAVIGATION.PATHS.VERIFY);
  };

  const setTextWithRoute = () => {
    setPreviousRoute(props);
  }


  const redirectToLoginOrRegister = () => {
    if (authentication.route === VERBIAGE.NAVIGATION.PATHS.REGISTER) {
      props.history.push(VERBIAGE.NAVIGATION.PATHS.LOGIN)
      setPreviousRoute(props);
    } else {
      props.history.push(VERBIAGE.NAVIGATION.PATHS.REGISTER);
      setPreviousRoute(props);
    }
  };



  useEffect(() => setTextWithRoute(), [authentication.route]);

  useEffect(() => validateCredentials(), [validateCredentials]);

  useEffect(() => redirectToDashboard());



  return (
    <Wrapper>
      <div className={Login.styles.container}>
        <div className={Login.styles.leftSection}>
          <Logo />
          <div className={Login.styles.header}>
            <Typography level="h5" className={Login.styles.title}>
              {authentication.route === VERBIAGE.NAVIGATION.PATHS.REGISTER ? VERBIAGE.TITLE.REGISTER : VERBIAGE.TITLE.HOME}
            </Typography>
            <Typography type="secondary" className={Login.styles.subTitle}>
              {VERBIAGE.SUB_TITLE.HOME}
            </Typography>
          </div>

          <div className={Login.styles.Inputform}>
            <Form layout="vertical" className={Login.styles.form} onFinish={onFinish}
              initialValues={{
                Email: ""
              }}>
              <Form.Item className={Login.styles.label} wrapperCol={{ span: 24 }} name="Email" label="Email"
                rules={[{ required: true }, { type: 'email', message: 'Please enter valid Email' }]}>
                <Input
                  placeholder={VERBIAGE.PLACEHOLDERS.EMAIL}
                  className={Login.styles.inputText}
                  data-testid="emailInput"
                />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button className={Login.styles.button} htmlType="submit"
                  data-testid="getOtp"
                >
                  {VERBIAGE.BUTTONS.GET_OTP}
                </Button>
              </Form.Item>

            </Form>

            <div className={Login.styles.noAcc}>
              <Typography level="h3" className={Login.styles.noAccText}>
                {authentication.route === VERBIAGE.NAVIGATION.PATHS.REGISTER ? VERBIAGE.TEXT.HAVE_ACCOUNT : VERBIAGE.TEXT.NOT_HAVE_ACCOUNT}
                <Button type="link" className={Login.styles.noAccLink} onClick={redirectToLoginOrRegister}>
                  {authentication.route === VERBIAGE.NAVIGATION.PATHS.REGISTER ? VERBIAGE.LINKS.LOGIN : VERBIAGE.LINKS.REGISTER}
                </Button>
              </Typography>
            </div>

          </div>
          <Footer />
        </div>
        <RightSegment />
      </div>

    </Wrapper>
  );
};

Login.propTypes = {
  validateCredentials: PropTypes.func.isRequired,
  postCredentials: PropTypes.func.isRequired
};

Login.styles = {
  container: "login-page-container",
  leftSection: "login-page-container__left-section",
  header: "login-page-container__left-section__header",
  title: "login-page-container__left-section__header__title",
  subTitle: "login-page-container__left-section__header__sub-title",
  Inputform: "login-page-container__left-section__form",
  form: "login-page-container__left-section__form__form-container",
  label: "login-page-container__left-section__form__label",
  inputText: "login-page-container__left-section__form__text-field",
  button: "login-page-container__left-section__form__btn",
  noAcc: "login-page-container__left-section__form__na-acc",
  noAccText: "login-page-container__left-section__form__na-acc__text",
  noAccLink: "login-page-container__left-section__form__na-acc__link"
}

const mapStateToProps = state => ({
  authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
  validateCredentials: () => {
    dispatch(AuthenticationActions.validateCredentials());
  },
  postCredentials: credentials => {
    dispatch(AuthenticationActions.postCredentials(credentials));
  },
  generateOTP: credentials => {
    dispatch(AuthenticationActions.generateOTP(credentials));
  },
  setPreviousRoute: (props) => {
    dispatch(AuthenticationActions.setPreviousRoute(props));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Login));

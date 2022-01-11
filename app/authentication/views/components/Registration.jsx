import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Form, Select } from "antd";
import _ from "lodash";

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
import Dialog from "../../../../components/lib/dialogs/SimpleDialog";



import "../styles/registration.scss";

const Registration = props => {
  const { authentication, dashboard, validateCredentials, registerUser, resetFetched } = props;

  const closeModal = () => {
    resetFetched();
    props.history.push(VERBIAGE.NAVIGATION.PATHS.DASHBOARD);
    setEditMode(false)
  };

  const onFinish = async (values) => {
    await registerUser({ profile: { ...values } }, props);
  };

  return (
    <Wrapper>
      <div className={Registration.styles.container}>
        <div className={Registration.styles.leftSection}>
          <Logo />
          <div className={Registration.styles.header}
            data-testid="header"
          >
            <Typography level="h5" className={Registration.styles.title}>
              {VERBIAGE.TITLE.CONTACT_DETAILS}
            </Typography>
          </div>

          <div className={Registration.styles.Inputform}>
            <Form layout="vertical" className={Registration.styles.form} onFinish={onFinish}
              initialValues={{
                email: localStorage.getItem("ID"),
                name: "",
                company: {
                  name: "",
                  url: ""
                },
                phone: "",
              }}>
              <Form.Item className={Registration.styles.label} wrapperCol={{ span: 24 }} name="name" required={false} label={VERBIAGE.LABELS.NAME} rules={[{ required: true, message: 'Name is required' }]}>
                <Input
                  placeholder={VERBIAGE.PLACEHOLDERS.NAME}
                  className={Registration.styles.inputText}
                  data-testid="name"
                />
              </Form.Item>

              <Form.Item className={Registration.styles.label} wrapperCol={{ span: 24 }} required={false} name="email" label={VERBIAGE.LABELS.EMAIL} rules={[{ required: true, message: 'Email is required' }]}>
                <Input disabled={true}
                  suffix={<LockOutlined />}
                  placeholder={VERBIAGE.PLACEHOLDERS.EMAIL}
                  className={Registration.styles.inputText}
                  data-testid="email"
                />
              </Form.Item>

              <Form.Item className={Registration.styles.label} wrapperCol={{ span: 24 }} name="phone" label={VERBIAGE.LABELS.MOBILE} rules={[{ len: 10, message: 'please enter valid mobile no.' }]}>
                <Input
                  placeholder={VERBIAGE.PLACEHOLDERS.MOBILE}
                  className={Registration.styles.inputText}
                  data-testid="phone"
                />
              </Form.Item>

              <Form.Item className={Registration.styles.label} wrapperCol={{ span: 24 }} name={["company", "name"]} label={VERBIAGE.LABELS.COMPANY_NAME}>
                <Input
                  placeholder={VERBIAGE.PLACEHOLDERS.COMPANY_NAME}
                  className={Registration.styles.inputText}
                  data-testid="companyName"
                />
              </Form.Item>

              <Form.Item className={Registration.styles.label} wrapperCol={{ span: 24 }} name={["company", "url"]} label={VERBIAGE.LABELS.COMPANY_URL}>
                <Input
                  placeholder={VERBIAGE.PLACEHOLDERS.COMPANY_URL}
                  className={Registration.styles.inputText}
                  data-testid="companyUrl"
                />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button className={Registration.styles.button} htmlType="submit"
                  data-testid="save"
                >
                  {VERBIAGE.BUTTONS.SAVE}
                </Button>
              </Form.Item>

            </Form>
          </div>
          <Footer />
        </div>
        <RightSegment />
      </div>
      {!dashboard.fetching && dashboard.showDialog && <Dialog
        isModalVisible={!dashboard.fetching && dashboard.showDialog}
        onClose={closeModal}
        title={dashboard.fetched ? VERBIAGE.TEXT.REGISTRATION_SUCCESS : VERBIAGE.TEXT.REGISTRATION_FAILED}
        content={dashboard.fetched ? VERBIAGE.TEXT.CREATE_RPOFILE_SUCCESS : VERBIAGE.TEXT.GENERAL_FAILURE_MESSAGE}
        variant={dashboard.fetched ? "success" : "error"}
        actionText={dashboard.fetched ? VERBIAGE.BUTTONS.CONTINUE : VERBIAGE.BUTTONS.TRY_AGAIN}
        onActionClick={closeModal}
      />}
    </Wrapper>
  );
};

Registration.propTypes = {
  validateCredentials: PropTypes.func.isRequired,
  postCredentials: PropTypes.func.isRequired
};

Registration.styles = {
  container: "registration-page-container",
  leftSection: "registration-page-container__left-section",
  header: "registration-page-container__left-section__header",
  title: "registration-page-container__left-section__header__title",
  subTitle: "registration-page-container__left-section__header__sub-title",
  Inputform: "registration-page-container__left-section__form",
  form: "registration-page-container__left-section__form__form-container",
  label: "registration-page-container__left-section__form__label",
  inputText: "registration-page-container__left-section__form__text-field",
  button: "registration-page-container__left-section__form__btn",
  noAcc: "registration-page-container__left-section__form__na-acc",
  noAccText: "registration-page-container__left-section__form__na-acc__text",
  noAccLink: "registration-page-container__left-section__form__na-acc__link"
}

const mapStateToProps = state => ({
  authentication: state.authentication,
  dashboard: state.dashboard
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
  registerUser: (payload, props) => {
    dispatch(AuthenticationActions.registerUser(payload, props));
  },
  resetFetched: (payload) => {
    dispatch(AuthenticationActions.resetFetched());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Registration));

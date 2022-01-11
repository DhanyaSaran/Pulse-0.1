import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { UserOutlined, LockOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Select } from "antd";
import _ from "lodash";
import moment from "moment"

import PropTypes from "prop-types";
import { connect } from "react-redux";
import UIButton from '../../../../components/lib/button/Button';
import Typography from '../../../../components/lib/typography/typography';
import Input from '../../../../components/lib/input/input';
import Icon from '../../../../components/lib/icon/icon';

import VERBIAGE from "../../../utils/enums/Verbiage";
import DashboardActions from '../../redux/dashboardActions';




import "../styles/licenseDetails.scss";

const LicenseDetails = props => {
  const { authentication, dashboard } = props;

  return (
    <React.Fragment>
      <div className={LicenseDetails.styles.container}>
        <div className={LicenseDetails.styles.table}>
          <Typography className={LicenseDetails.styles.label}>
            {VERBIAGE.CAPS_LABELS.LICENSE_ID}
          </Typography>
          <Typography className={LicenseDetails.styles.value}>
            {dashboard.key}
          </Typography>
          <div className={LicenseDetails.styles.lineBreak}/>
          <Typography className={LicenseDetails.styles.label}>
            {VERBIAGE.CAPS_LABELS.PLAN}
          </Typography>
          <Typography className={LicenseDetails.styles.value}>
            {dashboard.policy}{" "}{VERBIAGE.PLANS.PLAN}
          </Typography>
          <div className={LicenseDetails.styles.lineBreak}/>
          <Typography className={LicenseDetails.styles.label}>
            {VERBIAGE.CAPS_LABELS.START_DATE}
          </Typography>
          <Typography className={LicenseDetails.styles.value}>
            {moment(dashboard.createdAt).format(VERBIAGE.DATE.FORMAT)}
          </Typography>
          <div className={LicenseDetails.styles.lineBreak}/>
          <Typography className={LicenseDetails.styles.label}>
            {VERBIAGE.CAPS_LABELS.END_DATE}
          </Typography>
          <Typography className={LicenseDetails.styles.value}>
            {moment(dashboard.expiry).format(VERBIAGE.DATE.FORMAT)}
          </Typography>
          <div className={LicenseDetails.styles.lineBreak}/>
          <Typography className={LicenseDetails.styles.label}>
            {VERBIAGE.CAPS_LABELS.STATUS}
          </Typography>
          <Typography className={LicenseDetails.styles.value}>
            {dashboard.active ? VERBIAGE.STATUSES.ACTIVE : VERBIAGE.STATUSES.INACTIVE}
          </Typography>

        </div>
      </div>
    </React.Fragment>
  );
};

LicenseDetails.propTypes = {

};

LicenseDetails.styles = {
  container: "license-dts-container",
  header: "license-dts-container__header",
  title: "license-dts-container__header__title",
  table: "license-dts-container__dts-tbl",
  label: "license-dts-container__dts-tbl__label",
  value: "license-dts-container__dts-tbl__value",
  lineBreak: "license-dts-container__dts-tbl__line-break"
}

const mapStateToProps = state => ({
  authentication: state.authentication,
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LicenseDetails));

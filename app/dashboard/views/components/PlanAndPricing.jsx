import React, { useEffect, useState } from "react";
import { Typography, Divider } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import { Button } from "antd";
import "../styles/profile.scss";
import ProfileLayout from "../layouts/ProfileLayout";
import LicenseCard from "./LicenseCard";
import ProfileDetails from "./profileDetails";
import PricingCard from "./pricingCard";
import LicenseDetails from "./LicenseDetails";
import PlanInfoCard from "./PlanInfoCard";
import PlanPriceCard from "./PlanPriceCard";


import DashboardActions from '../../redux/dashboardActions';
import VERBIAGE from "../../../utils/enums/Verbiage";
import { UIBaseCard, UITypography, UIButton } from "../../../../components/lib";

import "../styles/planandpricing.scss";



const PlanAndPricing = ({ getLicenseKey, generateLicenseKey, dashboard, getProfileDetails }) => {

  const [isLicenseDetailsVisible, setLicenseDetailsVisible] = useState(false);

  const fetchData = () => {
    getLicenseKey();
    getProfileDetails();
  };

  const getDaysLeft = () => {

    if (dashboard.expiry) {
      const endDate = moment(dashboard.expiry);
      const diffDays = endDate.diff(moment(), 'days');
      if (diffDays < 1)
        return 0;
      return diffDays;
    }
    return 0;
  }

  const toggleLicenseDetails = () => {
    setLicenseDetailsVisible(val => !val);
  }



  useEffect(() => fetchData(), [])

  return (
    <ProfileLayout
      selectedMenuItem={"plansAndPricing"}
      leftColumn={
        <div>
          <div className={PlanAndPricing.styles.header}>
            <div
              className={PlanAndPricing.styles.subHeader}
            >
              <UITypography className="gray-text">{VERBIAGE.PROFILE.LICENSE.YOUR_ORGANISATION}</UITypography>
              <strong style={{
                fontSize: "20px"
              }}>{_.get(dashboard, "company.name")}</strong>

              <div className={PlanAndPricing.styles.lineBreak} />
            </div>
          </div>


          
          <div className={PlanAndPricing.styles.container}>
            <div className={PlanAndPricing.styles.bottom}>
              <div
                className={PlanAndPricing.styles.bottomTopTitle}
              >
                <div
                  className={PlanAndPricing.styles.bottomTopTitleChildren}
                >
                  <div data-testid="service"><UITypography className={PlanAndPricing.styles.bottomTitle}>
                    {VERBIAGE.TITLE.SERVICE}
                  </UITypography>
                  </div>
                  <div data-testid="right">
                    <UITypography className={PlanAndPricing.styles.bottomTitleOne}>
                      {VERBIAGE.TITLE.RIGHT}
                    </UITypography>
                  </div>
                </div>
                <div data-testid="subTitleCaption" className={PlanAndPricing.styles.subTitle}>{VERBIAGE.SUB_TITLE.PRICING}</div>
              </div>
              
              {/* Three cards */}
              <div className={PlanAndPricing.styles.cardContainer}>
                <PricingCard
                  cost={"Free"}
                  companyName={_.get(dashboard, "company.name")}
                  ongoingPlan={dashboard.policy}
                  noOfDaysLeft={getDaysLeft()}
                  isActive={dashboard.active}
                  offer={!_.get(dashboard, 'isMobileView') ? VERBIAGE.PROFILE.LICENSE.OFFERS.COMMUNITY : VERBIAGE.PROFILE.LICENSE.OFFERS.COMMUNITY_MOBILE_VIEW}
                />
                <PlanPriceCard offers={VERBIAGE.PROFILE.LICENSE.OFFERS.PREMIUM} plan={VERBIAGE.PLANS.PREMIUM} cost={"$0.05"} costHeader_1={VERBIAGE.TEXT.COST_SUB_HEADER_ONE} costHeader_2={VERBIAGE.TEXT.COST_SUB_HEADER_TWO} />
                <PlanPriceCard offers={VERBIAGE.PROFILE.LICENSE.OFFERS.CORPORATE} plan={VERBIAGE.PLANS.CORPORATE} cost={"Custom"} costHeader={""} />
              </div>
           
           
           
            </div>
          </div>
        </div>
      }
    />
  );
};

PlanAndPricing.propTypes = {
};

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => ({
  getLicenseKey: credentials => {
    dispatch(DashboardActions.getLicenseKey());
  },
  getProfileDetails: () => {
    dispatch(DashboardActions.getProfileDetails());
  }
});

PlanAndPricing.styles = {
  bottomTopTitleChildren: "bottomTopTitle-children",
  bottomTopTitle: "bottomTopTitle",
  rightColumn: "rightColumn",
  header: "headerPricing",
  subHeader: "subHeaderPricing",
  lineBreak: "line-break",
  container: "pricing-dsc-container",
  top: "pricing-dsc-container__top-content",
  bottom: "pricing-dsc-container__bottom-content",
  topTitle: "pricing-dsc-container__top-content__title",
  topSubTitle: "pricing-dsc-container__top-content__sub-title",
  bottomTitle: "pricing-dsc-container__bottom-content__title",
  bottomTitleOne: "pricing-dsc-container__bottom-content__title__one",
  subTitle: "pricing-dsc-container__bottom-content__subtitle",
  cardContainer: "pricing-dsc-container__bottom-content__card-container",
  buttonContainer: "toggle-btn-container",
  toggleButton: "toggle-btn-container__btn"
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PlanAndPricing));

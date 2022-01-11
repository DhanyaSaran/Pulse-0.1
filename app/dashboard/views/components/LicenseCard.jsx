import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";
import { UIBaseCard, UIIcon } from "../../../../components/lib";
import VERBIAGE from "../../../utils/enums/Verbiage";
import { faCircle } from '@fortawesome/free-solid-svg-icons';


import "../styles/licenseCard.scss";

const { Title, Text } = Typography;

const LicenseCard = ({ companyName, licenseId, planName, daysLeft, isActive }) => {
  return (
    <UIBaseCard
      classnames="license-card"
      padding={UIBaseCard.padding.large}
      margin={UIBaseCard.margin.none}
      content={
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>{companyName}</div>
            <div
              style={{
                backgroundColor: "#fff",
                color: isActive ? "#1dd1a1" : "#FF5C5C",
                height: "29px",
                lineHeight: "29px",
                width: "71px",
                display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",
                borderRadius: 5
              }}
            >
              {isActive ? <>Active</> : <>Inactive</>}
              <span style={{ fontSize: 10, alignSelf: "center" }}><UIIcon icon={faCircle} type={UIIcon.type.fontAwesome} /></span>
            </div>
          </div>
          <p
            style={{
              marginTop: "55px",
              fontFamily: "Poppins,sans-serif",
              fontSize: "1rem",
              fontWeight: 400
            }}
          >
            {planName}{" "}{VERBIAGE.PLANS.PLAN}
            <br></br>
            <span style={{ fontSize: ".9rem", fontWeight: 700 }}>{daysLeft}</span>
            <span style={{ fontSize: ".7rem" }}>{VERBIAGE.PROFILE.LICENSE.DAYS_LEFT}</span>
          </p>
        </>
      }
    />
  );
};

LicenseCard.propTypes = {
  companyName: PropTypes.string.isRequired,
  licenseId: PropTypes.string.isRequired,
  planName: PropTypes.string.isRequired,
  daysLeft: PropTypes.number,
  isActive: PropTypes.bool
}

LicenseCard.defaultProps = {
  daysLeft: 0,
  isActive: false
}

export default LicenseCard;

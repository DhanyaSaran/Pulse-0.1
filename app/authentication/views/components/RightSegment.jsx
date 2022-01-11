import React, { useState } from 'react'
import _ from "lodash";
import { Carousel } from "antd";
import UIButton from '../../../../components/lib/button/Button';
import Typography from '../../../../components/lib/typography/typography';

import Slide from '../../../../assets/dash.png';
import Docker from '../../../../assets/docker.png';
import VERBIAGE from "../../../utils/enums/Verbiage";

import "../styles/right_segment.scss";

function RightSegment() {

  const [title, setTitle] = useState(VERBIAGE.TITLE.FEATURE)
  const [subTitle, setSubTitle] = useState(VERBIAGE.SUB_TITLE.FEATURE);

  const afterChange = (imageIndex) => {
    if(imageIndex === 1){
      setTitle(VERBIAGE.TITLE.SECURE)
      setSubTitle(VERBIAGE.SUB_TITLE.SECURE)
    }else if(imageIndex === 0){
      setTitle(VERBIAGE.TITLE.FEATURE)
      setSubTitle(VERBIAGE.SUB_TITLE.FEATURE)
    }
  }

  const openFeatureWindow = () => {
    window.open('https://www.episilia.com/features')
  }
  
  
  return (
    <React.Fragment>
      <div className={RightSegment.styles.section}>
        <div className={RightSegment.styles.header}>
          <UIButton type="default" className={RightSegment.styles.button} onClick={openFeatureWindow}>
          {VERBIAGE.BUTTONS.NEW_FEATURES}
          </UIButton>
        </div>
        <div className={RightSegment.styles.container}>
          <h6 className={RightSegment.styles.title}>{title}</h6>
          <div>
            <Typography level="h3" className={RightSegment.styles.subTitle}>
            {subTitle}
          </Typography>
            <a href="https://www.episilia.com/features" target="blank" className={RightSegment.styles.link}>
              {VERBIAGE.LINKS.LEARN_MORE}
            </a>
          </div>
        </div>
        <div className={RightSegment.styles.slideShow}>
          <Carousel autoplay afterChange={afterChange}>
            <img src={Slide} alt="No"/>
            <img src={Docker} alt="No"/>
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  )
}

RightSegment.styles = {
  section: "right-section",
  header: "right-section__right-header",
  button: "right-section__right-header__btn",
  container: "right-section__container",
  title: "right-section__container__header-title",
  subTitle: "right-section__container__header-sub-title",
  link: "right-section__container__link",
  slideShow: "right-section__img-colossal",
}

export default RightSegment;

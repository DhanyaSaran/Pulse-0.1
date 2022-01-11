import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { oneOfProperties } from '../../utils/propTypes';

import "./baseCard.scss";
import STYLE from '../../utils/enums/style';

const getClassNames = (variant, color, margin, padding, classnames) => classNames(
  {"episilia-base-card": true},
  {[`episilia-base-card-${variant}-${color}`]: true},
  {[`episilia-base-card-${variant}`]: true},
  {[`episilia-base-card-${color}`]: true},
  {[STYLE.DIMENSIONS.MARGIN[margin]]: true},
  {[STYLE.DIMENSIONS.PADDING[padding]]: true},
  {[classnames]: !!classnames}
);

const UIBaseCard = ({content, variant, color, margin, padding, classnames }) => (
  <React.Fragment>
    <div className={getClassNames(variant, color, margin, padding, classnames)}>
      { content }
    </div>
  </React.Fragment>
);

UIBaseCard.variants = {
  outlined: "outlined",
  filled: "filled",
  floating: "floating",
  flat: "flat"
}

UIBaseCard.colors = {
  primary: "primary",
  secondary: "secondary"
}

UIBaseCard.margin = {
  small: "small",
  medium: "medium",
  large: "large",
  none: "none"
};

UIBaseCard.padding = {...UIBaseCard.margin};

UIBaseCard.propTypes = {
  content: PropTypes.element.isRequired,
  variant: oneOfProperties(UIBaseCard.variants),
  color: oneOfProperties(UIBaseCard.colors),
  padding: oneOfProperties(UIBaseCard.padding),
  margin: oneOfProperties(UIBaseCard.margin),
  classnames: PropTypes.string
}

UIBaseCard.defaultProps = {
  variant: UIBaseCard.variants.filled,
  color: UIBaseCard.colors.primary,
  padding: UIBaseCard.padding.small,
  margin: UIBaseCard.margin.small
}

export default UIBaseCard;

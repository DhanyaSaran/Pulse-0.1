import React from "react";
import PropTypes, { object } from "prop-types";
import UIRow from "../grid/Row";
import UICol from "../grid/Col";
import UIMenuItem from "./menuItem";

const UIMenu = ({ items, selectedId}) => {
  return <UIRow>
    {
      items.map((item) => (
        <UICol key={item.id} span={24}>
          <UIMenuItem
            id={item.id}
            text={item.text}
            icon={item.icon}
            iconAlign={item.iconAlign}
            variant={item.variant}
            isSelected={item.id === selectedId}
            isDisabled={item.isDisabled}
            onSelect={item.onSelect}
            iconClassName={item.iconClassName}
            textClassName={item.textClassName}
          />
        </UICol>
      ))
    }
  </UIRow>
}

UIMenu.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
  selectedId: PropTypes.string
}

export default UIMenu;

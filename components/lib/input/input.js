import React from "react";
import { Input } from "antd";
import './input.scss';

const UIInput = (props) => {
    return (
        <Input {...props} className={`${UIInput.styles.Input} ${props.className}`}>
            {props.children}
        </Input>
    );
};

UIInput.styles = {
    Input: "input-text",
}

export default UIInput;

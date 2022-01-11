import React from "react";
import { shallow } from "enzyme";
import Logo from '../../../../app/authentication/views/common/Logo';

describe("Logo component", () => {
  it("is logo class available", () => {
    const component = shallow(<Logo />);
    const wrapper = component.find(".logo");
    expect(wrapper.length).toBe(1);
  })
})


import React from "react";
import { shallow } from "enzyme";
import { render, screen , fireEvent } from '@testing-library/react';
import Footer from '../../../../app/authentication/views/common/Footer';

describe("Footer component", () => {
  it("is footer class available", () => {
    const component = shallow(<Footer/>);
    const wrapper = component.find(".footer");
    expect(wrapper.length).toBe(1);
  })
  it("is Copyright text inside Footer component ", () => {
  render(<Footer />);
  expect(screen.getByText("© Copyright 2021 Episilla all right reserved")).toBeInTheDocument();

    //const logins = screen.getAllByText(/Copyright/i)
    //screen.getByRole('article')
  //expect(screen.getByRole("article").length).toBe(1);

    //const loginButton = logins[1]
    //const component = shallow(<Footer/>);
  //expect(component.text()).toContain('<UITypography />');
    //console.log(component.text())
    //expect(component.text()).toContain('Copyright 2021 Episilla all right reserved');
   
  })
})
import React from "react";
import { shallow } from "enzyme";
import { render, screen , fireEvent ,userEvent} from '@testing-library/react';
import Button from './Button';

describe("FooButtonter component in dashbord", () => {
    const property = { 
        children: "submit",
      }
    it("is Button component renderd", () => {
        render(<Button/>);
        expect(screen.getByRole("button")).toBeInTheDocument();
        })   
  it("is Button component displaying the text ", () => {
  render(<Button {...property} />);
  expect(screen.getByText(/submit/)).toBeInTheDocument()
  })

})
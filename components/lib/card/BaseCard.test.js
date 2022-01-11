import React from "react";
import { shallow } from "enzyme";
import { render, screen , fireEvent ,userEvent} from '@testing-library/react';
import BaseCard from './BaseCard';

describe("BaseCard component ", () => {
  
      const property = { 
        content:<h1>hello</h1>,
        variant:"filled",
        color:"primary",
        padding: "small",
        margin: "small"
      }
    it("is BaseCard component renderd", () => {
        
        const { container } = render(<BaseCard  {...property}/>)
        
        expect(container.getElementsByClassName('episilia-base-card').length).toBe(1);
       
        })   

    it("is BaseCard component renderd with the passed html element ", () => {
        
            const { container } = render(<BaseCard  {...property}/>)
           
            expect(container.getElementsByTagName('h1').length).toBe(1);
           
            })
        it("is the passed html element content displayed ", () => {
        
                const { container } = render(<BaseCard  {...property}/>)
                expect(screen.getByText(/hello/)).toBeInTheDocument()
               
                })   

})
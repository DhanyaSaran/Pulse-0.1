import React from "react";
import { shallow } from "enzyme";
import { render, screen , fireEvent ,userEvent} from '@testing-library/react';
import SimpleDialog from './SimpleDialog';

describe("SimpleDialog component ", () => {
    const property = { 
        isModalVisible:true,
        title: "testing SimpleDialog",
        content: "this is for testing",
        
      }
      it("is SimpleDialog component renderd with the given title", () => {
        render(<SimpleDialog {...property}/>);
       expect(screen.getByText(/testing SimpleDialog/)).toBeInTheDocument()
      
       })   
    it("is SimpleDialog component renderd with the given content", () => {
         render(<SimpleDialog {...property}/>);
        expect(screen.getByText(/this is for testing/)).toBeInTheDocument()
       
        })   
        it("is SimpleDialog component renderd ",  () => {
           render(<SimpleDialog {...property}/>);
          //expect(container.getElementsByTagName('body').length).toBe(1);
         // screen.debug()
         //expect(screen.getByText(/testing SimpleDialog/)).toBeInTheDocument()
        
         }) 
})
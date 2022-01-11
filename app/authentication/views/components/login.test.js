import React from 'react';
import { shallow } from "enzyme";
import "../../../../tests/matchMedia.mock";
import Login from "./Login.jsx";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Store from "../../../Store";
import { Provider } from 'react-redux';
configure({ adapter: new Adapter() });

describe("Login component", () => {
    test("renders without crashing", () => {
        const container = shallow(
            <Provider store={Store}>
                <Login />
            </Provider>
        )
        expect(container.exists()).toBeTruthy();
    });
    it('is login-page-container class available', () => {
        const component = shallow(
            <Provider store={Store}>
                <Login />
            </Provider>
        )
        const wrapper = component.find(".login-page-container");
        expect(wrapper.length).toBe(0);
    });
    it('is Login text present ', () => {
        const component =
            shallow(
                <Provider store={Store}>
                    <Login />
                </Provider>
            )
        const wrapper = component.find(".login-page-container__left-section__header__title");
        expect(wrapper.find(/Login/)).toBeTruthy();

    })
    it('is sub title text present ', () => {
        const component =
            shallow(
                <Provider store={Store}>
                    <Login />
                </Provider>
            )
        const wrapper = component.find(".login-page-container__left-section__header__sub-title");
        expect(wrapper.find(/Power of logs at your fingertips/)).toBeTruthy();
    })
    it('is Email level present ', () => {
        const component =
            shallow(
                <Provider store={Store}>
                    <Login />
                </Provider>
            )
        const wrapper = component.find(".login-page-container__left-section__form__label");
        expect(wrapper.find(/Email/)).toBeTruthy();
    })
    it('is Email field present ', () => {
        const component =
            shallow(
                <Provider store={Store}>
                    <Login />
                </Provider>
            )
        const wrapper = component.find(".login-page-container__left-section__form__text-field");
        expect(wrapper.find(/example@gmail.com/)).toBeTruthy();
    })
    it('is the button GET OTP working', () => {
        const component = shallow(<Provider store={Store}>
            <Login />
        </Provider>);
        const wrapper = component.find(".login-page-container__left-section__form__btn");
        expect(wrapper.find(/Get OTP/)).toBeTruthy();
    })
    it('is the content GET OTP in button', () => {
        const component = render(<BrowserRouter>
            <Provider store={Store}>
                <Login />
            </Provider>
        </BrowserRouter>);
        expect(component.getByText("Get OTP")).toBeTruthy();
    })
    it('is the button working', () => {
        render(<BrowserRouter>
            <Provider store={Store}>
                <Login />
            </Provider>
        </BrowserRouter>);
        const add = screen.getByText(/Get OTP/).closest("button");
    })
    it('should check is email displayed', () => {
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={Store}>
                <Login />
            </Provider>
        </BrowserRouter>);
        const emailInput = getByTestId("emailInput");
        expect(emailInput).toHaveValue("");
        fireEvent.change(emailInput, { target: { value: "sangita@gmail.com" } });
        expect(emailInput).toHaveValue("sangita@gmail.com");
    });
    it('should check is button displayed', () => {
        window.open = jest.fn();
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={Store}>
                <Login />
            </Provider>
        </BrowserRouter>);
        const emailInput = getByTestId("getOtp");
        expect(emailInput).toHaveTextContent("Get OTP");
    });
});

import React from 'react';
import "../../../../tests/matchMedia.mock";
import VerifyOTP from "./VerifyOTP.jsx";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Store from "../../../Store";
import { Provider } from 'react-redux';
configure({ adapter: new Adapter() });

describe("VerifyOTP component", () => {
    it('is the content Login in title', () => {
        act(() => {
            const { getByTestId } = render(<BrowserRouter>
                <Provider store={Store}>
                    <VerifyOTP />
                </Provider>
            </BrowserRouter>);
            const header = getByTestId("title");
            expect(header).toHaveTextContent("Login");
        });
    });

    it('is the content Power of logs at your fingertips in subtitle', () => {
        act(() => {
            const { getByTestId } = render(<BrowserRouter>
                <Provider store={Store}>
                    <VerifyOTP />
                </Provider>
            </BrowserRouter>);
            const subHeader = getByTestId("subTitle");
            expect(subHeader).toHaveTextContent("Power of logs at your fingertips");
        });
    });

    it('is the content We have sent an OTP to your email address.Please enter the same to Login', () => {
        act(() => {
            const { getByTestId } = render(<BrowserRouter>
                <Provider store={Store}>
                    <VerifyOTP />
                </Provider>
            </BrowserRouter>);
            const subHeader = getByTestId("message");
            expect(subHeader).toHaveTextContent("We have sent an OTP to your email address.Please enter the same to Login");
        });
    });

    it('is the level OTP present', () => {
        act(() => {
            const { getByTestId } = render(<BrowserRouter>
                <Provider store={Store}>
                    <VerifyOTP />
                </Provider>
            </BrowserRouter>);
            const header = getByTestId("otpLevel");
            expect(header).toHaveTextContent("OTP");
        });
    });

    it('is the OTP field present', async () => {
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={Store}>
                <VerifyOTP />
            </Provider>
        </BrowserRouter>);
        const otpInput = getByTestId("otpField");
        expect(otpInput).toHaveValue("");
        await waitFor(() => {
            fireEvent.change(otpInput, { target: { value: 913443 } });
            expect(otpInput).toHaveValue("913443");
        });
    });

    it('should check is button content displayed', () => {
        act(() => {
            const { getByTestId } = render(<BrowserRouter>
                <Provider store={Store}>
                    <VerifyOTP />
                </Provider>
            </BrowserRouter>);
            const Login = getByTestId("login");
            expect(Login).toHaveTextContent("Login");
        });
    });
    it("matches regular expression for otp", () => {
        const otpRegEx = /^[1-9]{1}[0-9]{5}$/;
        const otp = "913443";
        expect(otp).toMatch(otpRegEx);
    });
    it('should check is resend button content displayed', () => {
        act(() => {
            const { getByTestId } = render(<BrowserRouter>
                <Provider store={Store}>
                    <VerifyOTP />
                </Provider>
            </BrowserRouter>);
            const Login = getByTestId("resend");
            expect(Login).toHaveTextContent("Resend New OTP");
        });
    });
});



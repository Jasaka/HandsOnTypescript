import React from "react";
import {render, fireEvent} from "@testing-library/react";
import DisplayText from "./DisplayText";
import "@testing-library/jest-dom/extend-expect";

describe("Test DisplayText", () =>{
    it('should render without crashing', () => {
        const {baseElement} = render(<DisplayText />);

        expect(baseElement).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        const { baseElement } = render(<DisplayText />);
        expect(baseElement).toMatchSnapshot();
    });

    it('should receive input text', () => {
        const testuser = "testuser";
        const {getByTestId} = render(<DisplayText />);
        const input = getByTestId("user-input");

        fireEvent.change(input, {target: {value: testuser}});

        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(testuser);
    });

    it('should show welcome message on click', () => {
        const testuser = "testuser";
        const msg = `Welcome to React Testing, ${testuser}`;
        const {getByTestId} = render(<DisplayText />);
        const input = getByTestId("user-input");
        const label = getByTestId("final-msg");

        fireEvent.change(input, {target: {value: testuser}});

        const btn = getByTestId("input-submit");

        fireEvent.click(btn);

        expect(label).toBeInTheDocument();
        expect(label.innerHTML).toBe(msg);
    });

});
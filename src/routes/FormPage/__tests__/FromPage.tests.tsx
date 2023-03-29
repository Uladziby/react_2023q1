/** @format */
import { FormPage } from "../FormPage";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("FormPage", () => {
	it("renders the component with form elements", () => {
		render(<FormPage />);
		expect(screen.getByPlaceholderText(/First name/i)).toBeInTheDocument();
		expect(screen.getByText(/last name/i)).toBeInTheDocument();

		expect(screen.getByTestId(/input-date/i)).toBeInTheDocument();
		expect(screen.getByTestId("select")).toBeInTheDocument();
		expect(screen.getByText(/female/i)).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
	});

	it("submits the form successfully", () => {
		render(<FormPage />);
		const firstNameInput = screen.getByPlaceholderText(/First name/i);
		const lastNameInput = screen.getByText(/last name/i);
		const birthDayInput = screen.getByTestId(/input-date/i);
		const select = screen.getByTestId("select");
		const submitButton = screen.getByRole("button", { name: /submit/i });
		const femaleRadio = screen.getByText(/female/i);

		userEvent.type(firstNameInput, "John");
		userEvent.type(lastNameInput, "Doe");
		fireEvent.change(select, { target: { value: "Norway" } });
		fireEvent.change(birthDayInput, { target: { value: "2022-03-28" } });
		fireEvent.click(femaleRadio);

		userEvent.click(submitButton);

		expect(screen.getByText(/Norway/i)).toBeInTheDocument();
		expect(screen.getByText(/Female/i)).toBeInTheDocument();
	});
});

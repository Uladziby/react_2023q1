/** @format */
import { ASelect } from "../ASelect";
import { render, fireEvent, screen } from "@testing-library/react";

describe("ASelect", () => {
	const props = {
		name: "test-name",
		onChange: jest.fn(),
		value: "Test value",
		options: ["Option 1", "Option 2", "Option 3"],
		error: "",
	};

	it("renders the label", () => {
		render(<ASelect {...props} />);
		expect(screen.getByLabelText("Select a country:")).toBeInTheDocument();
	});

	it("renders the select with the correct props", () => {
		render(<ASelect {...props} />);
		const select = screen.getByLabelText("Select a country:");
		expect(select).toBeInTheDocument();
		expect(select).toHaveAttribute("id", "country-select");
	});

	it("calls the onChange function when the select value changes", () => {
		render(<ASelect {...props} />);
		const select = screen.getByLabelText("Select a country:");
		fireEvent.change(select, { target: { value: "Option 2" } });
		expect(props.onChange).toHaveBeenCalledWith({ "test-name": "Option 2" });
	});

	it("renders the options correctly", () => {
		render(<ASelect {...props} />);
		expect(screen.getByText("Choose your country")).toBeInTheDocument();
		expect(screen.getByText("Option 1")).toBeInTheDocument();
		expect(screen.getByText("Option 2")).toBeInTheDocument();
		expect(screen.getByText("Option 3")).toBeInTheDocument();
	});

	it("does not render the error message when there is no error", () => {
		render(<ASelect {...props} />);
		expect(screen.queryByText("This field is required")).not.toBeInTheDocument();
	});
});

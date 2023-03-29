/** @format */
import { AInput } from "../AInput";
import { render, fireEvent, screen } from "@testing-library/react";

describe("AInput", () => {
	const props = {
		placeholder: "Test placeholder",
		label: "Test label",
		isDisabled: false,
		type: "text",
		className: "test-class",
		name: "test-name",
		onChange: jest.fn(),
		value: "Test value",
		error: "",
	};

	it("renders the input with the correct props", () => {
		render(<AInput {...props} />);
		const input = screen.getByPlaceholderText("Test placeholder");
		expect(input).toBeInTheDocument();
		expect(input).toBeEnabled();
		expect(input).toHaveAttribute("type", "text");
		expect(input).toHaveAttribute("name", "test-name");
		expect(input).toHaveValue("Test value");
	});

	it("calls the onChange function when the input value changes", () => {
		render(<AInput {...props} />);
		const input = screen.getByPlaceholderText("Test placeholder");
		fireEvent.change(input, { target: { value: "New value" } });
		expect(props.onChange).toHaveBeenCalledWith({ "test-name": "New value" });
	});

	it("renders the error message when there is an error", () => {
		render(<AInput {...props} error="This field is required" />);
		expect(screen.getByText("This field is required")).toBeInTheDocument();
	});

	it("does not render the error message when there is no error", () => {
		render(<AInput {...props} />);
		expect(screen.queryByText("This field is required")).not.toBeInTheDocument();
	});
});

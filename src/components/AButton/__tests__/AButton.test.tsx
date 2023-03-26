/** @format */
import { AButton } from "../AButton";
import { IAButtonProps } from "../type";
import { RenderResult, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("AButton", () => {
	const props: IAButtonProps = {
		variant: "primary",
		children: "Button",
		onClick: jest.fn(),
		isDisabled: false,
		size: "small",
		isRounded: true,
		type: "button",
	};

	let renderResult: RenderResult;

	renderResult = render(<AButton {...props} />);

	it("should render correctly", () => {
		const element = screen.getByRole(/button/i);

		expect(element).toBeInTheDocument();
		expect(element.innerHTML).toBe("Button");
	});

	it("action function should be invoked after click", () => {
		const element = screen.getByRole(/button/i);

		userEvent.click(element);
		expect(props.onClick).toHaveBeenCalledTimes(1);
	});

	it("should not react on click if disabled prop was passed", () => {
		renderResult.rerender(<AButton {...props} isDisabled />);

		const element = screen.getByRole(/button/i);

		expect(element).toBeDisabled();
		userEvent.click(element);
		expect(props.onClick).toHaveBeenCalledTimes(0);
	});

	it("handles property size correctly", () => {
		const element = screen.getByRole(/button/i);

		expect(element).toHaveStyle({ width: "143px", height: "48px" });
	});

	it("handles property type correctly", () => {
		const element = screen.getByRole(/button/i);

		expect(element).toHaveAttribute("type", "button");
	});
});

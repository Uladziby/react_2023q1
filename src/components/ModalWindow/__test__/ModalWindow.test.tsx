/** @format */
import { ModalWindow } from "../ModalWindow";
import { RenderResult, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ModalWindow", () => {
	const props = {
		onCloseHandler: jest.fn(),
		onBackHandler: jest.fn(),
		children: <div>Portal</div>,
	};
	let renderResult: RenderResult;

	beforeEach(() => {
		renderResult = render(<ModalWindow isShowModal={true} {...props} />);
	});

	it("modal shows with close button", () => {
		const { getAllByRole } = screen;

		const [closeButton, backButton] = getAllByRole(/button/i);

		userEvent.click(closeButton);
		userEvent.click(backButton);

		expect(props.children).toEqual(<div>Portal</div>);
		expect(props.onCloseHandler).toHaveBeenCalled();
		expect(props.onBackHandler).toHaveBeenCalled();
	});

	it("should be mounted with background and unmounted", () => {
		const modalRoot = document.createElement("div");
		modalRoot.setAttribute("id", "root");
		document.body.appendChild(modalRoot);

		renderResult.rerender(<ModalWindow isShowModal={true} {...props} withBackground />);

		expect(modalRoot).not.toBeEmptyDOMElement();
		renderResult.unmount();
		expect(modalRoot).toBeEmptyDOMElement();
	});
});

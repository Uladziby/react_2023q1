/** @format */
import { IFormPageState } from "../../types";
import { CardForm } from "../CardForm ";
import { render, screen } from "@testing-library/react";

describe("CardForm", () => {
	const props: IFormPageState = {
		firstName: "Ivan",
		lastName: "Ivanid",
		image: "https://example.com/image.png",
		country: "UA",
		birthDay: "01/01/1990",
		gender: "Male",
		errors: {},
	};

	it("renders the correct data in the CardForm component", () => {
		render(<CardForm data={props} />);
		expect(screen.getByTestId("ACard")).toHaveTextContent("Ivan Ivanid");
		expect(screen.getByTestId("ACard")).toHaveTextContent("Country : UA");
		expect(screen.getByTestId("ACard")).toHaveTextContent("Birthday : 01/01/1990");
		expect(screen.getByTestId("ACard")).toHaveTextContent("Gender : Male");
	});
});

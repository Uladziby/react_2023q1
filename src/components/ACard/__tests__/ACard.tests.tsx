/** @format */
import { ACard, ICard } from "../ACard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const mockData: ICard = {
	price: 1,
	title: "1",
	image: "1",
	id: "1",
	rating: { count: 1, rate: 1 },
};

test("render ACard", () => {
	render(
		<BrowserRouter>
			<ACard item={mockData} />{" "}
		</BrowserRouter>
	);

	const card = screen.getByTestId("ACard");

	expect(card).toBeInTheDocument();
});

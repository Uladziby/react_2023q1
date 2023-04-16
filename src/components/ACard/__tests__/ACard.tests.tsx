/** @format */
import { ACard } from "../ACard";
import { ICard } from "../type";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const mockData: ICard = {
  price: 1,
  title: "1",
  image: "1",
  id: 1,
  rating: { count: 1, rate: 1 },
  description: "dasdasd",
  category: "test",
};

test("render ACard", () => {
  render(
    <BrowserRouter>
      <ACard item={mockData} onShowModal={() => {}} />
    </BrowserRouter>
  );

  const card = screen.getByTestId("ACard");

  expect(card).toBeInTheDocument();
});

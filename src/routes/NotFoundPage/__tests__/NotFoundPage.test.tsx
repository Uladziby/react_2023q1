/** @format */
import NotFoundPage from "../NotFoundPage";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("NotFoundPage", () => {
  it("renders without crashing", () => {
    render(<NotFoundPage />);
  });

  it("renders an image with a valid source and alt text", () => {
    render(<NotFoundPage />);
    const image = screen.getByAltText("notfound");
    expect(image).toHaveAttribute("src", expect.stringContaining("404.png"));
    expect(image).toHaveAttribute("alt", "notfound");
  });

  it("renders the image with a width of 500", () => {
    render(<NotFoundPage />);
    const image = screen.getByAltText("notfound");
    expect(image).toHaveAttribute("width", "500");
  });
});

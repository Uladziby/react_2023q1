/** @format */
import App from "./App";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("render app", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);

	const app = screen.getByTestId("App");

	expect(app).toBeInTheDocument();
});

/** @format */
import "./App.css";
import Header from "./components/Header/Header";
import AboutPage from "./routes/AboutPage/AboutPage";
import { MainPage } from "./routes/MainPage/MainPage";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path={"/aboutus"} element={<AboutPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;

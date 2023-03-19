/** @format */
import { ACard } from "../../components/ACard/ACard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { StyledContainer } from "./MainPage.styles";
import { cards } from "./mock";
import React from "react";

export class MainPage extends React.Component {
	render() {
		return (
			<>
				<SearchBar onSearch={() => {}} />
				<StyledContainer>
					{cards.map((item) => (
						<ACard key={item.id} item={item} />
					))}
				</StyledContainer>
			</>
		);
	}
}

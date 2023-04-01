/** @format */
import { ReactComponent as ClearIcon } from "../../assets/icons/clear.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { StyledClearIcon, StyledInput, StyledSearchIcon, StyledWrapper } from "./SearchBar.styles";
import { SearchBarProps, SearchBarState } from "./type";
import { Component, SyntheticEvent, useEffect, useState } from "react";

export const SearchBar = ({ onSearch }: SearchBarProps) => {
	const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		onSearch(searchTerm);
	};

	const clearInputField = () => {
		setSearchTerm("");
		onSearch("");
	};

	useEffect(() => {
		return localStorage.setItem("searchTerm", searchTerm);
	});

	return (
		<StyledWrapper isOptionsVisible={false}>
			<StyledSearchIcon iconTitle={"Search"} type="submit" onClick={handleSubmit}>
				<SearchIcon />
			</StyledSearchIcon>
			<StyledInput
				type="text"
				placeholder={"insert a product"}
				disabled={false}
				value={searchTerm}
				onChange={handleInputChange}
			/>
			<StyledClearIcon iconTitle={"Search"} onClick={clearInputField}>
				<ClearIcon />
			</StyledClearIcon>
		</StyledWrapper>
	);
};

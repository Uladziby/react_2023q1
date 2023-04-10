/** @format */
import { ReactComponent as ClearIcon } from "../../assets/icons/clear.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { StyledClearIcon, StyledInput, StyledSearchIcon, StyledWrapper } from "./SearchBar.styles";
import { SearchBarProps } from "./type";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const SearchBar = ({ onSearch, onKeyPress }: SearchBarProps) => {
	const location = useLocation();
	const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || " ");

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
		return () => localStorage.setItem("searchTerm", searchTerm);
	}, [searchTerm, location.pathname]);

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
				onKeyUp={onKeyPress}
			/>
			<StyledClearIcon iconTitle={"Search"} onClick={clearInputField}>
				<ClearIcon />
			</StyledClearIcon>
		</StyledWrapper>
	);
};

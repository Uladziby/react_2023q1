/** @format */
import { ReactComponent as ClearIcon } from "../../assets/icons/clear.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { StyledClearIcon, StyledInput, StyledSearchIcon, StyledWrapper } from "./SearchBar.styles";
import { Component, FormEvent } from "react";

interface SearchBarProps {
	onSearch: (searchTerm: string) => void;
}

interface SearchBarState {
	searchTerm: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
	constructor(props: SearchBarProps) {
		super(props);
		this.state = {
			searchTerm: localStorage.getItem("searchTerm") || "",
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearInputField = this.clearInputField.bind(this);
	}

	handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ searchTerm: event.target.value });
	}

	handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		this.clearInputField();
	}

	clearInputField() {
		this.setState({ searchTerm: "" });
	}

	componentWillUnmount() {
		localStorage.setItem("searchTerm", this.state.searchTerm);
	}

	render() {
		return (
			<StyledWrapper isOptionsVisible={false}>
				<StyledSearchIcon iconTitle={"Search"}>
					<SearchIcon />
				</StyledSearchIcon>
				<StyledInput
					type="text"
					placeholder={"insert a product"}
					disabled={false}
					value={this.state.searchTerm}
					onChange={this.handleInputChange}
				/>
				<StyledClearIcon iconTitle={"Search"} onClick={this.clearInputField}>
					<ClearIcon />
				</StyledClearIcon>
			</StyledWrapper>
		);
	}
}

export default SearchBar;

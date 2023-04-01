/** @format */

export interface SearchBarProps {
	onSearch: (searchTerm: string) => void;
	onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	searchTerm?: string;
	setSearchTerm?: (searchTerm: string) => void;
}

export interface SearchBarState {
	searchTerm: string;
}

/** @format */
export interface ASelectProps {
	className?: string;
	options: string[];
	value: string;
	name: string;
	error?: string;
	onChange?: (option: IOption) => void;
}

export interface IOption {
	[x: string]: string;
}

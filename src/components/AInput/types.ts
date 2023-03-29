/** @format */
import { IOption } from "./../ASelect/type";

export interface AInputProps {
	type: string;
	name: string;
	placeholder?: string;
	label?: string;
	hasError?: boolean;
	isDisabled?: boolean;
	className?: string;
	value: string;
	error?: string;
	dataTestId?: string;
	onChange: (value: IOption) => void;
}

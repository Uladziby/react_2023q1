/** @format */
import { IOption } from "./../ASelect/type";

/** @format */

export interface RadioGroupProps {
	options: { label: string; value: string }[];
	name: string;
	value: string;
	error: string;
	onChange: (option: IOption) => void;
}

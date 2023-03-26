/** @format */

export interface RadioGroupProps {
	options: { label: string; value: string }[];
	name: string;
	onChange: (value: string) => void;
}

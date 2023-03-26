/** @format */
import { SyntheticEvent } from "react";

enum InputType {
	text = "text",
	date = "date",
	switcher = "checkbox",
}

export interface AInputProps {
	type: string;
	name: string;
	placeholder?: string;
	label?: string;
	hasError?: boolean;
	isDisabled?: boolean;
	className?: string;
	value: string;
	onChange: (ev: React.FormEvent<HTMLInputElement>) => void;
}

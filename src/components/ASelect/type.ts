/** @format */

export interface ASelectProps {
	className?: string;
	options: string[];
	onChange: (ev: React.FormEvent<HTMLInputElement>) => void;
}

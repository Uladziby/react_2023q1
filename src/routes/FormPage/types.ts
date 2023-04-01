/** @format */

export interface IFormPageState {
	firstName: string;
	lastName: string;
	country: string;
	birthDay: string;
	gender: string;
	image: string;
	errors: {
		[x: string]: string;
	};
}

export interface IFormErrors {
	firstName: string;
	lastName: string;
	country: string;
	birthDay: string;
	gender: string;
	image: string;
}

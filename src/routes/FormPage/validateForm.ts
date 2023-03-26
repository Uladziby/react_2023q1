/** @format */
import { IFormPageState } from "./types";

export const validateForm = (state: IFormPageState) => {
	let errors = {};

	// Validate first name
	if (state.firstName.trim() === "") {
		errors = { ...errors, firstName: "First name is required" };
	}

	// Validate last name
	if (state.lastName.trim() === "") {
		errors = { ...errors, lastName: "Last name is required" };
	}

	// Validate birth day
	if (state.birthDay.trim() === "") {
		errors = { ...errors, birthDay: "Birth day is required" };
	}

	// Validate country
	if (state.country.trim() === "") {
		errors = { ...errors, country: "Country is required" };
	}

	// Validate gender
	if (state.gender.trim() === "") {
		errors = { ...errors, gender: "Gender is required" };
	}

	return errors;
};

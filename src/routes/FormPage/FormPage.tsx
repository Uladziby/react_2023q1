/** @format */
import { AImageInput } from "../../components/AImageInput/AImageInput";
import { AInput } from "../../components/AInput/AInput";
import ARadioGroup from "../../components/ARadioGroup/ARadioGroup";
import { ASelect } from "../../components/ASelect/ASelect";
import { IOption } from "../../components/ASelect/type";
import { ATitle } from "../../components/ATitle/ATitle";
import {
	StyledButton,
	StyledContainer,
	StyledDateAInput,
	StyledForm,
	StyledHeader,
} from "./FormPage.styles";
import { IFormPageProps, IFormPageState } from "./types";
import { validateForm } from "./validateForm";
import { Component, FormEvent } from "react";

const countryOptions = ["Norway", "Sweden", "Estonia", "Finland", "Dennmark"];
const radioOptions = [
	{ label: "Female", value: "Female" },
	{ label: "Male", value: "Male" },
];
const initialState = {
	firstName: "",
	lastName: "",
	birthDay: "",
	country: "",
	gender: "",
	image: "",
	errors: {
		firstName: "",
		lastName: "",
		birthDay: "",
		country: "",
		gender: "",
		image: "",
	},
};

export class FormPage extends Component<IFormPageProps, IFormPageState> {
	state = { ...initialState };
	formSubmitted = {};
	isFormSubmitted = false;

	onSubmit(event: FormEvent) {
		event.preventDefault();
		const errors = validateForm(this.state);

		if (Object.keys(errors).length > 0) {
			this.setState({ errors });
			return;
		}

		this.isFormSubmitted = true;
		this.formSubmitted = { ...this.state, errors: {} };
		this.resetForm();
	}

	resetForm() {
		this.setState({ ...initialState });
	}

	handlerOnChange = (option: IOption) => {
		const newState: IFormPageState = {
			...this.state,
			...option,
		};

		this.setState(newState);
	};

	render() {
		return (
			<StyledContainer>
				<StyledHeader>
					<ATitle size={40} weight={500} lineHeight={47}>
						Add new user
					</ATitle>
				</StyledHeader>
				<StyledForm onSubmit={this.onSubmit.bind(this)}>
					<AInput
						type="text"
						name="firstName"
						placeholder="First name"
						label="First name"
						value={this.state.firstName}
						onChange={this.handlerOnChange.bind(this)}
						error={this.state.errors["firstName"]}
					/>
					<AInput
						type="text"
						name="lastName"
						label="Last name"
						placeholder="Last name"
						value={this.state.lastName}
						onChange={this.handlerOnChange.bind(this)}
						error={this.state.errors["lastName"]}
					/>
					<StyledDateAInput
						name="birthDay"
						label="Birth day*"
						type="date"
						onChange={this.handlerOnChange.bind(this)}
						value={this.state.birthDay}
						error={this.state.errors["birthDay"]}
					/>
					<ASelect
						name="country"
						value={this.state.country}
						onChange={this.handlerOnChange.bind(this)}
						options={countryOptions}
						error={this.state.errors["country"]}
					/>
					<ARadioGroup
						name="gender"
						options={radioOptions}
						onChange={this.handlerOnChange.bind(this)}
						value={this.state.gender}
						error={this.state.errors["gender"]}
					/>
					<AImageInput
						name="image"
						value={this.state.image}
						onChange={this.handlerOnChange.bind(this)}
					/>
					<StyledButton type="submit">Submit</StyledButton>
				</StyledForm>
				{this.isFormSubmitted && (
					<div>
						New user was added
						{JSON.stringify(this.formSubmitted)}
					</div>
				)}
			</StyledContainer>
		);
	}
}

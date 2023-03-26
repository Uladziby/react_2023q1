/** @format */
import { AImageInput } from "../../components/AImageInput/AImageInput";
import { AInput } from "../../components/AInput/AInput";
import ARadioGroup from "../../components/ARadioGroup/ARadioGroup";
import { ASelect } from "../../components/ASelect/ASelect";
import { ATitle } from "../../components/ATitle/ATitle";
import {
	StyledButton,
	StyledContainer,
	StyledDateAInput,
	StyledForm,
	StyledHeader,
} from "./FormPage.styles";
import React, { Component, FormEvent, SyntheticEvent } from "react";

export class FormPage extends Component {
	state = {
		firstName: "",
		lastName: "",
		birthDay: "",
		country: "",
		gender: "",
	};

	countryOptions = ["Norway", "Sweden", "Estonia", "Finland", "Dennmark"];
	radioOptions = [
		{ label: "Female", value: "Female" },
		{ label: "Male", value: "Male" },
	];

	onSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(this.state.firstName);
	}

	onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		console.log(event);
		this.setState({ firstName: value });
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
						onChange={this.onChangeHandler}
					/>
					<AInput
						type="text"
						name="lastName"
						label="Last name"
						placeholder="Last name"
						value={this.state.lastName}
						onChange={this.onChangeHandler}
					/>
					<StyledDateAInput
						name="birthDay"
						label="Birth day*"
						type="date"
						onChange={this.onChangeHandler}
						value={this.state.lastName}
					/>
					<ASelect onChange={this.onChangeHandler} options={this.countryOptions} />
					<ARadioGroup
						name="gender"
						options={this.radioOptions}
						onChange={this.onChangeHandler.bind(this)}
					/>
					<AImageInput />
					<StyledButton type="submit">Submit</StyledButton>
				</StyledForm>
			</StyledContainer>
		);
	}
}

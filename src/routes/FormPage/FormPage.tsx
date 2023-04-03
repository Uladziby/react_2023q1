/** @format */
import { AImageInput } from "../../components/AImageInput/AImageInput";
import { AInput } from "../../components/AInput/AInput";
import { ARadioGroup } from "../../components/ARadioGroup/ARadioGroup";
import { ASelect } from "../../components/ASelect/ASelect";
import { IOption } from "../../components/ASelect/type";
import { ATitle } from "../../components/ATitle/ATitle";
import { CardForm } from "./CardForm/CardForm ";
import {
	StyledButton,
	StyledCardContainer,
	StyledContainer,
	StyledDateAInput,
	StyledForm,
	StyledHeader,
} from "./FormPage.styles";
import { IFormPageState } from "./types";
import { validateForm } from "./validateForm";
import { FormEvent, useState } from "react";

const countryOptions = ["Norway", "Sweden", "Estonia", "Finland", "Dennmark"];
const radioOptions = [
	{ label: "Female", value: "Female" },
	{ label: "Male", value: "Male" },
];
const initialState: IFormPageState = {
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

export const FormPage = () => {
	const [stateForm, setStateForm] = useState<IFormPageState>({ ...initialState });
	const [userCards, setUserCard] = useState<IFormPageState[]>([]);

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		const errors = validateForm(stateForm);

		if (Object.keys(errors).length > 0) {
			setStateForm((prevState) => ({ ...prevState, errors }));
			return;
		}

		setUserCard([...userCards, stateForm]);
		resetForm();
	};

	const resetForm = () => {
		setStateForm({ ...initialState });
	};

	const handlerOnChange = (option: IOption) => {
		const newState: IFormPageState = {
			...stateForm,
			...option,
		};

		setStateForm(newState);
	};

	return (
		<StyledContainer>
			<StyledHeader>
				<ATitle size={40} weight={500} lineHeight={47}>
					Add new user
				</ATitle>
			</StyledHeader>
			<StyledForm onSubmit={onSubmit}>
				<AInput
					type="text"
					name="firstName"
					placeholder="First name"
					label="First name"
					value={stateForm.firstName}
					onChange={handlerOnChange}
					error={stateForm.errors["firstName"]}
				/>
				<AInput
					type="text"
					name="lastName"
					label="Last name"
					placeholder="Last name"
					value={stateForm.lastName}
					onChange={handlerOnChange.bind(this)}
					error={stateForm.errors["lastName"]}
				/>
				<StyledDateAInput
					name="birthDay"
					label="Birth day*"
					dataTestId="input-date"
					type="date"
					onChange={handlerOnChange}
					value={stateForm.birthDay}
					error={stateForm.errors["birthDay"]}
				/>
				<ASelect
					name="country"
					value={stateForm.country}
					onChange={handlerOnChange}
					options={countryOptions}
					error={stateForm.errors["country"]}
				/>
				<ARadioGroup
					name="gender"
					options={radioOptions}
					onChange={handlerOnChange}
					value={stateForm.gender}
					error={stateForm.errors["gender"]}
				/>
				<AImageInput name="image" value={stateForm.image} onChange={handlerOnChange} />
				<StyledButton type="submit">Submit</StyledButton>
			</StyledForm>
			<StyledCardContainer>
				{userCards.map((card) => (
					<CardForm datd-testid="cardForm" data={card} />
				))}
			</StyledCardContainer>
		</StyledContainer>
	);
};

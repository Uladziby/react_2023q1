/** @format */
import { ICard } from "../../../components/ACard/type";
import { StyledContainer } from "../MainPage.styles";
import { StyledList, StyledRow } from "./DetailInfoModal.styles";
import { DetailInfoModalProps } from "./type";

export const DetailInfoModal = ({ product }: DetailInfoModalProps) => {
	const { category, description, rating, price, title, id } = product;
	return (
		<StyledList>
			<StyledRow index={0}>Title: {title}</StyledRow>
			<StyledRow index={1}>Category: {category}</StyledRow>
			<StyledRow index={0}>Description: {description}</StyledRow>
			<StyledRow index={0}>Rate: {rating.rate}</StyledRow>
			<StyledRow index={1}>Count: {rating.count}</StyledRow>
			<StyledRow index={0}>Price: {price}</StyledRow>
		</StyledList>
	);
};

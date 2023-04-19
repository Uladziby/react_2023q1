/** @format */
import { StyledImg, StyledList, StyledRow } from './DetailInfoModal.styles';
import { DetailInfoModalProps } from './type';

export const DetailInfoModal = ({ product }: DetailInfoModalProps) => {
  const { category, description, rating, price, title, image } = product;
  return (
    <StyledList>
      <StyledRow index={0}>Title: {title}</StyledRow>
      <StyledRow index={1}>Category: {category}</StyledRow>
      <StyledRow index={0}>Description: {description}</StyledRow>
      <StyledRow index={0}>Rate: {rating.rate}</StyledRow>
      <StyledRow index={1}>Count: {rating.count}</StyledRow>
      <StyledRow index={0}>Price: {price}</StyledRow>
      <StyledRow index={1}>
        <StyledImg src={image} alt="product" width={200} height={80} />
      </StyledRow>
    </StyledList>
  );
};

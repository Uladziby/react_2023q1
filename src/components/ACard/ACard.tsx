/** @format */
import { ReactComponent as BasketIcon } from "../../assets/icons/cart.svg";
import { AButton } from "../AButton/AButton";
import styles from "./styles.module.css";
import { ICardProps } from "./type";

export const ACard = ({ item, onShowModal }: ICardProps) => {
	const { price, title, image, id, rating } = item;

	return (
		<div className={styles.custom_card} data-testid="ACard">
			<AButton className={styles.card_title} onClick={() => onShowModal(id)}>
				{title}
			</AButton>
			<button className={styles.btn_price}>
				<BasketIcon />
			</button>
			<div className={styles.block_imgs}>
				<img className={styles.img} src={image} alt="product" width={200} height={80} />
			</div>
			<div className={styles.block_btn}>
				<div className={styles.card_price}>Price : {price} $</div>
				<div className={styles.card_price}>Count : {rating.count}</div>
				<div className={styles.card_price}>Rate : {rating.rate}/5</div>
			</div>
		</div>
	);
};

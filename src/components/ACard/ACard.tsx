/** @format */
import { ReactComponent as BasketIcon } from "../../assets/icons/cart.svg";
import styles from "./styles.module.css";
import React from "react";
import { Link } from "react-router-dom";

export interface ICard {
	price: number;
	title: string;
	image: string;
	id: string;
	rating: { count: number; rate: number };
}

interface ICardProps {
	item: ICard;
}

export class ACard extends React.Component<ICardProps> {
	render() {
		const { price, title, image, id, rating } = this.props.item;

		return (
			<div className={styles.custom_card} data-testid="ACard">
				<Link className={styles.card_title} to={`detail/${id}`}>
					{title}
				</Link>
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
	}
}

/** @format */
import { ReactComponent as BasketIcon } from "../../assets/icons/cart.svg";
import styles from "./styles.module.css";
import { title } from "process";
import React from "react";
import { Link } from "react-router-dom";

export interface ICard {
	price: number;
	title: string;
	image: string;
	id: string;
}

interface ICardProps {
	item: ICard;
}
export class ACard extends React.Component<ICardProps> {
	render() {
		const { price, title, image, id } = this.props.item;
		return (
			<div className={styles.custom_card}>
				<Link className={styles.card_title} to={`detail/${id}`}>
					{title}
				</Link>
				<div className={styles.block_imgs}>
					<img className={styles.img} src={image} alt="product" width={200} height={100} />
				</div>
				<div className={styles.block_btn}>
					<div className={styles.card_price}>Price : {price} $</div>
					<button className={styles.btn_price}>
						<BasketIcon />
					</button>
				</div>
			</div>
		);
	}
}

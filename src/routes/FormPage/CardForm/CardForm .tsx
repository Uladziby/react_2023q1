/** @format */
import styles from "./styles.module.css";
import { ICardForm } from "./type";
import React from "react";

export class CardForm extends React.Component<ICardForm> {
	render() {
		const { firstName, lastName, image, country, birthDay, gender } = this.props.data;

		return (
			<div className={styles.custom_card} data-testid="ACard">
				<div className={styles.card_title}>
					{firstName} {lastName}
				</div>
				<div className={styles.block_imgs}>
					<img className={styles.img} src={image} alt="product" width={200} height={80} />
				</div>
				<div className={styles.block_btn}>
					<div className={styles.card_price}>Country : {country}</div>
					<div className={styles.card_price}>Birthday : {birthDay}</div>
					<div className={styles.card_price}>Gender : {gender}</div>
				</div>
			</div>
		);
	}
}

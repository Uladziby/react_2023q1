/** @format */

export interface ICard {
	price: number;
	title: string;
	image: string;
	id: number;
	rating: { count: number; rate: number };
	description: string;
	category: string;
}

export interface ICardProps {
	item: ICard;
	onShowModal: (id?: number) => void;
}

/** @format */

export interface ICard {
	price: number;
	title: string;
	image: string;
	id: string;
	rating: { count: number; rate: number };
}

export interface ICardProps {
	item: ICard;
}

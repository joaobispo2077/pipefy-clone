export interface ICard {
	id: number;
	content: string;
	labels?: string[];
	user?: string;
}

export interface ICardList {
	title: string;
	creatable: boolean;
	id: number;
	done?: boolean;
	cards: ICard[];
}

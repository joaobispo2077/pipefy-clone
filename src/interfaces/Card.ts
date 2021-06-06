export interface ICard {
	id: number;
	content: string;
	labels?: string[];
	user?: string;
}

export interface ICardList {
	title: string;
	creatable: boolean;
	done?: boolean;
	cards: ICard[];
}

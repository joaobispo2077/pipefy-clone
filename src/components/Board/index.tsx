import React, { useEffect, useState } from 'react';
import { ICardList } from '../../interfaces/Card';
import CardList from '../CardList';
import { Container } from './styles';

export default function Board() {
	const [cardlists, setCardLists] = useState<ICardList[]>();

	useEffect(() => {
		getCardLists().then((cardsLists) => setCardLists(cardsLists));
	}, []);

	const getCardLists = async (): Promise<ICardList[]> => {
		const response = await fetch('http://localhost:3000/api/cards');
		const cardsLists = response.json();
		return cardsLists;
	};

	return (
		<Container>
			{cardlists &&
				cardlists.map((cardList) => (
					<CardList key={cardList.title} cardList={cardList} />
				))}
		</Container>
	);
}

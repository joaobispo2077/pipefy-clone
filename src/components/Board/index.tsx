import React, { useEffect, useState, useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

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

	const onDragEnd = useCallback((result) => {
		const { source, destination, draggableId } = result;

		console.log(source, destination, draggableId);
	}, []);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Container>
				{cardlists &&
					cardlists.map((cardList, index) => (
						<CardList index={index} key={cardList.title} cardList={cardList} />
					))}
			</Container>
		</DragDropContext>
	);
}

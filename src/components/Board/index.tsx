import React, { useEffect, useState, useCallback } from 'react';
import {
	DragDropContext,
	DraggableLocation,
	DropResult,
} from 'react-beautiful-dnd';

import { ICardList } from '../../interfaces/Card';
import CardList from '../CardList';
import { Container } from './styles';

const isDropInActualPosition = (
	source: DraggableLocation,
	target: DraggableLocation,
): boolean => {
	const isSameIndex = source.index === target.index;
	const isSameColumn = source.droppableId === target.droppableId;

	const isSameCard = isSameIndex && isSameColumn;
	return isSameCard;
};

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

	const onDragEnd = useCallback((result: DropResult) => {
		const { source, destination, draggableId } = result;

		if (!destination) return;

		if (isDropInActualPosition(source, destination)) return;

		const draggedIndex = source.index;
		const droppedIndex = destination.index;

		console.log(cardlists, draggedIndex, droppedIndex);

		console.log(Date.now(), source, destination, draggableId);
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

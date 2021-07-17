import React, { useEffect, useState, useCallback } from 'react';
import {
	DragDropContext,
	DraggableLocation,
	DropResult,
} from 'react-beautiful-dnd';
import { ICardList } from '../../interfaces/Card';
import CardList from '../CardList';
import { Container } from './styles';
import CardsContext from '../../contexts/Cards';

interface IDropItem {
	cardIndex: number;
	columnIndex: number;
}

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

	const moveCard = (
		from: IDropItem,
		to: IDropItem,
		cards: ICardList[] | undefined,
	): void => {
		if (!cards) return;

		const newCardList = Array.from(cards);

		const dragged = newCardList[from.columnIndex].cards[from.cardIndex];

		newCardList[from.columnIndex].cards.splice(from.cardIndex, 1);

		newCardList[to.columnIndex].cards.splice(to.cardIndex, 0, dragged);

		console.log(newCardList);

		setCardLists(newCardList);
	};

	useEffect(() => {
		if (!cardlists)
			getCardLists().then((cardsLists) => setCardLists(cardsLists));
	}, [cardlists]);

	const getCardLists = async (): Promise<ICardList[]> => {
		const response = await fetch('http://localhost:3000/api/cards');
		const cardsLists = await response.json();
		return cardsLists;
	};

	const onDragEnd = useCallback(
		(result: DropResult) => {
			const { source, destination, draggableId } = result;

			if (!destination) return;

			if (isDropInActualPosition(source, destination)) return;

			console.log('draggableId!', draggableId);

			const draggedItem = {
				cardIndex: source.index,
				columnIndex: Number(source.droppableId),
			};

			const droppedItem = {
				cardIndex: destination.index,
				columnIndex: Number(destination.droppableId),
			};

			console.log('cardlists', cardlists);

			moveCard(draggedItem, droppedItem, cardlists);
		},
		[cardlists],
	);

	return (
		<CardsContext.Provider value={{ cardlists, moveCard }}>
			<DragDropContext onDragEnd={onDragEnd}>
				<Container>
					{cardlists &&
						cardlists.map((cardList, index) => (
							<CardList
								index={index}
								key={cardList.title}
								cardList={cardList}
							/>
						))}
				</Container>
			</DragDropContext>
		</CardsContext.Provider>
	);
}

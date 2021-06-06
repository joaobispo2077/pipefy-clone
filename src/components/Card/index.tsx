import React from 'react';
import { ICard } from '../../interfaces/Card';
import { Container, Label } from './styles';

import { useDrag } from 'react-dnd';
interface ICardItemProps {
	card: ICard;
}

const ItemType = {
	CARD: 'CARD',
};

export default function Card({ card }: ICardItemProps) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemType.CARD,
		item: { id: String(Math.random()), type: ItemType.CARD },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	return (
		<Container ref={drag} isDragging={isDragging}>
			<header>
				{card.labels &&
					card.labels.map((label) => <Label key={label} color={label} />)}
			</header>
			<p>{card.content}</p>
			{card.user && <img src={card.user} alt="User" />}
		</Container>
	);
}

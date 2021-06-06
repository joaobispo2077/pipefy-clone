import React from 'react';
import { ICard } from '../../interfaces/Card';
import { Container, Label } from './styles';

interface ICardItemProps {
	card: ICard;
}

export default function Card({ card }: ICardItemProps) {
	return (
		<Container>
			<header>
				{card.labels &&
					card.labels.map((label) => <Label key={label} color={label} />)}
			</header>
			<p>{card.content}</p>
			{card.user && <img src={card.user} alt="User" />}
		</Container>
	);
}

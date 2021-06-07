import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { ICard } from '../../interfaces/Card';
import { Container, Label, CloneContainer } from './styles';

interface ICardItemProps {
	card: ICard;
	index: number;
}

export default function Card({ card, index }: ICardItemProps) {
	return (
		<Draggable draggableId={String(card.id)} index={index}>
			{(provided, snapshot) => (
				<>
					<Container
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						isDragging={snapshot.isDragging}
					>
						<header>
							{card.labels &&
								card.labels.map((label) => <Label key={label} color={label} />)}
						</header>
						<p>{card.content}</p>
						{card.user && <img src={card.user} alt="User" />}
					</Container>
					{snapshot.isDragging && (
						<CloneContainer isDragging={snapshot.isDragging}>
							{' '}
							<header>
								{card.labels &&
									card.labels.map((label) => (
										<Label key={label} color={label} />
									))}
							</header>
							<p>{card.content}</p>
							{card.user && <img src={card.user} alt="User" />}
						</CloneContainer>
					)}
				</>
			)}
		</Draggable>
	);
}

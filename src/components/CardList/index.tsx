import { MdAdd } from 'react-icons/md';
import { Droppable } from 'react-beautiful-dnd';

import { ICardList } from '../../interfaces/Card';
import Card from '../Card';
import { Container } from './styles';

export interface ICardListProps {
	cardList: ICardList;
	index: number;
}

const CardList = ({ cardList }: ICardListProps) => {
	return (
		<Container done={cardList.done ? cardList.done : false}>
			<header>
				<h2>{cardList.title}</h2>
				{cardList.creatable && (
					<button type="button">
						<MdAdd size={24} color="#FFF" />
					</button>
				)}
			</header>
			<Droppable droppableId={String(cardList.title)}>
				{(provided) => (
					// isDraggingOver={snapshot.isDraggingOver}
					<ul ref={provided.innerRef}>
						{cardList.cards.map((card, index) => (
							<Card
								index={index}
								{...provided.droppableProps}
								key={card.id}
								card={card}
							/>
						))}
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
		</Container>
	);
};

export default CardList;

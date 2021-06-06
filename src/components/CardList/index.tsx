import { MdAdd } from 'react-icons/md';
import { ICardList } from '../../interfaces/Card';
import Card from '../Card';
import { Container } from './styles';

export interface ICardListProps {
	cardList: ICardList;
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
			<ul>
				{cardList.cards.map((card) => (
					<Card key={card.id} card={card} />
				))}
			</ul>
		</Container>
	);
};

export default CardList;

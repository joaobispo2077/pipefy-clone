import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { Container } from './styles';

export default function CardList() {
	return (
		<Container>
			<header>
				<h2>Tarefas</h2>
				<button type="button">
					<MdAdd size={24} color="#FFF" />
				</button>
			</header>
			<ul>
				<Card />
			</ul>
		</Container>
	);
}

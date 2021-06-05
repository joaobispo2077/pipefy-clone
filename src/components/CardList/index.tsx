import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

export default function CardList() {
	return (
		<Container>
			<header>
				<h2>Tarefas</h2>
				<button type="button">
					<MdAdd />
				</button>
			</header>
		</Container>
	);
}

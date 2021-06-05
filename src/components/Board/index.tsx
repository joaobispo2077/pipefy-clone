import React from 'react';
import CardList from '../CardList';
import { Container } from './styles';

export default function Board() {
	return (
		<Container>
			<CardList />
			<CardList />
			<CardList />
			<CardList />
		</Container>
	);
}

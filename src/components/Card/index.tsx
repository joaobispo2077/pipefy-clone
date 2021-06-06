import React from 'react';
import { Container, Label } from './styles';

export default function Card() {
	return (
		<Container>
			<header>
				<Label color="#19afdd" />
			</header>
			<p>lorem ipsum dolor sit amet</p>
			<img
				src="https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4"
				alt="User"
			/>
		</Container>
	);
}

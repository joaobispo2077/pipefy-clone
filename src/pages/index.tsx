import Head from 'next/head';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DragDropContext } from 'react-beautiful-dnd';

import Board from '../components/Board';

import GlobalStyle from '../components/GlobalStyle';

import Header from '../components/Header';
export default function Home() {
	return (
		<DndProvider backend={HTML5Backend}>
			<Head>
				<title>Pipefy</title>
				<meta name="description" content="Generated by create vue app" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<GlobalStyle />
			<Header />
			{/* <DragDropContext> */}
			<Board />
			{/* </DragDropContext> */}
		</DndProvider>
	);
}

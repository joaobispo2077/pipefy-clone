import styled from 'styled-components';

export const Container = styled.section`
	padding: 0 15px;
	height: 100%;
	flex: 0 0 320px;
	/* flex-grow: 0; -> Define o quanto, proporcionalmente, o componente pode esticar (aumentar a largura quando seu conteudo for maior do que o que ele comporta)
	flex-shrink: 0; -> Define o quanto, proporcionalmente, o elemento pode reduzir/encolher.
	flex-basis: 320; -> Define o tamanho base do componente (Se o flex direction do componente externo for ROW, ele definirá a largura base, se for column, ele definirá  a altura base) */

	& + section {
		border-left: 1px solid rgba(0, 0, 0, 0.05);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 42px;

		h2 {
			font-weight: 500;
			font-size: 16px;
			padding: 0 10px;
		}

		button {
			width: 42px;
			height: 42px;
			border-radius: 18px;
			background: #3b5bfd;
			border: 0;
			cursor: pointer;
		}
	}
	ul {
		margin-top: 30px;
	}
`;

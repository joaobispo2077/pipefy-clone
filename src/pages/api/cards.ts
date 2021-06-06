// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ICardList } from '../../interfaces/Card';

export default (req: NextApiRequest, res: NextApiResponse<ICardList[]>) => {
	res.status(200).json([
		{
			title: 'Tarefas',
			creatable: true,
			cards: [
				{
					id: 1,
					content: 'Gravar clone do Trello com Vue 3',
					labels: ['#19afdd'],
					user: 'https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4',
				},
				{
					id: 2,
					content: 'Estudar renderizações SPA, SSR e ISG',
					labels: ['#19afdd'],
					user: 'https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4',
				},
				{
					id: 3,
					content: 'Limpar o quarto',
					labels: ['#19afdd'],
					user: 'https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4',
				},
				{
					id: 4,
					content: 'Preparar projetos secretos"',
					labels: ['#a86f9c'],
					user: 'https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4',
				},
				{
					id: 5,
					content: 'Implementar testes unitários com Serverless Framework',
					labels: ['#a86f9c'],
					user: 'https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4',
				},
			],
		},
		{
			title: 'Fazendo',
			creatable: false,
			cards: [
				{
					id: 6,
					content:
						'Testando Serverless Framework com Dynamo DB, Athena e TypeScript',
					labels: [],
					user: 'https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4',
				},
			],
		},
		{
			title: 'Pausado',
			creatable: false,
			cards: [
				{
					id: 7,
					content: 'Organizar guarda roupas',
					labels: ['#19afdd'],
					user: 'https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4',
				},
				{
					id: 8,
					content: 'Ler Sapiens - uma breve história da humanidade',
					labels: ['#a86f9c'],
					user: 'https://avatars.githubusercontent.com/u/43768058?s=400&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4',
				},
				{
					id: 9,
					content: 'Pull Request para a he4rt',
					labels: [],
				},
			],
		},
		{
			title: 'Concluído',
			creatable: false,
			done: true,
			cards: [
				{
					id: 10,
					content: 'Estudar Clean Architecture',
					labels: [],
				},
				{
					id: 12,
					content: 'Treinar testes de integração',
					labels: ['#a86f9c'],
				},
				{
					id: 13,
					content: 'Primeira parte do projeto secreto',
					labels: ['#19afdd'],
				},
			],
		},
	]);
};

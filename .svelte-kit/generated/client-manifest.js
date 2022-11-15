export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

			export const server_loads = [];

			export const dictionary = {
	"/": [2],
	"/login": [3],
	"/posts": [4],
	"/posts/new": [7],
	"/posts/[id]": [5],
	"/posts/[id]/comments/[commentId]/replies/new": [6],
	"/register": [8]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};
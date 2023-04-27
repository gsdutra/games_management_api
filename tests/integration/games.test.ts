import supertest from 'supertest';
import app from '../../src/app';
import { cleanDb } from '../helpers';

const server = supertest(app);

beforeAll(async () => {
	await cleanDb();
})

describe('GET /games', () => {
	it('should answer with status 200 and array of games', async () => {
		const response = await server.get('/games');

		expect(response.status).toBe(200);
	});
})
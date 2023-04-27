import supertest from 'supertest';
import app from '../../src/app';
import { cleanDb } from '../helpers';
import faker from '@faker-js/faker';

const server = supertest(app);

beforeAll(async () => {
	await cleanDb();
})

describe('GET /consoles', () => {
	it('should answer with status 200 and array of consoles', async () => {
		const response = await server.get('/consoles');

		expect(response.status).toBe(200);
	});
})

describe('GET /consoles/:id', () => {
	it('should answer with status 200', async () => {
		const response = await server.get('/consoles');

		expect(response.status).toBe(200);
	});
})

describe('POST /consoles', () => {
	it('should answer with status 422 when an invalid or empty body is given', async () => {
		const response = await server.post('/consoles');

		expect(response.status).toBe(422);
	});

	it('should answer with status 201 when a valid body is given', async () => {
		const response = await server.post('/consoles').send({
			name: 'Playstation 5'
		});

		expect(response.status).toBe(201);
	});
})
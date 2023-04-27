import supertest from 'supertest';
import app from '../../src/app';

const server = supertest(app);

describe('GET /consoles', () => {
	it('should answer with status 200', async () => {
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
	it('should answer with status 200', async () => {
		const response = await server.get('/consoles');

		expect(response.status).toBe(201);
	});
})
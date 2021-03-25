import supertest from 'supertest';
import { getTestableApi } from '../../tests/utils';
import { authRouter } from './auth';

const app = getTestableApi('/auth', authRouter);
const api = supertest(app);

describe('auth router', () => {
  test('/login to return the user email', async () => {
    await api
      .post('/auth/login')
      .send({ email: 'f@mail.com', password: 'pass' })
      .expect(200, { user: 'f@mail.com' });
  });

  test('/login to return 400 if there is some missing data', (done) => {
    api
      .post('/auth/login')
      .send({ email: 'test@mail.com' })
      .expect(400, { error: 'Missing data' }, done);
  });
});

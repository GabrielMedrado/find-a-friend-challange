import fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import fastifyCookie from '@fastify/cookie';
import { env } from './env';
import { ZodError } from 'zod';

import { ongRoutes } from './http/modules/ong/routes';
import { petRoutes } from './http/modules/pets/routes';
import { usersRoutes } from './http/modules/users/routes';

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
});

app.register(fastifyCookie);

app.register(ongRoutes);
app.register(petRoutes);
app.register(usersRoutes);


app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation Error', issues: error.format() });
  }

  if (env.NODE_ENV !== 'prod') {
    console.error(error);
  } else {
    // TODO: Here we should log to an external tool like DataDog, NewRelic or Sentry
  }

  return reply.status(500).send({ message: 'Internal Server Error' });
});

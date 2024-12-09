import dotenv from 'dotenv';
import fastify from 'fastify';
import sensible from '@fastify/sensible';

dotenv.config({ path: '.env.local' });
dotenv.config();

const PORT = parseInt(process.env.PORT || '8080', 10);

const server = fastify({
  // logger: true,
});

server.register(sensible);

server.get('/', async (request, reply) => {
  reply.send({ hello: 'world' });
});

server.get('/ping', async (request, reply) => {
  return 'pong';
});

server.get('/pong', async (request, reply) => {
  return 'ping';
});

server.listen({ port: PORT }, async (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

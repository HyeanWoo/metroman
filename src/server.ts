import dotenv from 'dotenv';
import fastify from 'fastify';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';

dotenv.config({ path: '.env.local' });
dotenv.config();

const PORT = parseInt(process.env.PORT || '8080', 10);

const server = fastify({
  logger: true,
});

server.register(sensible);
server.register(cors, {
  origin: 'localhost:3000',
  methods: 'GET',
});

server.get('/', async (req, rep) => {
  rep.send({ hello: 'world' });
});

server.get('/ping', async (req, rep) => {
  return 'pong';
});

server.get('/pong', async (req, rep) => {
  return 'ping';
});

server.listen({ port: PORT }, async (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

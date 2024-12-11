import dotenv from 'dotenv';
import fastify from 'fastify';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import router from './routes';

dotenv.config({ path: '.env.local' });
dotenv.config();

const PORT = parseInt(process.env.PORT || '8080', 10);
const CROSS_ORIGIN_URL = process.env.CLIENT_URL || 'http://localhost:3000';

const server = fastify({
  logger: true,
});

server.register(sensible);
server.register(cors, {
  origin: [CROSS_ORIGIN_URL],
  methods: 'GET',
});

router(server);

server.listen({ port: PORT }, async (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

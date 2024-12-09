import fastify from 'fastify';

const server = fastify({
  // logger: true,
});

server.get('/', async (request, reply) => {
  reply.send({ hello: 'world' });
});

server.get('/ping', async (request, reply) => {
  return 'pong';
});

server.get('/pong', async (request, reply) => {
  return 'ping';
});

server.listen({ port: 8080 }, async (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

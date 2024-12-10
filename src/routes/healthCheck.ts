import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default async function (server: FastifyInstance) {
  server.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ hello: 'world' });
  });
}

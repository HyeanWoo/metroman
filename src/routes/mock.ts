import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { mockingPosition } from '../utils';

export default async function (server: FastifyInstance) {
  // server.get(
  //   '/mock-arrival',
  //   async (request: FastifyRequest, reply: FastifyReply) => {
  //     return {};
  //   },
  // );

  server.get(
    '/mock-position',
    async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send(mockingPosition('line4'));
    },
  );
}

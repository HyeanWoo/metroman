import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { cache, MetroLineKeyType } from '../utils';
import { mockingPositionApi } from '../services';

interface ParamsType {
  lineNumber: MetroLineKeyType;
}

export default async function (server: FastifyInstance) {
  server.get(
    '/metro-line/:lineNumber',
    async (
      request: FastifyRequest<{ Params: ParamsType }>,
      reply: FastifyReply,
    ) => {
      const { lineNumber } = request.params;
      const cachedData = cache.get(lineNumber);

      if (cachedData) {
        return cachedData;
      } else {
        reply.send(await mockingPositionApi(request.params.lineNumber));
      }
    },
  );
}

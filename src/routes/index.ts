import type { FastifyInstance } from 'fastify';
import mockHandler from './mock';
import healthCheckHandler from './healthCheck';

export default function (server: FastifyInstance) {
  healthCheckHandler(server);
  mockHandler(server);
}

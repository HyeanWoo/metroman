import type { FastifyInstance } from 'fastify';
import healthCheckHandler from './healthCheck';
import metroListHandler from './metroList';

export default function (server: FastifyInstance) {
  healthCheckHandler(server);
  metroListHandler(server);
}

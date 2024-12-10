import { FastifyInstance } from 'fastify';
import mockHandler from './mock';

export default function (server: FastifyInstance) {
  mockHandler(server);
}

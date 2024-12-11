import type { FastifyInstance } from 'fastify';
import cache from './cache';

export default async function (
  server: FastifyInstance,
  intervalId: NodeJS.Timeout,
) {
  try {
    server.log.info('Shutting down server...');
    clearInterval(intervalId);
    await server.close();
    cache.close();
    process.exit(0);
  } catch (err) {
    server.log.error(`Error during shutdown: ${err}`);
    process.exit(1);
  }
}

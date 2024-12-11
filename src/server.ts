import fastify from 'fastify';
import routerHandler from './routes';
import { PORT, REFRESH_INTERVAL } from './config';
import pluginHandler from './plugins';
import { cache, gracefulShutdown } from './utils';
import { mockingPositionApi } from './services';

const server = fastify({
  // logger: true,
});

pluginHandler(server);
routerHandler(server);

const start = () => {
  server.listen({ port: PORT }, async (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

start();

const externalApiIntervalId = setInterval(() => {
  mockingPositionApi('line4');
  console.log(cache.get('line4'));
}, REFRESH_INTERVAL);

const shutdownHandler = () => gracefulShutdown(server, externalApiIntervalId);

process.on('SIGINT', shutdownHandler);
process.on('SIGTERM', shutdownHandler);

import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import type { FastifyInstance } from 'fastify';
import { CROSS_ORIGIN_URL } from '../config';

export default async function (server: FastifyInstance) {
  server.register(sensible);
  server.register(cors, {
    origin: [CROSS_ORIGIN_URL],
    methods: 'GET',
  });
}

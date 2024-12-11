import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = parseInt(process.env.PORT || '8080', 10);
export const CACHE_TTL = parseInt(process.env.CACHE_TTL || '60', 10); // 초 단위
export const REFRESH_INTERVAL = parseInt(
  process.env.REFRESH_INTERVAL || '30000',
  10,
); // 밀리초 단위
export const CROSS_ORIGIN_URL =
  process.env.CLIENT_URL || 'http://localhost:3000';

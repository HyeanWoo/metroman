import NodeCache from 'node-cache';
import { CACHE_TTL } from '../config';

const cache = new NodeCache({ stdTTL: CACHE_TTL, checkperiod: CACHE_TTL * 2 });

export default cache;

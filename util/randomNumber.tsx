import { LOWEST_NUMBER, MAXIMUM_NUMBER } from '../constants';

/** Sorteia um numero entre min e max */
export function numberRandom(min = LOWEST_NUMBER, max = MAXIMUM_NUMBER): number {
  return Math.floor(Math.random() * (max - min) + min);
}
import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0,
  secs = 0,
  result = {};
  turns = 2 ** disksNumber - 1;
  secs = Math.floor(turns * 3600 / turnsSpeed);
  result = {
    turns: turns,
    seconds: secs,
  }
  return result; 
}

console.log(calculateHanoi(5, 4074));
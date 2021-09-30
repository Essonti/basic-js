import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // function repeater(str, options) {
  let result,
  addStr;  
  if (options.separator === undefined) {
  options.separator = "+";
  } 
  if (options.additionSeparator === undefined) {
  options.additionSeparator = "|";
  } 
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
    } 
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
    } 
  if (options.addition !== undefined) {
    addStr = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
    addStr = addStr.slice(0, addStr.length - options.additionSeparator.length);
    result = (str + addStr + options.separator).repeat(options.repeatTimes);
    result = result.slice(0, result.length - options.separator.length);
  } else {
    result = (str + options.separator).repeat(options.repeatTimes);
    result = result.slice(0, result.length - options.separator.length);
  }  
  return result;
}

// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }));
// // , 'TESTstrADD!');
// console.log(repeater('point', { repeatTimes: 3, separator: '&&&' })); 
// // 'point&&&point&&&point')); 
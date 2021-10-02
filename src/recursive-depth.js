import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
// class DepthCalculator { 
  
  calculateDepth(arr, depth = 1) {    
    if (arr === []) {
      return 1;
    }   
    if (arr === undefined) {
      return 0;
    }
    for (let el of arr) {      
      if (Array.isArray(el)) {
        
        depth += 1;
        arr = arr.flat();
        console.log (el);
        console.log (arr);
        return this.calculateDepth(arr, depth);			
      } 
  }
  return depth;
  }
}

// const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([1, 2, 3, [4, [2, 3], 5], [5, [[]], 2]]));
// console.log(depthCalc.calculateDepth([]));
// console.log(depthCalc.calculateDepth());
// => 2
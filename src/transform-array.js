import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  const index = 0;
  
    
      if (!Array.isArray(arr)) {       
    
      throw new Error ("\'arr\' parameter must be an instance of the Array!");
    }
    
    let transArr = [];
    for (let i = 0; i < arr.length; i++) {
      
      
      if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
        transArr.splice(transArr.length - 1, 1);
      } 
      if (arr[i] === '--double-next') {
        if (i !== arr.length - 1) {
          transArr.push(arr[i + 1]);
        } 
      }
      if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
        if (i !== 0) {
          transArr.push(arr[i - 1]);
        } 
      }
      if (typeof arr[i] === "number") {transArr.push(arr[i]);}
      if (arr[i] === '--discard-next') {
        if (i !== arr.length - 1) {
          i++;      
        } 
      } 
    }
    return transArr;
  }


//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
/*console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));
console.log(transform(3)),
console.log(transform(3.312312)),
console.log(transform(false)),
console.log(transform(null)),
console.log(transform(undefined)),
console.log(transform({ 'foo': 'bar' }))*/


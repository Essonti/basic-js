import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {  
    getLength() {
      return this.chain.length;
    },
    addLink(value) {
      if (this.chain === undefined) {
      this.chain = ['( ' + value + ' )~~'];
      } else {this.chain.push('( ' + value + ' )~~');}      
      return this;
    },    
    removeLink(position) {
      if (position <= 0 || position >= this.chain.length || isNaN(position)) {
        delete this.chain;
        throw new Error ("You can\'t remove incorrect link!");
      } else {
      this.chain.splice(position - 1, 1);
      return this;
      }
    },    
    reverseChain() {
      if (this.chain) {
        this.chain.reverse();
      }      
      return this;
    },    
    finishChain() {
      let chain2 = this.chain.join('').slice(0, -2);
      delete this.chain;
      return chain2;
    }
};
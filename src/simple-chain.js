import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  //let chainMaker = {
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


//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));
//console.log(chainMaker.addLink('GHI').addLink(null));
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()); //'( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()); //'( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
//console.log(chainMaker.chain);
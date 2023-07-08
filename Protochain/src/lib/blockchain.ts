
import Block from "./block";

    /**
    * Blockchain class
    */
export default class Blockchain{
    blocks:Block[];

    /**
    * Creates a new blockchain
    */
    constructor(){
        this.blocks = [new Block(0, "genesis")];
    }



}




// const block1 = new Block(1, "123212312");

// block1.hash = "";
// block1.index = 3;

// console.log(block1.isValid())

// const x = 3;
// console.log(x)
// console.log(x*2)
// console.log(x*5)

// function somar(a :number,b:number):number{
//     return a + b
// }

// console.log(somar(2,5))
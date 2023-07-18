import Validation from "./validation";
import Block from "./block";

    /**
    * Blockchain class
    */
export default class Blockchain{
    blocks:Block[];
    nextIndex: number = 0;

    /**
    * Creates a new blockchain
    */
    constructor(){
        this.blocks = [new Block({
            index:this.nextIndex,
            previousHash: "",
            data: "Genesis Block"
        } as Block)];
        this.nextIndex++;
    }

    getLastBlock(): Block {
        return this.blocks[this.blocks.length -1]
    }

    addBlock(block:Block): Validation {
        const lastBlock = this.getLastBlock();

        const validation = block.isValid(lastBlock.hash, lastBlock.index);
        if(!validation.success)
            return new Validation(false, `Invalid block. ${validation.message}`)

        this.blocks.push(block);
        this.nextIndex++;
        return new Validation();
    }

    getBlock(hash: string) : Block | undefined {

        return this.blocks.find( b => b.hash === hash);
    }

    isValid(): Validation {
        for (let i = this.blocks.length - 1 ; i>0; i--){
            const currentBlock = this.blocks[i];
            const previousBlock = this.blocks[i-1];
            const validation = currentBlock.isValid(previousBlock.hash, previousBlock.index);
            if (!validation.success) 
            return new Validation(false, `Invalid block #${currentBlock.index}: + ${validation.message}`);
        }
        return new Validation();
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
import Validation from "../validation";

/**
 * Mocked block class
 */
export default class Block {
    index: number;
    hash: string;
    previousHash:string;
    timestamp:number;
    data:string;

    /**
     * Creates a new mock block
     * @param block  The mock block data
     */
    constructor(block?: Block){
        this.index = block?.index || 0;
        this.previousHash = block?.previousHash || "";
        this.timestamp = block?.timestamp || Date.now();
        this.data = block?.data || "";
        this.hash = block?.hash || this.getHash();
    }

    getHash():string{
        return this.hash || "abc";
    }

    /**
     * Validates the mock block
     * @returns Returns if the mock block is valid
     */
    isValid(previousHash:string, previousIndex: number): Validation {
        if (!previousHash || previousIndex || this.index <0)
            return new Validation(false, "Invalid mock block.");

        return new Validation();
    }
}
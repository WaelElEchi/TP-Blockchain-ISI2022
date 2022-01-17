const SHA256 = require("crypto-js/sha256");

class Block {
  Constructor(data, previousHash) {
    this.data = data;
    this.timestamp = Date.now();
    this.previousHash = previousHash;
    this.hash = this.getHash();
  }

  getHash() {
    return SHA256(
      this.previousHash + this.timestamp + JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.blockchain = [new Block("Genesis Block", "")];
  }
  getLastBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  createBlock(data) {
    this.blockchain.push(new Block(data, this.getLastBlock().hash));
  }
}

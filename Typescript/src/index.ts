import * as fs from 'fs'
import * as proto from './proto'

const blake2b = require('blake2b')
const merkle = require('merkle-lib')

function blake2b_256(data: Uint8Array): Uint8Array {
    return blake2b(32).update(data).final('binary')
}

function equal(a: Uint8Array, b:Uint8Array) {
    if(a.length != b.length) {return false}
    for(let i =0; i<a.length; i++) {
        if(a[i] != b[i]) {return false}
    }
    return true
}

let genesisData = fs.readFileSync('../genesis.dat')

let genesisBlock = proto.Block.decode(genesisData)

console.log('\n\n<txs>')
for (var i = 1; i < genesisBlock.txs.length; i++) {
    console.log(`Tx ${i}:`)
    console.log(`to:\t${Buffer.from(genesisBlock.txs[i].to).toString('hex')}`)
    console.log(`amount:\t${Number(genesisBlock.txs[i].amount).toLocaleString('ko-KR')}`)
    console.log(`sign:\t${Buffer.from(genesisBlock.txs[i].signature).toString('hex')}`)
    console.log(`r:\t${genesisBlock.txs[i].recovery}`)
    console.log()
}

console.log('<Block Header>')
console.log(`Merkle Root:\t${Buffer.from(genesisBlock.header.merkleRoot).toString('hex')}`)
console.log(`State Root:\t${Buffer.from(genesisBlock.header.stateRoot).toString('hex')}`)
console.log(`Difficulty:\t${genesisBlock.header.difficulty}`)
console.log(`Timestamp:\t${genesisBlock.header.timeStamp} (${(new Date(Number(genesisBlock.header.timeStamp))).toLocaleString()})`)


let txHashes: Uint8Array[] = []
genesisBlock.txs.forEach((tx) => {
    let encodedTx = proto.Tx.encode(tx).finish()
    let txHash = blake2b_256(encodedTx)
    txHashes.push(txHash)
})
let merkleTree = merkle(txHashes, blake2b_256)
let merkleRoot = merkleTree[merkleTree.length-1]
if(equal(merkleRoot, genesisBlock.header.merkleRoot)) {
    console.log("Merkle root verfied")
} else {
    console.log("Merkle root failed verification")
}

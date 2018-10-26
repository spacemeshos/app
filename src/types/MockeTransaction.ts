interface ITransaction  { 
    number: string,
    hash: string,
    parentHash: string,
    nonce: string,
    sha3Uncles: string,
    logsBloom: string,
    transactionsRoot: string,
    stateRoot: string,
    miner: string,
    difficulty: string,
    totalDifficulty:  string,
    extraData: string,
    size:  string, 
    gasLimit: string,
    gasUsed: string,
    timestamp: string,
}

export default ITransaction;

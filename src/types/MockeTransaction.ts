interface ITransaction  { 
    blockHash: string;
    blockNumber: number;
    chainId?: string; 
    condition?: string;
    creates?: string;
    from: string;
    gas: number;
    gasPrice: number;
    hash: number;
    input: string;
    nonce: number;
    publicKey: string;
    r: string;
    raw: string;
    s: string;
    standardV: string;
    to: string;
    transactionIndex: number;
    v: string;
    value: number;
}

export default ITransaction;

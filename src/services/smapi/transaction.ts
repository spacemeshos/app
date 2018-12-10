export interface ITransaction {
    // serielized transaction data - hex
    txData: string;

    // signed txData when tx is sigend
    signature?: string;

    // hex string of user public address
    address: string;
}


export enum TransactionStatus {
    Pending, // not on mesh yet
    OnMesh, // on a mesh layer that might be reversed
    Conirmed, // updated the state in an irreverisble layer
}

export class TransactionResult {
    public txHash: string;
    public result: boolean;
}

import { Transaction, TransactionStatus } from '../types';

/**
 * SpaceMesh api
 * @description Spacemesh api 
 */
export interface ISpacemeshApi {
    postTransaction(tx: Transaction): Promise<boolean>;
    getAddressBalance(address: string): Promise<number>;
    getAddressFromTransaction(tx: Transaction): Promise<string>;
    buySMCFromExchange(exchangeId: string): Promise<boolean>;
    getCurrentSMCPrice(): Promise<number>;
    getSMCfromTestNetTap(): Promise<boolean>;
    getTransactionStatus(txid: string): Promise<TransactionStatus>;
}

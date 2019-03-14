import { ITransaction, MockData} from '../types';

/**
 * SpaceMesh api
 * @description Spacemesh api 
 */
export interface ISpacemeshMockApi {
    boradCastTransaction(tx: ITransaction, txhash: string): Promise<MockData.IBroadCastTransactionResponse>;
    getAddressBalance(address: string): Promise<MockData.IGetAddressBalanceResponse>;
    getTransactionFromAddress(address: string): Promise<MockData.IGetTransactionFromAddressResponse>;
    getTransactionFromHash(txhash: string): Promise<MockData.IGetTransactionFromHashResponse>;
    buySMCFromExchange(exchangeId: string, pair: string, quantity: number, maxprice: number): Promise<MockData.IBuySMCFromExchange>;
    getCurrentSMCPrice(exchangeId: string, pair: string): Promise<MockData.IGetCurrentSMCPriceResponse>;
    getSMCfromTestNetTap(amount: number): Promise<MockData.IGetSMCfromTestNetTap>;
    getTransactionStatus(txhash: string): Promise<MockData.IGetTransactionStatus>;
}

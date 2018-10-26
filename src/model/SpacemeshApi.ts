import { ITransaction, MockData} from '../types';

/**
 * SpaceMesh api
 * @description Spacemesh api 
 */
export interface ISpacemeshApi {
    boradCastTransaction(tx: ITransaction): Promise<MockData.IBroadCastTransactionResponse>;
    getAddressBalance(address: string): Promise<MockData.IGetAddressBalanceResponse>;
    getAddressFromTransaction(txhash: string): Promise<MockData.IGetAddressFromTransactionResponse>;
    buySMCFromExchange(exchangeId: string, pair: string, quantity: number, maxprice: number): Promise<MockData.IBuySMCFromExchange>;
    getCurrentSMCPrice(exchangeId: string, pair: string): Promise<MockData.IGetCurrentSMCPriceResponse>;
    getSMCfromTestNetTap(amount: number): Promise<MockData.IGetSMCfromTestNetTap>;
    getTransactionStatus(txhash: string): Promise<MockData.IGetTransactionStatus>;
}

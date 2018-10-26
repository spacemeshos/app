import TransactionStatus from './TransactionStatus';
import ITransaction from './MockeTransaction';

interface IResponse {
    jsonrpc: string;
    params:any[],
    id: number;
}

export interface IBroadCastTransactionResponse extends IResponse {
    result: string; 
}

export interface IGetAddressBalanceResponse extends IResponse {
    result: string;
}

export interface IGetTransactionFromAddressResponse extends IResponse {
    result: string[]; 
}

export interface IGetTransactionFromHashResponse extends IResponse {
    result: ITransaction;
}

export interface IGetAddressFromTransactionResponse extends IResponse {
    result: string; 
}

export interface IBuySMCFromExchange extends IResponse {
    result: Array<{
                offerId: string,
                offerDate: string,
                price: number,
                quantity: number,
    }>;
}

export interface IGetCurrentSMCPriceResponse extends IResponse {
    result: number;
}

export interface IGetSMCfromTestNetTap extends IResponse {
    result: boolean;
}

export interface IGetTransactionStatus extends IResponse {
    result: TransactionStatus;
}

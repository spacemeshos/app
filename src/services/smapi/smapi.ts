import {ILayer} from "./layer"
import {IProvider} from "./provider"
import {ITransaction, TransactionResult} from "./transaction"
import {IUtils} from "./utils"
import {BigNumber} from 'bignumber.js';

export interface ISpacemeshApi {

    // Returns the API version
    Version(): Promise<string>;

    // Returns the API Utils object
    // Utils(): Promise<IUtils>;

    // Sets a provider. A provider provides the spacemesh api over a connection
    SetProvider(IProvider): Promise<boolean>;

    // Get the current provider if one is set, nil otherwise
    GetProvider(): Promise<IProvider | null>;

    // Returns the provider version
    GetProviderVersion(): Promise<string>;

    // Gets the provider given by the contexst that can be set
    GetGivenProvider(): Promise<IProvider>;

    // Returns false if mesh is not yet ready for queries e.g it is still syncing
    IsReady(): Promise<boolean>;

    // Returns the current mesh layer info
    GetLatestLayerNumber(): Promise<number>;

    // Returns the latest irreverisble mesh layer number
    GetLatestIrreversibleLayerNumber(): Promise<number>;

    // Gets an account balance
    GetBalance(account: string, layer: ILayer): Promise<BigNumber>;

    // Get the transactions count for this account. e.g. account nonce
    GetTransactionsCount(account: string, layer: ILayer): Promise<number>;

    // send a signed transaction, returns tx hash
    SendSignedTransaction(tx:ITransaction): Promise<TransactionResult>

    // Gets a transaction from the blockmesh (Tx will include layer number and whether it is reversible or not)
    GetTransaction(txHash: string): Promise<TransactionResult>;

    // Subscribe a callback to recieve tx status changes
    SubscribeToTxStatus(txHash: string, callback: (TransactionStatus) => void ) : Promise<boolean>;
    UnsubscribeFromTxStatus(txHash: string): Promise<boolean>;

    // Subsribe to get called back when a transaction for the user is on the mesh
    SubscribeToIncomingTxs(account: string, callback: (TransactionStatus) => void ) : Promise<boolean>;

    // Unbsuscribe from incoming transactions for the user
    UnsubscribeFromIncomingTxs(account: string): Promise<boolean>;

    // Returns SMC usd exchange rate via a data oracle
    GetSmcUsdExchangeRate(): Promise<number>;

}

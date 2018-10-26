import * as React from 'react';
import { ISpacemeshApi } from '../../model';
import { ITransaction, TransactionStatus, MockData} from 'src/types';

interface IProps extends ISpacemeshApi{
    apiReady: boolean;
}

interface IState {
    connectedToApi: boolean;
}

const SpacemeshApiClientMock = <P extends IProps>(Component: React.ComponentType<P>) => {
    return class SpacemeshApiClient extends React.Component<P & IProps, IState> implements ISpacemeshApi {
        constructor(props: P & IProps) {
            super(props);
            this.state = {
                connectedToApi: false,
            }
        }

        public componentDidMount() {
            this.connectSpacemeshApiClient();
        }

        public render() {

            return <Component
            {...this.props} 
            apiReady = {this.state.connectedToApi}
            boradCastTransaction = {this.boradCastTransaction}
            getAddressBalance = {this.getAddressBalance}
            getAddressFromTransaction = {this.getAddressFromTransaction}
            buySMCFromExchange = {this.buySMCFromExchange}
            getCurrentSMCPrice = {this.getCurrentSMCPrice}
            getSMCfromTestNetTap = {this.getSMCfromTestNetTap}
            getTransactionStatus = {this.getTransactionStatus}
            />;
        }

        /**
         * Broadcast a transaction to the Spacemesh network
         * @param tx raw transaction to broadcast
         * @returns transactions hash
         */
        public boradCastTransaction = (tx: ITransaction): Promise<MockData.IBroadCastTransactionResponse> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        id:1,
                        jsonrpc: '1.0',
                        params: [tx],
                        result: '0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331'
                    });
                }, 2000);
            });
        }

        /**
         * Get SMC balance of an address
         * @param address
         * @returns amount of SMC in address
         */
        public getAddressBalance = (address: string): Promise<MockData.IGetAddressBalanceResponse> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        id: 1,
                        jsonrpc: '1.0',
                        params:[address],
                        result: '0x0234c8a3397aab58',
                    });
                }, 2000);
            });
        }

        /**
         * Get address from transaction
         * @param txhash the transaction id
         * @returns the senders address of the transaction
         */
        public getAddressFromTransaction = (txhash: string): Promise<MockData.IGetAddressFromTransactionResponse> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        id: 1,
                        jsonrpc: '1.0',
                        params:[txhash],
                        result: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
                    });
                }, 2000);
            });
        }

        /**
         * Buy SMC from exchange
         * @param exchangeId the exchange we want to query for deals
         * @param pair the currency we want to buy SMC for
         * @param quantity the amount of SMC we want to buy
         * @param maxprice the maximum we are willing to pay
         * @return the price of SMC in the currency we queried for
         */
        public buySMCFromExchange = (exchangeId: string, pair: string, quantity: number, maxprice: number): Promise<MockData.IBuySMCFromExchange> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        id: 1,
                        jsonrpc: '1.0',
                        params: [exchangeId, pair, quantity, maxprice],
                        result: [
                            {
                                quantity,
                                offerId:'ff2825ec-d939-11e8-8801-f2801f1b9fd1',
                                offerDate: `${new Date().getMilliseconds()}`,
                                price: 12,
                            }
                        ]
                    });
                }, 2000);
            });
        }

        /**
         * Get Current SMC Price
         * @param exchangeId the exchange we want to query for the current price
         * @param pair the currency we want to buy SMC for
         * @returns the best price found on the exchange
         */
        public getCurrentSMCPrice = (exchangeId: string, pair: string): Promise<MockData.IGetCurrentSMCPriceResponse> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        id: 1,
                        jsonrpc: '1.0',
                        params: [exchangeId, pair],
                        result: 24
                    });
                }, 2000);
            });
        }

        /**
         * Get SMC from testnet tap
         * @param amout the desired amount of SMC
         * @returns a boolean indicating if successfully requested funds
         */
        public getSMCfromTestNetTap = (amount: number): Promise<MockData.IGetSMCfromTestNetTap> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        id: 1,
                        jsonrpc: '1.0',
                        params: [amount],
                        result: true,
                    });
                }, 2000);
            });
        }

        /**
         * Gets the current status of a transaction by its transaction hash
         * @param txhash transaction hash
         * @returns the status of the transaction
         */
        public getTransactionStatus = (txhash: string): Promise<MockData.IGetTransactionStatus> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        id: 1,
                        jsonrpc: '1.0',
                        params: [txhash],
                        result: TransactionStatus.Success,
                    })
                }, 2000);
            })
        }

        /**
         * Connect to Spacemesh api
         */
        private connectSpacemeshApiClient = async () => {
            await new Promise(resolve => {
                setTimeout(() => {
                    this.setState(prev => ({connectedToApi: !prev.connectedToApi}))
                    resolve()
                }, 2000);
            });
        }
    }
}

export default SpacemeshApiClientMock;

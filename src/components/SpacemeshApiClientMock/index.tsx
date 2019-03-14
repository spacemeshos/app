import * as React from 'react';
import { ISpacemeshMockApi } from '../../model';
import { ITransaction, TransactionStatus, MockData} from 'src/types';

interface IProps extends ISpacemeshMockApi {
    apiReady: boolean;
}

interface IState {
    connectedToApi: boolean;
}

const SpacemeshApiClientMock = <P extends IProps>(Component: React.ComponentType<P>) => {
    return class SpacemeshApiClient extends React.Component<P & IProps, IState> implements ISpacemeshMockApi {
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
            getTransactionFromAddress = {this.getTransactionFromAddress}
            buySMCFromExchange = {this.buySMCFromExchange}
            getCurrentSMCPrice = {this.getCurrentSMCPrice}
            getSMCfromTestNetTap = {this.getSMCfromTestNetTap}
            getTransactionStatus = {this.getTransactionStatus}
            />;
        }

        /**
         * Broadcast a transaction to the Spacemesh network
         * @param tx raw transaction to broadcast
         * @param hash the transaction hash. 
         * @returns transactions hash
         */
        public boradCastTransaction = (tx: ITransaction, txhash: string): Promise<MockData.IBroadCastTransactionResponse> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        id:1,
                        jsonrpc: '1.0',
                        params: [tx],
                        result: txhash, /** we let the user set this, as this is mock data */
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
         * Get all transactions sent by an address
         * @param address account address
         * @returns all transactions sent by address
         */
        public getTransactionFromAddress = (address: string): Promise<MockData.IGetTransactionFromAddressResponse> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                            id: 1,
                            jsonrpc: '1.0',
                            params:[address],
                            result: ['0x130012017c9d75e66a5aff3895aebceaaa6a43887b3f466aa73cc0e5edeea745', 
                            '0xaa12d099e33eccacb71d4c7b27bffa1ca2504897fe59aa5784bfdfabd363f5b9',
                            '0xd9a2d6ac3355a03482da887b6f43083423fb8b9b2d9def1d9cfa330aad6dc886'],
                        }
                    );
                }, 2000);
            });
        }

        /**
         * Get a transaction by its hash
         * @param txhash transactions hash 
         * @returns full transaction
         */
        public getTransactionFromHash = (txhash: string): Promise<MockData.IGetTransactionFromHashResponse> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                            id: 1,
                            jsonrpc: '1.0',
                            params:[txhash],
                            result: {                                                    
                                number: "0x1b4",
                                hash: "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
                                parentHash: "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
                                nonce: "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",
                                sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
                                logsBloom: "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
                                transactionsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
                                stateRoot: "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
                                miner: "0x4e65fda2159562a496f9f3522f89122a3088497a",
                                difficulty: "0x027f07",
                                totalDifficulty:  "0x027f07",
                                extraData: "0x0000000000000000000000000000000000000000000000000000000000000000",
                                size:  "0x027f07", 
                                gasLimit: "0x9f759",
                                gasUsed: "0x9f759",
                                timestamp: "0x54e34e8e"
                            }
                        }
                    );
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

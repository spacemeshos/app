import * as React from "react";
import { ISpacemeshApi } from '../../model';
import { Transaction, TransactionStatus } from 'src/types';

interface IProps {

}

interface IState {
    connectedToApi: boolean;
}

const SpacemeshApiClientMock = <P extends object>(Component: React.ComponentType<P>) => {
    return class SpacemeshApiClientMock extends React.Component<P & IProps, IState> implements ISpacemeshApi {
        constructor(props: P & IProps) {
            super(props);
            this.state = {
                connectedToApi: false,
            }
        }

        /**
         * Broadcast a transaction to the Spacemesh newwork.
         */
        public postTransaction = (tx: Transaction): Promise<boolean> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(true);
                }, 2000);
            });
        }

        /**
         * Get SMC balance of address.
         */
        public getAddressBalance = (address: string): Promise<number> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(115);
                }, 2000);
            });
        }

        /**
         * Get address from transaction.
         */
        public getAddressFromTransaction = (tx: Transaction): Promise<string> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(tx.from);
                }, 2000);
            });
        }

        /**
         * Buy SMC from exchange.
         */
        public buySMCFromExchange = (exchangeId: string): Promise<boolean> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(exchangeId ? true : false);
                }, 2000);
            });
        }

        /**
         * Get Current SMC Price.
         */
        public getCurrentSMCPrice = (): Promise<number> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(15);
                }, 2000);
            });
        }

        /**
         * Get SMC from testnet tap.
         */
        public getSMCfromTestNetTap = (): Promise<boolean> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(true);
                }, 2000);
            });
        }

        /**
         * Get transaction status.
         */
        public getTransactionStatus = (txid: string): Promise<TransactionStatus> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(txid ? TransactionStatus.Success : TransactionStatus.Faild)
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


        componentDidMount() {
            this.connectSpacemeshApiClient();
        }

        render() {

            return Component;
        }
    }
}

export default SpacemeshApiClientMock;

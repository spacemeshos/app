export interface IProvider {
    readonly name: string;
    readonly address: string;
}

// A websocket api provider
export class WebsocketProvider implements IProvider {
    public readonly name: string;
    public readonly address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

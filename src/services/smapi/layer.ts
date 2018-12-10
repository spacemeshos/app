export interface ILayer {
    readonly num: number;
    readonly type: LayerType;
}

export class Layer implements ILayer {
    public readonly num: number;
    public readonly type: LayerType;
    constructor(num: number, kind: LayerType) {
        this.num = num;
        this.type = kind;
    }
}

export enum LayerType {
    Genesis,
    Latest,
    Irreversible, // last irreversible layer
    Number,
}

export const IrreversibleLayer = new Layer(0, LayerType.Irreversible);
export const LatestLayer = new Layer(0, LayerType.Latest);
export const GenesisLayer = new Layer(0, LayerType.Genesis);

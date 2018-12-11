import * as bls from 'bls-wasm';

export async function InitSignaturesLib(): Promise<void> {
    await bls.init(bls.BLS12_381);
    return Promise.resolve();
}

import * as bls from 'bls-wasm';
import { Keccak } from 'sha3';

export class SecertKeyEx  {

    // 48 bytes hex encoded string - 96 chars
    private chainCode: string;

    // 16 bytes hex encoded string - 32 chars
    private rndSeed: string;

    // contained secretKey
    private s: bls.SecretKey;

    // seed: 64 bytes hex string
    public constructor(seed: string) {
        if (seed.length != 128) throw new Error('Unexpected input length. Expected 128 chars hex string.');
        
        const rndSeed = seed.substring(0,96);
        const chainCode = seed.substring(96,128);
        this.s = new bls.SecretKey();
        this.rndSeed = rndSeed;
        this.chainCode = chainCode;
        const a = bls.fromHexStr(rndSeed);
        this.s.setLittleEndian(a);
    }

    public GetPublicKey(): bls.PublicKey {
        return this.s.getPublicKey();
    }

    public Dump(msg: string) {
        this.s.dump(msg);
    }

    public Sign(msg: string): bls.Signature {
        return this.s.sign(msg);
    }

    public SerializeToHexStr(): string {
        return this.s.serializeToHexStr();
    }

    // i: [1...]
    public DeriveSecretKey(i: number): SecertKeyEx {

        // newKeyRndSeed = Keccak512(chainCode, i, rndSeed).substring(0,96)
        const hash = new Keccak(384); // Keccak 384 has size is 48 bytes
        hash.update(this.chainCode);
        hash.update(i.toString());
        hash.update(this.rndSeed);
        return new SecertKeyEx(hash.digest('hex') + this.chainCode);
    }
}

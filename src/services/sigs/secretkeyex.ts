import * as bls from 'bls-wasm';
import { Keccak } from 'sha3';

export class SecertKeyEx  {

    // 48 bytes hex encoded string - 96 chars
    private chainCode: string;

    // 48 bytes hex encoded string - 96 chars;
    private rndSeed: string;

    // contained secretKey
    private s: bls.SecretKey;

    // seed: 192 bytes hex string
    public constructor(seed: string) {
        console.log(seed.length);
        if (seed.length != 192) throw new Error('Unexpected input seed - must be a 192 chars hex string.');
        const rndSeed = seed.substring(0,96);
        const chainCode = seed.substring(96,192);
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

        // newKeyRndSeed = Keccak(chainCode, i, rndSeed)
        const hash = new Keccak(512);
        hash.update(this.chainCode);
        hash.update(i.toString());
        hash.update(this.rndSeed);
        const str1:string = hash.digest('hex').substring(0, 96); // we take the first 48 bytes
        console.log("hash: " + str1);
        return new SecertKeyEx(str1 + this.chainCode);
    }
}

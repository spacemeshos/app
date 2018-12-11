import * as bls from 'bls-wasm';
import { Keccak } from 'sha3';

export class SecertKeyEx  {

    // 48 bytes hex encoded string
    private chainCode: string;

    // 48 bytes hex encoded string
    private rndSeed: string;

    // contained secretKey
    private s: bls.SecretKey;

    // rndSeed: 48 bytes hex encoded
    // chainCode: 48 random bytes hex encoded string
    public constructor(rndSeed: string, chainCode: string) {
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
        const hash = new Keccak(256);
        hash.update(this.chainCode);
        hash.update(i.toString());
        hash.update(this.rndSeed);
        const str1:string = hash.digest('hex');
        return new SecertKeyEx(str1, this.chainCode);
    }
}

import {bls} from 'bls-wasm';

export interface ISignatures {

    // Returns a new bls.SecretKey from the provided random seed
    NewSecretKeyFromSeed(hexStr: string) : bls.SecretKey;

    // Returns a new secret key from its hex string serielized form
    NewSecretKeyFromHex(hexStr: string) : bls.SecretKey;

    // Returns a secert key determinstically generated from another secret key and an index
    GenerateSecretDerivedKey(sec: bls.SecretKey, idx: number) : bls.SecretKey;

    // Signs message m using key sec and returns the signature
    Sign(sec: bls.SecretKey, m: string) : bls.Signature;

    // Returns ture iff message m signature was signed by the key pair identified by pub
    Verify(pub: bls.PublicKey, sig: bls.Signature, m: string) : boolean;
}

export async function InitSignaturesLib() : Promise<ISignatures> {
    const sig = new Signatures();
    await sig.Init();
    return sig;
}

export class Signatures implements ISignatures {

  // init the signatures lib
  public async Init() : Promise<void> {
      await bls.init(bls.BLS12_381);
      return Promise.resolve();
  }

  // Returns a new BLS secret key from provided random seed
  // Hex string of random seed. e.g. 0x0214aef
  public NewSecretKeyFromSeed(hexStr: string) : bls.SecretKey {
      const sec = bls.SecretKey();
      const a = bls.fromHexStr(hexStr);
      sec.setLittleEndian(a);
      return sec;
  }

  // Returns a new secret key from its hex string serielized form
  public NewSecretKeyFromHex(hexStr: string) : bls.SecretKey {
      const sec = bls.SecretKey();
      sec.deserialize(hexStr);
      return sec;
  }

  // Returns a new private key determinstically derived from sec and index idx
  // Used in HW wallet implementation. See relevant BIPs
  public GenerateSecretDerivedKey(sec: bls.SecretKey, idx: number) : bls.SecretKey {
      // todo: implement key deriviation
      const sec1 = bls.SecretKey();
      sec1.setByCPRNG();
      return sec1;
  }

  // Signs message m using key sec and returns the signature
  public Sign(sec: bls.SecretKey, data: string) : bls.Signature {
      return bls.sign (data);
  }

  // Returns ture iff message m signature was signed by the key pair identified by pub
  public Verify(pub: bls.PublicKey, sig: bls.Signature, m: string) : boolean {
      return pub.verify(sig,m);
  }
}

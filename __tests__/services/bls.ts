import * as Sigs from '../../src/services/sigs/signatures'
import { SecertKeyEx } from '../../src/services/sigs/secretkeyex'
import * as bls from 'bls-wasm';

test('bls', async () => {

        await Sigs.InitSignaturesLib();

        const sec = new bls.SecretKey();
        sec.setByCSPRNG();
        console.log(sec.serializeToHexStr());

        const sk = new SecertKeyEx("95ebca1b4b8d5ae3376c2b24b8bc2ff5c458fa7fd1e3e69dfde0e865943da51c6d2f3205c936c5b05d130a29ec67bd57",
        "bea6c8baa39837b2739e3ecca022a5621aec2ff65d4a0c8fd1ce295a7d60f750e59cc7d963a5312fec2e864f2d13a75e");
        sk.Dump('Private key: ');

        const pk = sk.GetPublicKey();
        pk.dump('Public key: ');
        const msg = "Spacemesh rocks";

        const sig = sk.Sign(msg);
        // sig.dump('Signature: ');

        expect(pk.verify(sig, msg)).toEqual(true);

        // test dervice
        const sk1 = sk.DeriveSecretKey(1);
        sk1.Dump('Derived private key: ')
        const str1 = sk1.SerializeToHexStr();
        expect(str1).toEqual("907fda7ccf703fa1d5202b0de5e243d024fb477a15a34fcada0b9dfbb4b03538")
    });
})

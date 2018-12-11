import * as Sigs from '../../src/services/signatures'
import * as bls from 'bls-wasm';

test('bls', async () => {

        const sigs: Sigs.ISignatures = await Sigs.InitSignaturesLib();

        const sk = sigs.NewSecretKey();
        sk.dump('Private key: ');
        
        const pk = sk.getPublicKey();
        pk.dump('Public key: ');
        const msg = "Spacemesh rocks";

        const sig = sk.sign(msg);
        sig.dump('Signature: ');

        expect(pk.verify(sig, msg)).toEqual(true);
    });
})

import * as Sigs from '../../src/services/sigs/signatures'
import { SecertKeyEx } from '../../src/services/sigs/secretkeyex'
import * as bls from 'bls-wasm';

test('bls', async () => {

        // init the library
        await Sigs.InitSignaturesLib();

        // To create a secret key you need to provide 96 bytes of random seed data
        const sk = new SecertKeyEx("329e323b89be6ff6e4af669fcc2862c27943e1f09f9dec9cca405ef11aa1cab69abad15073b1ee50b4a5fd0347870d80336f353009722ebda1bfa43ce139e22fefb67f6c3c08011677a8309f25eb32a0e6906c9f5bf1271aa83fe22e37743a57");

        sk.Dump('Private key: ');

        // Obtain public key from private
        const pk = sk.GetPublicKey();
        pk.dump('Public key: ');
        const msg = "Spacemesh rocks";

        // Sign a message
        const sig: bls.Signature = sk.Sign(msg);
        // sig.dump('Signature: ');

        // Verify the signature
        expect(pk.verify(sig, msg)).toEqual(true);
    });
})

test('bls-derive', async () => {

        // init the library
        await Sigs.InitSignaturesLib();

        // To create a secret key you need to provide 96 bytes of random seed data
        const sk = new SecertKeyEx("329e323b89be6ff6e4af669fcc2862c27943e1f09f9dec9cca405ef11aa1cab69abad15073b1ee50b4a5fd0347870d80336f353009722ebda1bfa43ce139e22fefb67f6c3c08011677a8309f25eb32a0e6906c9f5bf1271aa83fe22e37743a57");

        sk.Dump('Private key: ');

        // Derive a private key from another private key at index 1
        const sk1 = sk.DeriveSecretKey(1);
        sk1.Dump('Derived private key: ')

        const str1 = sk1.SerializeToHexStr();
        expect(str1).toEqual("0af718562e2bd0c6b1cb72d6a051828bc8c5ca44d637e5fa8552c952b67a2373")
    });
})

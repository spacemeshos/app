import * as Sigs from '../../src/services/sigs/signatures'
import { SecertKeyEx } from '../../src/services/sigs/secretkeyex'
import * as bls from 'bls-wasm';

test('bls', async () => {

        // init the library
        await Sigs.InitSignaturesLib();

        // To create a secret key you need to provide 512 bits of seed
        // The 12 words seed phrase is used to generate 128 bits random seed. From it a 512 bits seed using sha-512
        const sk = new SecertKeyEx("6935d7849c8756c07558f46faa34ff88a75e476ee1b81232a587ccd8a1c32b7fa50dfc47967bcfa860ef05402c1c77ac8fdd4edee05c8bb0d54f05db98c253fe");

        expect(sk.SerializeToHexStr()).toEqual("6935d7849c8756c07558f46faa34ff88a75e476ee1b81232a587ccd8a1c32b3f");

        // Obtain public key from private
        const pk = sk.GetPublicKey();
        // pk.dump('Public key: ');

        expect(pk.serializeToHexStr()).toEqual("ae6e60dfd0ec656a510c2665da7198594aac30abc448fe9eacac4ab45691bf8226b7b075c6d33814097656a686bc1418a3c73a9dc8225647c96e32b1af0c85d1e950d035046c7aa4835d324bf86ae89a7332ce394d795dace85f380f43464896");

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
        const sk = new SecertKeyEx("61def159f10c4274cfecfd52ea742a683e682f1d961d89a4c46d731a426f57a68133981fe0c6b82403e64c031d427370f825107e6d0455c61e97e9666a2b4266");

        // Derive a private key from another private key at index 1
        const sk1 = sk.DeriveSecretKey(1);
        // sk1.Dump('Derived private key: ')

        const str1 = sk1.SerializeToHexStr();
        expect(str1).toEqual("af3734bddc7f8c2def89244b5d85bee6cc152dbf4a3febf6edff17bda5196368")
    });
})

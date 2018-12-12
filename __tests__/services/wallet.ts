import * as bip39 from 'bip39';
import * as pbkdf2 from 'pbkdf2';
import * as aes from 'aes-js';

test('wallet', async () => {

    // Generate a 12 words mnemonic
    const m = bip39.generateMnemonic();
    console.log("Mnemonic: ", m);
    expect(bip39.validateMnemonic(m)).toEqual(true);

    // Generate 64 seed bytes from phrase - this is a wallet's master seed
    const seed = bip39.mnemonicToSeedHex(m);
    console.log("Mnemonic (64 bytes): ", seed);

    // Wallet's user provided pin (can be any length) - we'll likely to ask for at least 8 digits/chars combo
    const pin = '24815214';

    // Derive a 32 bytes (256 bits) AES sym key from the user provided pin
    const salt = 'Spacemesh blockmesh';
    const derivedKey = pbkdf2.pbkdf2Sync(pin, salt, 100000, 32, 'sha512');
    console.log("AES sym key: " + derivedKey.toString('hex'));

    // AES encrypt and decrypt wallet json data file
    // Some of the wallet fields are encrypted - here we just use a string
    const data = 'This is wallet data file. It stores the master random seed as well as additional accounts data - key pairs, number of txs, master seed: ' + seed;

    const textBytes = aes.utils.utf8.toBytes(data);
    const aesCtr = new aes.ModeOfOperation.ctr(derivedKey, new aes.Counter(5));
    const encryptedBytes = aesCtr.encrypt(textBytes);
    const encryptedHex = aes.utils.hex.fromBytes(encryptedBytes);
    console.log(encryptedHex);

    // Decrypt encrypted wallet file data using the same AES key
    const aes1Ctr = new aes.ModeOfOperation.ctr(derivedKey, new aes.Counter(5));
    const decryptedBytes = aes1Ctr.decrypt(encryptedBytes);
    const decryptedText = aes.utils.utf8.fromBytes(decryptedBytes);
    console.log('Decrypted: ' + decryptedText);
    console.log('Source text: ' + data);

    expect(data).toMatch(decryptedText);

})

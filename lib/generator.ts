import * as bitcoinjs from "bitcoinjs-lib";
import * as bip39 from "bip39";

export type Wallet = {
  mnemonic: string,
  address: string;
  privateKey: string;
  url: string;
};

const generateRandomMnemonicPhrase = (): string => {
  console.log(bip39);
  const mnemonic = bip39.generateMnemonic(256);
  return mnemonic;
}

export const WalletGenerator = {
  bitcoin: (): Wallet | null => {
    const mnemonic = generateRandomMnemonicPhrase();
    const keyPair = bitcoinjs.ECPair.makeRandom();
    // This is technically correct, but it is not a standard that most wallets use
    // We should use Mnemonic 24 and encode with base58
    const privateKey = keyPair.privateKey?.toString('base64');
    const result = bitcoinjs.payments.p2pkh({ pubkey: keyPair.publicKey });

    if (result.address && privateKey) {
      return {
        mnemonic: mnemonic,
        address: result.address,
        privateKey: privateKey,
        url: `https://www.blockchain.com/btc/address/${result.address}`,
      };
    }

    return null;
  },
};

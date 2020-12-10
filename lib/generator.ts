import * as bitcoinjs from "bitcoinjs-lib";

export type Wallet = {
  address: string;
  privateKey: string;
  url: string;
};

export const WalletGenerator = {
  bitcoin: (): Wallet | null => {
    const keyPair = bitcoinjs.ECPair.makeRandom();
    // This is technically correct, but it is not a standard that most wallets use
    // We should use Mnemonic 24 and encode with base58
    const privateKey = keyPair.privateKey?.toString('base64');
    const result = bitcoinjs.payments.p2pkh({ pubkey: keyPair.publicKey });

    if (result.address && privateKey) {
      return {
        address: result.address,
        privateKey: privateKey,
        url: `https://www.blockchain.com/btc/address/${result.address}`,
      };
    }

    return null;
  },
};

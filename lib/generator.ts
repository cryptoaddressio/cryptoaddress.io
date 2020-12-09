import * as bitcoinjs from "bitcoinjs-lib";

export type Wallet = {
  address: string;
  privateKey: string;
  url: string;
};

export const WalletGenerator = {
  bitcoin: (): Wallet | null => {
    const keyPair = bitcoinjs.ECPair.makeRandom();
    const result = bitcoinjs.payments.p2pkh({ pubkey: keyPair.publicKey });

    if (result.address) {
      // TODO: Figure out how to get the private key
      return {
        address: result.address,
        privateKey: "?",
        url: `https://www.blockchain.com/btc/address/${result.address}`,
      };
    }

    return null;
  },
};

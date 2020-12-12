import * as bitcoinjs from "bitcoinjs-lib";
import * as bip39 from "bip39";
import * as bip32 from "bip32";
import { BIP32Interface } from "bip32";

export type Wallet = {
  mnemonic: string;
  address: string;
  privateKey: string;
};

const getAddress = (node: BIP32Interface): string => {
  return bitcoinjs.payments.p2pkh({ pubkey: node.publicKey }).address || "";
};

const generateMnemonic = (): string => {
  return bip39.generateMnemonic(256);
};

const getRootFromMnemonic = async (
  mnemonic: string,
): Promise<BIP32Interface> => {
  return bip39.mnemonicToSeed(mnemonic).then((seed) => {
    return bip32.fromSeed(seed, bitcoinjs.networks.bitcoin);
  });
};

const getFirstNode = (root: BIP32Interface): BIP32Interface => {
  return root.derivePath("m/44'/0'/0'/0/0");
};

const generateBitcoinWallet = async (): Promise<Wallet> => {
  const mnemonic = generateMnemonic();
  const root = await getRootFromMnemonic(mnemonic);
  const node = getFirstNode(root);

  return {
    address: getAddress(node),
    privateKey: node.toWIF() || "",
    mnemonic: mnemonic,
  };
};

export const WalletGenerator = {
  bitcoin: async (): Promise<Wallet> => {
    const bitcoinPack = await generateBitcoinWallet();
    return {
      mnemonic: bitcoinPack.mnemonic,
      address: bitcoinPack.address,
      privateKey: bitcoinPack.privateKey,
    };
  },
};

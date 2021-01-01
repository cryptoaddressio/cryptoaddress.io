import React, { useState } from "react";
import styles from "./Generate.module.css";
import { Wallet, WalletGenerator } from "../lib/generator";
import { BitcoinLogo } from "./BitcoinLogo";
import QRCode from "qrcode.react";

export const Generate = () => {
  const [wallet, setWallet] = useState<Wallet>();

  const onClick = async () => {
    if (wallet) {
      const shouldGen = confirm(
        "Are you sure you want to generate a new address? It will replace the old one forever."
      );

      if (!shouldGen) return;
    }

    const newWallet = await WalletGenerator.bitcoin();
    if (newWallet) {
      setWallet(newWallet);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 0,
          }}
        >
          <button className={styles.btn} onClick={onClick}>
            <BitcoinLogo />
          </button>
        </div>
      </div>
      {wallet && (
        <>
          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                backgroundColor: "blue",
                color: "white",
                marginBottom: 10,
                padding: 5,
                textAlign: "center",
              }}
            >
              Backup Phrase
            </div>
            <div style={{ maxWidth: 300, textAlign: "center" }}>
              {wallet.mnemonic}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: 30, marginTop: 30 }}>
              <KeyDisplay title="Public Address" value={wallet.address} />
            </div>

            <div style={{ marginBottom: 30 }}>
              <KeyDisplay title="Private Key" value={wallet.privateKey} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

interface KeyDisplayProps {
  title: string;
  value: string;
}

export const KeyDisplay: React.FC<KeyDisplayProps> = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        maxWidth: 300,
        margin: "0 auto",
        alignItems: "center",
        wordBreak: "break-word",
      }}
    >
      <div
        style={{
          backgroundColor: "blue",
          color: "white",
          marginBottom: 10,
          padding: 5,
        }}
      >
        {props.title}
      </div>
      <QRCode value={props.value} style={{ marginBottom: 10 }} />
      <div style={{}}>{props.value}</div>
    </div>
  );
};

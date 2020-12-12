import React, { useState } from "react";
import styles from "./Generate.module.css";
import { Wallet, WalletGenerator } from "../lib/generator";

export const Generate = () => {
	const [wallet, setWallet] = useState<Wallet>();

	const onClick = async () => {
		const wallet = await WalletGenerator.bitcoin();
		if (wallet) {
			setWallet(wallet);
		}
	};

	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<button className={styles.btn} onClick={onClick}>
					Generate Bitcoin Wallet
				</button>
			</div>

			<div style={{ marginTop: 20 }}>
				{wallet && (
					<div style={{ fontSize: 18 }}>
						<p>{`Public Address: ${wallet.address}`}</p>
						<p>{`Private Key: ${wallet.privateKey}`}</p>
						<p>{`Backup Phrase: ${wallet.mnemonic}`}</p>
					</div>
				)}
			</div>
		</div>
	);
};

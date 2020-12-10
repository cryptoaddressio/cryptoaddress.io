import React, { useState } from "react";
import styles from "./Generate.module.css";
import { Wallet, WalletGenerator } from "../lib/generator";

export const Generate = () => {
	const [wallet, setWallet] = useState<Wallet>();

	const onClick = () => {
		const wallet = WalletGenerator.bitcoin();
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
						<p>Wallet Generated</p>
						<p>
							{`Address: `}
							<a href={wallet.url} target="_blank">
								{wallet.address}
							</a>
						</p>
						<p>{`Private Key: ${wallet.privateKey}`}</p>
					</div>
				)}
			</div>
		</div>
	);
};

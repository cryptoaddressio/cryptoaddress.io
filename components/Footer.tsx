import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <span>
          The code for this website is open source and you can check here by
        </span>
        <a
          target="blank"
          href="https://github.com/cryptoaddressio"
          style={{ marginLeft: 6 }}
        >
          clicking here
        </a>
      </footer>
    </>
  );
}

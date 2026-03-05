import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.inner}>
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerDrop}>💧</span>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Siblings Success Ventures. All rights reserved.</span>
          <span className={styles.madeIn}>Made with care in Manipur, India 🇮🇳</span>
        </div>
      </div>

    </footer>
  );
}
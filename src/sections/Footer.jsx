import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionInner}>
        <p>© {new Date().getFullYear()} Siblings Success Ventures. All rights reserved.</p>
        <p className={styles.footerSub}>Spryng — Pure Drinking Water · Manipur, India</p>
      </div>
    </footer>
  );
}

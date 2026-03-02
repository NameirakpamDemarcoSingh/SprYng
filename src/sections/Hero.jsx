import styles from './Hero.module.css';
import defaultImage from '../assets/bottle-hero.jpeg';

export default function Hero({
  badge = 'Packaged Drinking Water · Manipur, India',
  headline = (
    <>
      Clean water,<br />
      <span className={styles.heroAccent}>delivered fresh.</span>
    </>
  ),
  subtext = (
    <>Spryng is a packaged drinking water brand by <strong>Siblings Success Ventures</strong> — bringing safe, affordable hydration to everyday life across Manipur.</>
  ),
  primary = { label: 'Get in Touch', href: '#contact' },
  secondary = { label: 'Learn More', href: '#why-us' },
  imageSrc = defaultImage,
}) {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>{badge}</div>
        <h1 className={styles.heroTitle}>{headline}</h1>
        <p className={styles.heroSub}>{subtext}</p>
        <div className={styles.heroActions}>
          <a href={primary.href} className={styles.btnPrimary}>{primary.label}</a>
          <a href={secondary.href} className={styles.btnSecondary}>{secondary.label}</a>
        </div>
      </div>
      {imageSrc && (
        <div className={styles.heroVisual}>
          <img
            src={imageSrc}
            alt="Hero visual"
            className={styles.bottleImage}
          />
        </div>
      )}
    </section>
  );
}

import styles from './WhyUs.module.css';

export default function WhyUs({
  header = {
    title: 'Why choose Spryng?',
    subtitle: "We're a local brand that takes quality seriously.",
  },
  strengths = [
    {
      icon: '💧',
      title: 'Pure & Safe',
      desc: 'Our water goes through strict filtration and quality checks before it reaches you.',
    },
    {
      icon: '📦',
      title: 'Reliable Supply',
      desc: 'Consistent availability for homes, offices, and businesses across Manipur.',
    },
    {
      icon: '🏭',
      title: 'Locally Made',
      desc: 'Proudly manufactured in Manipur — supporting local jobs and the local economy.',
    },
    {
      icon: '♻️',
      title: 'Quality Packaging',
      desc: 'Durable, food-safe plastic bottles designed to keep water fresh.',
    },
  ],
}) {
  return (
    <section className={styles.whyUs} id="why-us">
      <div className={`${styles.sectionInner} autoShow`}>
        <div className={styles.sectionHeader}>
          <h2>{header.title}</h2>
          <p>{header.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {strengths.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

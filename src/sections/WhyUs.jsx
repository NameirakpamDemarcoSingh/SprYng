import styles from './WhyUs.module.css';

export default function WhyUs({
  header = {
    label: 'From Source to You',
    title: 'Every drop earns your trust.',
    subtitle: 'Five stages stand between our source and your hands. Here\'s exactly what happens.',
  },
  steps = [
    {
      num: '01',
      stage: 'Source',
      title: 'Natural Collection',
      stat: '100% natural source',
      desc: 'Water is drawn from a protected underground source in Manipur, untouched by industrial runoff.',
    },
    {
      num: '02',
      stage: 'Sediment Filter',
      title: 'Particle Removal',
      stat: 'Filters down to 1 micron',
      desc: 'Multi-stage sediment filtration strips out sand, rust, and suspended particles before anything else.',
    },
    {
      num: '03',
      stage: 'UV Sterilization',
      title: 'Pathogen Elimination',
      stat: '99.9% bacteria eliminated',
      desc: 'High-intensity UV light destroys all biological contaminants — no chemicals, no residue.',
    },
    {
      num: '04',
      stage: 'Quality Test',
      title: 'Batch Testing',
      stat: 'Every single batch tested',
      desc: 'Before bottling, each batch is lab-tested against national drinking water standards.',
    },
    {
      num: '05',
      stage: 'Bottling',
      title: 'Sealed & Delivered',
      stat: 'Food-safe packaging',
      desc: 'Bottled in our Manipur facility in food-grade containers and dispatched within 24 hours.',
    },
  ],
}) {
  return (
    <section className={styles.section} id="why-us">

      <div className={`${styles.header} autoShow`}>
        <span className={styles.label}>{header.label}</span>
        <h2 className={styles.title}>{header.title}</h2>
        <p className={styles.subtitle}>{header.subtitle}</p>
      </div>

      <div className={styles.track}>
        <div className={styles.line} />
        {steps.map((s, i) => (
          <div
            key={s.num}
            className={`${styles.step} ${i % 2 === 0 ? styles.stepAbove : styles.stepBelow} autoShow`}
          >
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.stageLabel}>{s.stage}</span>
                <span className={styles.stepNum}>{s.num}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <div className={styles.statPill}>{s.stat}</div>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
            <div className={styles.node}>
              <div className={styles.nodeInner} />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
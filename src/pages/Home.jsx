import styles from './Home.module.css'
import bottleHero from "../assets/bottle-hero.jpeg";

const strengths = [
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
]

export default function Home() {
  return (
    <main>

      {/* ── HERO ───────────────────────────────────────── */}
      <section className={styles.hero} id="home">
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>Packaged Drinking Water · Manipur, India</div>
          <h1 className={styles.heroTitle}>
            Clean water,<br />
            <span className={styles.heroAccent}>delivered fresh.</span>
          </h1>
          <p className={styles.heroSub}>
            Spryng is a packaged drinking water brand by{' '}
            <strong>Siblings Success Ventures</strong> — bringing safe, affordable
            hydration to everyday life across Manipur.
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className={styles.btnPrimary}>Get in Touch</a>
            <a href="#why-us" className={styles.btnSecondary}>Learn More</a>
          </div></div>
        <div className={styles.heroVisual}>
          <img
            src={bottleHero}
            alt="Spryng water bottle"
            className={styles.bottleImage}
          />
        </div>

      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────── */}
      <section className={styles.whyUs} id="why-us">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2>Why choose Spryng?</h2>
            <p>We're a local brand that takes quality seriously.</p>
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

      {/* ── LOCATION ───────────────────────────────────── */}
      <section className={styles.location} id="location">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2>Where to find us</h2>
            <p>Based in <b>Lanthabal Kunja Awang Leikai, Imphal West, Canchipur, Manipur,</b> serving the local community.</p>
          </div>
          <div className={styles.mapWrap}>
            {/* Replace src with your actual Google Maps embed URL */}
            <iframe
              title="Siblings Success Ventures Location"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d828.0159215066894!2d93.92767799933624!3d24.745608523244854!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1772086401456!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className={styles.locationNote}>
            📍 Manipur, India &nbsp;·&nbsp; Serving local businesses & households
          </p>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────── */}
      <section className={styles.contact} id="contact">
        <div className={styles.sectionInner}>
          <div className={styles.contactBox}>
            <h2>Get in touch</h2>
            <p>
              Interested in ordering Spryng water or partnering with us?
              Reach out — we'd love to hear from you.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <div className={styles.contactLabel}>Phone</div>
                  {/* Replace with your actual phone number */}
                  <a href="tel:+919999999999" className={styles.contactValue}>+91 99999 99999</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  {/* Replace with your actual email */}
                  <a href="mailto:hello@spryng.in" className={styles.contactValue}>hello@spryng.in</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <div className={styles.contactLabel}>Location</div>
                  <span className={styles.contactValue}>Manipur, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.sectionInner}>
          <p>© {new Date().getFullYear()} Siblings Success Ventures. All rights reserved.</p>
          <p className={styles.footerSub}>Spryng — Pure Drinking Water · Manipur, India</p>
        </div>
      </footer>

    </main>
  )
}

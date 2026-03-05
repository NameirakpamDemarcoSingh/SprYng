import styles from './Contact.module.css';
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

export default function Contact({
  header = {
    eyebrow: '— Let\'s Talk',
    title: 'Ready to order?',
    subtitle: 'Reach out for orders, partnerships, or just to say hello. We\'re based in Manipur and we respond fast.',
  },
  whatsapp = '+919999999999', /* no space allowed */
  phone = '+91 99999 99999',
  email = 'hello@spryng.in',
  location = 'Imphal West, Canchipur, Manipur',
  socials = {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    x: 'https://x.com/',
  },
}) {
  return (
    <section className={styles.section} id="contact">

      {/* Top glow */}
      <div className={styles.glow} />

      <div className={styles.inner}>

        {/* LEFT */}
        <div className={`${styles.left} autoShow`}>
          <span className={styles.eyebrow}>{header.eyebrow}</span>
          <h2 className={styles.title}>{header.title}</h2>
          <p className={styles.subtitle}>{header.subtitle}</p>

          {/* Socials */}
          <div className={styles.socials}>
            <a href={socials.facebook} target="_blank" rel="noreferrer" className={styles.socialFbBtn} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={socials.instagram} target="_blank" rel="noreferrer" className={styles.socialInsBtn} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={socials.x} target="_blank" rel="noreferrer" className={styles.socialXBtn} aria-label="X">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={`${styles.right} autoShow`}>
          <a href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={styles.contactRow}>
            <div className={styles.rowLeft}>
              <span className={styles.rowLabel}>WhatsApp</span>
              <span className={styles.rowValue}>{whatsapp}</span>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>

          <a href={`tel:${phone}`} className={styles.contactRow}>
            <div className={styles.rowLeft}>
              <span className={styles.rowLabel}>Phone</span>
              <span className={styles.rowValue}>{phone}</span>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>

          <a href={`mailto:${email}`} className={styles.contactRow}>
            <div className={styles.rowLeft}>
              <span className={styles.rowLabel}>Email</span>
              <span className={styles.rowValue}>{email}</span>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>

          <div className={styles.contactRow} style={{ cursor: 'default' }}>
            <div className={styles.rowLeft}>
              <span className={styles.rowLabel}>Location</span>
              <span className={styles.rowValue}>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
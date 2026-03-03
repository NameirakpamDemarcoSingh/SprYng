import styles from './Contact.module.css';

export default function Contact({
  header = {
    title: 'Get in touch',
    subtitle: (
      <>Interested in ordering Spryng water or partnering with us?<br />Reach out — we'd love to hear from you.</>
    ),
  },
  phone = '+91 99999 99999',
  email = 'hello@spryng.in',
  location = 'Imphal West, Canchipur, Manipur',
}) {
  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.sectionInner} autoShow`}>
        <div className={styles.contactBox}>
          <h2>{header.title}</h2>
          <p>{header.subtitle}</p>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <div className={styles.contactLabel}>Phone</div>
                <a href={`tel:${phone}`} className={styles.contactValue}>{phone}</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <a href={`mailto:${email}`} className={styles.contactValue}>{email}</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <div className={styles.contactLabel}>Location</div>
                <span className={styles.contactValue}>{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

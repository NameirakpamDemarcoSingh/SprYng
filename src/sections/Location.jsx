import styles from './Location.module.css';

export default function Location({
  header = {
    eyebrow: '— Find Us',
    title: 'Where to find us',
  },
  address = 'Lanthabal Kunja Awang Leikai,\nImphal West, Canchipur,\nManipur, India',
  hours = 'Mon – Sat 8:00 AM – 6:00 PM',
  note = 'Serving local businesses & households across Manipur.',
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d828.0159215066894!2d93.92767799933624!3d24.745608523244854!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1772086401456!5m2!1sen!2sin',
}) {
  return (
    <section className={styles.section} id="location">
      <div className={styles.inner}>
        {/* Full-width map */}
        <div className={styles.mapHero}>
          <iframe
            title="Spryng Location"
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Gradient overlays to blend map into background */}
          <div className={styles.overlayTop} />
          <div className={styles.overlayBottom} />
        </div>

        {/* Floating info card */}
        <div className={`${styles.card} autoShow`}>
          <span className={styles.eyebrow}>{header.eyebrow}</span>
          <h2 className={styles.title}>{header.title}</h2>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerDrop}>💧</span>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Address</span>
              <span className={styles.detailValue}>
                {address.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Hours</span>
              <span className={styles.detailValue}>{hours}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Serving</span>
              <span className={styles.detailValue}>{note}</span>
            </div>
          </div>


          <a href="https://maps.google.com/?q=24.745608,93.927677"
            target="_blank"
            rel="noreferrer"
            className={styles.directionsBtn}
          >
            Get Directions ↗
          </a>
        </div>
      </div>

    </section>
  );
}
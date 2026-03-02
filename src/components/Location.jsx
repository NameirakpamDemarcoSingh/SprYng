import styles from './Location.module.css';

export default function Location({
  header = {
    title: 'Where to find us',
    subtitle: (
      <>Based in <b>Lanthabal Kunja Awang Leikai, Imphal West, Canchipur, Manipur,</b> serving the local community.</>
    ),
  },
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d828.0159215066894!2d93.92767799933624!3d24.745608523244854!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1772086401456!5m2!1sen!2sin',
  note = '📍 Manipur, India · Serving local businesses & households',
}) {
  return (
    <section className={styles.location} id="location">
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2>{header.title}</h2>
          <p>{header.subtitle}</p>
        </div>
        <div className={styles.mapWrap}>
          <iframe
            title="Siblings Success Ventures Location"
            src={mapUrl}
            width="100%"
            height="380"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className={styles.locationNote}>{note}</p>
      </div>
    </section>
  );
}

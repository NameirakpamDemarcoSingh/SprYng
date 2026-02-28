import { useNavigate } from 'react-router-dom'
import styles from './Products.module.css'
import bottle1 from '../assets/bottle1.jpeg'
import bottle2 from '../assets/bottle2.jpeg'
import bottle3 from '../assets/bottle3.jpeg'
import bottle4 from '../assets/bottle4.jpeg'

const products = [
  {
    id: 1,
    image: bottle1,
    name: 'Spryng 500ml',
    size: '500 ml',
    tag: 'On-the-Go',
    tagColor: '#0ea5e9',
    description:
      'The perfect pocket-sized bottle for daily hydration. Ideal for commutes, school bags, and quick errands around town.',
    ideal: ['Students', 'Daily commuters', 'Office desks'],
  },
  {
    id: 2,
    image: bottle2,
    name: 'Spryng 750ml',
    size: '750 ml',
    tag: 'Active Use',
    tagColor: '#16a34a',
    description:
      'A balanced size for longer days. Great for outdoor activities, gym sessions, or keeping at your workspace throughout the day.',
    ideal: ['Gym & outdoor', 'Half-day trips', 'Worksites'],
  },
  {
    id: 3,
    image: bottle3,
    name: 'Spryng 1L',
    size: '1 Litre',
    tag: 'Family Favourite',
    tagColor: '#d97706',
    description:
      'Our most versatile size — enough for a family meal, a long journey, or a full morning at work without needing a refill.',
    ideal: ['Families', 'Long trips', 'Meetings & events'],
  },
  {
    id: 4,
    image: bottle4,
    name: 'Spryng 20L',
    size: '20 Litres',
    tag: 'Bulk Supply',
    tagColor: '#7c3aed',
    description:
      'Our large-format jar for homes, offices, and businesses. Compatible with standard water dispensers for easy, uninterrupted supply.',
    ideal: ['Offices & shops', 'Households', 'Events & canteens'],
  },
]

export default function Products() {
  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 100)
  }

  return (
    <main>
      {/* ── PAGE HEADER ─────────────────────────── */}
      <section className={styles.pageHeader}>
        <div className={styles.inner}>
          <div className={styles.badge}>Our Products</div>
          <h1>Pure water, every size.</h1>
          <p>
            Spryng is available in four sizes to suit every need — from a
            quick sip on the go to a full-day supply for your home or office.
          </p>
        </div>
      </section>

      {/* ── PRODUCT GRID ────────────────────────── */}
      <section className={styles.grid}>
        <div className={styles.inner}>
          <div className={styles.cards}>
            {products.map((p) => (
              <div key={p.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={p.image} alt={p.name} className={styles.image} />
                  <span
                    className={styles.tag}
                    style={{ background: p.tagColor }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.sizePill}>{p.size}</div>
                  <h2 className={styles.name}>{p.name}</h2>
                  <p className={styles.desc}>{p.description}</p>
                  <div className={styles.idealWrap}>
                    <span className={styles.idealLabel}>Ideal for:</span>
                    <div className={styles.idealTags}>
                      {p.ideal.map((tag) => (
                        <span key={tag} className={styles.idealTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.inner}>
          <div className={styles.ctaBox}>
            <h2>Interested in ordering?</h2>
            <p>
              We supply to homes, offices, shops, and events across Manipur.
              Get in touch and we'll sort you out.
            </p>
            <button onClick={goToContact} className={styles.ctaBtn}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

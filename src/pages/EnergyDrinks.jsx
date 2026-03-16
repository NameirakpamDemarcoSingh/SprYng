import { useNavigate } from 'react-router-dom'
import styles from './EnergyDrinks.module.css'
import drink1 from '../assets/drink1.webp'
import drink2 from '../assets/drink2.webp'
import drink3 from '../assets/drink3.webp'
import drink4 from '../assets/drink4.webp'

const drinks = [
  {
    id: 1,
    image: drink1,
    name: 'STORM ZERO',
    flavor: 'Arctic Blast',
    volume: '250ml',
    tag: 'SUGAR FREE',
    accent: '#00ff87',
    glow: 'rgba(0,255,135,0.35)',
    stats: { caffeine: '80mg', calories: '0 kcal', type: 'Zero Sugar' },
    description:
      'Ice-cold clarity in every can. Storm Zero hits fast with zero sugar and a full electric rush — engineered for the long grind.',
    badges: ['Zero Sugar', 'Keto Friendly', 'Clean Energy'],
  },
  {
    id: 2,
    image: drink2,
    name: 'VOLT RED',
    flavor: 'Original Formula',
    volume: '330ml',
    tag: 'ORIGINAL',
    accent: '#ff003c',
    glow: 'rgba(255,0,60,0.35)',
    stats: { caffeine: '120mg', calories: '140 kcal', type: 'Classic' },
    description:
      'The one that started it all. Volt Red delivers a clean surge of energy with a bold taste profile that hits different every time.',
    badges: ['High Caffeine', 'B-Vitamins', 'Taurine Boost'],
  },
  {
    id: 3,
    image: drink3,
    name: 'NEON CITRUS',
    flavor: 'Electric Lemon-Lime',
    volume: '330ml',
    tag: 'FAN FAVOURITE',
    accent: '#ffe600',
    glow: 'rgba(255,230,0,0.3)',
    stats: { caffeine: '100mg', calories: '90 kcal', type: 'Citrus' },
    description:
      "Charged with citrus and built to cut through. Neon Citrus is sharp, fizzy, and dangerously refreshing. You won't stop at one.",
    badges: ['Vitamin C', 'Natural Flavour', 'Light Carbonation'],
  },
  {
    id: 4,
    image: drink4,
    name: 'MIDNIGHT',
    flavor: 'Dark Berry',
    volume: '500ml',
    tag: 'MAX DOSE',
    accent: '#bf5fff',
    glow: 'rgba(191,95,255,0.35)',
    stats: { caffeine: '160mg', calories: '50 kcal', type: 'Max Strength' },
    description:
      'Not for the faint-hearted. Midnight is our highest-strength formula — deep dark berry flavour with a slow, sustained energy burn.',
    badges: ['Max Caffeine', 'Long Lasting', 'Dark Berry'],
  },
]

export default function EnergyDrinks() {
  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <main className={styles.root}>
      {/* ── NOISE OVERLAY ── */}
      <div className={styles.noise} aria-hidden="true" />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className={styles.heroGridCell} />
          ))}
        </div>
        <div className={styles.inner}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroDot} />
            SPRYNG ENERGY — NEW LINE
          </div>
          <h1 className={styles.heroTitle}>
            FUEL YOUR
            <br />
            <span className={styles.heroAccent}>NEXT LEVEL.</span>
          </h1>
          <p className={styles.heroSub}>
            Four formulas. Zero compromise. Built for people who don't slow down.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>4</span>
              <span className={styles.heroStatLabel}>Flavours</span>
            </div>
            <div className={styles.heroStatDiv} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>160mg</span>
              <span className={styles.heroStatLabel}>Max Caffeine</span>
            </div>
            <div className={styles.heroStatDiv} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>0g</span>
              <span className={styles.heroStatLabel}>Sugar Option</span>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll}>SCROLL DOWN</div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className={styles.products}>
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>THE LINE-UP</span>
            <h2 className={styles.sectionTitle}>PICK YOUR FORMULA</h2>
          </div>

          <div className={styles.cards}>
            {drinks.map((d, i) => (
              <div
                key={d.id}
                className={styles.card}
                style={{ '--accent': d.accent, '--glow': d.glow, '--delay': `${i * 0.08}s` }}
              >
                {/* Glow blob */}
                <div className={styles.cardGlow} aria-hidden="true" />

                {/* Image area */}
                <div className={styles.cardVisual}>
                  <img src={d.image} alt={d.name} className={styles.image} />
                  <span className={styles.cardTag}>{d.tag}</span>
                  <div className={styles.cardVolume}>{d.volume}</div>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardFlavor}>{d.flavor}</div>
                  <h3 className={styles.cardName}>{d.name}</h3>
                  <p className={styles.cardDesc}>{d.description}</p>

                  {/* Stats row */}
                  <div className={styles.cardStats}>
                    <div className={styles.cardStat}>
                      <span className={styles.cardStatVal}>{d.stats.caffeine}</span>
                      <span className={styles.cardStatKey}>Caffeine</span>
                    </div>
                    <div className={styles.cardStatDiv} />
                    <div className={styles.cardStat}>
                      <span className={styles.cardStatVal}>{d.stats.calories}</span>
                      <span className={styles.cardStatKey}>Calories</span>
                    </div>
                    <div className={styles.cardStatDiv} />
                    <div className={styles.cardStat}>
                      <span className={styles.cardStatVal}>{d.stats.type}</span>
                      <span className={styles.cardStatKey}>Type</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className={styles.cardBadges}>
                    {d.badges.map((b) => (
                      <span key={b} className={styles.cardBadge}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.inner}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <p className={styles.ctaEyebrow}>READY TO STOCK UP?</p>
              <h2 className={styles.ctaTitle}>ORDER IN BULK.<br />WE'LL DELIVER.</h2>
              <p className={styles.ctaSub}>
                Available for wholesale to retailers, gyms, events, and offices across Manipur.
              </p>
            </div>
            <div className={styles.ctaRight}>
              <button onClick={goToContact} className={styles.ctaBtn}>
                <span>GET IN TOUCH</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className={styles.ctaNote}>No minimum order for first-time buyers.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

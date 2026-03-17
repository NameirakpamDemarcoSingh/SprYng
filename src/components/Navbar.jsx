import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.6, rootMargin: '-64px 0px 0px 0px' }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false)
  }, [location.pathname])

  const navigate = useNavigate()
  const goToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const isProductsActive =
    location.pathname === '/products' || location.pathname === '/energy'

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" onClick={scrollTop}>
            <span className={styles.logo}>Spryng</span>
          </Link>
          <span className={styles.by}>by Siblings Success Ventures</span>
        </div>

        <div className={styles.links}>
          <NavLink to="/" end onClick={scrollTop} className={activeSection === 'home' ? styles.activeLink : ''}>
            Home
          </NavLink>
          <button onClick={() => goToSection('why-us')} className={activeSection === 'why-us' ? styles.activeLink : ''}>
            Why Us
          </button>
          <button onClick={() => goToSection('location')} className={activeSection === 'location' ? styles.activeLink : ''}>
            Location
          </button>
          <button onClick={() => goToSection('contact')} className={activeSection === 'contact' ? styles.activeLink : ''}>
            Contact
          </button>

          {/* ── PRODUCTS DROPDOWN ── */}
          <div className={styles.dropdown}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>
            <button
              className={`${styles.ctaLink} ${isProductsActive ? styles.ctaLinkActive : ''}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Products
              <svg
                className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${styles.dropdownItem} ${isActive ? styles.dropdownItemActive : ''}`
                  }
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className={styles.dropdownIcon}>💧</span>
                  <div>
                    <div className={styles.dropdownLabel}>Water</div>
                    <div className={styles.dropdownSub}>4 sizes available</div>
                  </div>
                </NavLink>

                <NavLink
                  to="/energy"
                  className={({ isActive }) =>
                    `${styles.dropdownItem} ${isActive ? styles.dropdownItemActive : ''}`
                  }
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className={styles.dropdownIcon}>⚡</span>
                  <div>
                    <div className={styles.dropdownLabel}>Energy Drinks</div>
                    <div className={styles.dropdownSub}>4 formulas</div>
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

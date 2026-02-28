import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  useEffect(() => {
    // Only run scroll spy on homepage
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
        rootMargin: '-64px 0px 0px 0px',
      }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  const navigate = useNavigate()
  const goToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
        })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" onClick={scrollTop}>
            <span className={styles.logo}>Spryng</span>
          </Link>
          <span className={styles.by}>
            by Siblings Success Ventures
          </span>
        </div>
        <div className={styles.links}>
          <NavLink to="/" end onClick={scrollTop} className={activeSection === 'home' ? styles.activeLink
            : ''}>Home</NavLink>
          <button
            onClick={() => goToSection('why-us')} className={activeSection === 'why-us' ? styles.activeLink : ''}>Why Us</button>
          <button
            onClick={() => goToSection('location')} className={activeSection === 'location' ? styles.activeLink : ''}>Location</button>
          <button
            onClick={() => goToSection('contact')} className={activeSection === 'contact' ? styles.activeLink : ''}>Contact</button>
          <NavLink to="/products" onClick={scrollTop} className={({ isActive }) => isActive ? styles.ctaLink : styles.ctaLink}>Products</NavLink>
        </div>
      </div>
    </nav>
  )
}
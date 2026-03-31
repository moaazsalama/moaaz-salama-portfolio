import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { personalInfo } from '../data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // highlight active section
      const sections = links.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="navbar-inner">
          <div className="navbar-logo" onClick={() => scrollTo('#hero')}>
            MS.
          </div>

          <ul className="navbar-links">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="navbar-cta"
              >
                Hire Me
              </a>
            </li>
          </ul>

          <button
            className="navbar-menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar-mobile open"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                >
                  {link.label}
                </a>
              ))}
              <a href={`mailto:${personalInfo.email}`}>Hire Me →</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

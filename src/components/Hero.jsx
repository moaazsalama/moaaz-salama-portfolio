import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Youtube, Mail, ArrowDown, ExternalLink } from 'lucide-react'
import { personalInfo } from '../data'

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    let timeout

    if (!deleting && charIndex < word.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed)
    } else if (!deleting && charIndex === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    }

    setDisplay(word.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return display
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const socials = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: personalInfo.youtube, label: 'YouTube' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

const heroCards = [
  { label: 'Current Role', value: 'Senior Dev', sub: '@ Wuilt' },
  { label: 'Apps Published', value: '12+', sub: 'Play Store & App Store' },
  { label: 'Avg Rating', value: '4.5★', sub: 'Across all apps' },
]

export default function Hero() {
  const role = useTypewriter(personalInfo.roles)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Available badge */}
            <motion.div variants={fadeUp}>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Available for new opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1 className="hero-name" variants={fadeUp}>
              {personalInfo.name}
            </motion.h1>

            {/* Typewriter role */}
            <motion.div className="hero-role" variants={fadeUp}>
              <span className="hero-role-text">{role}</span>
              <span className="hero-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p className="hero-desc" variants={fadeUp}>
              Senior Flutter Developer with <strong>5+ years</strong> building
              high-quality cross-platform apps. Published{' '}
              <strong>12+ apps</strong> with 4.5+ average rating. Expert in
              Clean Architecture, real-time features & performance optimization.
            </motion.p>

            {/* CTAs */}
            <motion.div className="hero-actions" variants={fadeUp}>
              <button className="btn-primary" onClick={scrollToProjects}>
                <ExternalLink size={16} />
                View My Work
              </button>
              <a className="btn-secondary" href={`mailto:${personalInfo.email}`}>
                <Mail size={16} />
                Get In Touch
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div className="hero-socials" variants={fadeUp}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: photo + cards */}
          <div className="hero-right">
            {/* Profile photo */}
            <motion.div
              className="hero-avatar-wrap"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            >
              <img src="/avatar.jpg" alt="Moaaz Salama" className="hero-avatar" />
              <div className="hero-avatar-ring" />
            </motion.div>

          {/* Floating cards */}
          <div className="hero-cards">
            {heroCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="hero-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="hero-card-label">{card.label}</div>
                <div className="hero-card-value">{card.value}</div>
                <div className="hero-card-sub">{card.sub}</div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" onClick={scrollDown}>
        <div className="hero-scroll-bar" />
        <span>scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  )
}

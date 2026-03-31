import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Youtube } from 'lucide-react'
import { personalInfo } from '../data'

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', href: personalInfo.github },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
  { icon: Youtube, label: 'YouTube', href: personalInfo.youtube },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// let's connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Available for full-time positions, freelance projects, and collaborations.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info">
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {card.href ? (
                    <a href={card.href} className="contact-card">
                      <div className="contact-card-icon">
                        <card.icon size={20} />
                      </div>
                      <div>
                        <div className="contact-card-label">{card.label}</div>
                        <div className="contact-card-value">{card.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-card">
                      <div className="contact-card-icon">
                        <card.icon size={20} />
                      </div>
                      <div>
                        <div className="contact-card-label">{card.label}</div>
                        <div className="contact-card-value">{card.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="contact-socials">
              <p className="contact-socials-title">Find me online</p>
              <div className="contact-socials-grid">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <s.icon size={16} />
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: availability card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-availability">
              <div className="availability-dot-wrapper">
                <div className="availability-ring" />
                <div className="availability-dot" />
              </div>

              <h3 className="availability-title">Open to Opportunities</h3>

              <p className="availability-desc">
                I'm actively looking for exciting Flutter roles where I can build
                great products, lead a team, and keep growing. Full-time, remote,
                or hybrid — let's talk!
              </p>

              <div className="availability-tags">
                {['Full-Time', 'Remote', 'Hybrid', 'Freelance'].map((tag) => (
                  <span key={tag} className="availability-tag">{tag}</span>
                ))}
              </div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary"
                style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                Send Me a Message
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

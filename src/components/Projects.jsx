import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Smartphone, Star } from 'lucide-react'
import { projects } from '../data'

const categories = ['All', 'E-Commerce', 'Location-Based', 'Productivity', 'Health', 'AI']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// published apps</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            12+ apps shipped on Google Play & App Store across diverse domains.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
              >
                <div className="project-card-top">
                  <span className="project-category-badge">{project.category}</span>
                  <div className="project-meta">
                    {project.company}
                    <br />
                    {project.year}
                  </div>
                </div>

                <div>
                  <div className="project-name">
                    {project.name}
                    {project.rating && (
                      <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: '#fbbf24' }}>
                        ★ {project.rating}
                      </span>
                    )}
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-impact">{project.impact}</div>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>

                {(project.playStore || project.appStore) && (
                  <div className="project-links">
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Smartphone size={13} />
                        Play Store
                      </a>
                    )}
                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={13} />
                        App Store
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

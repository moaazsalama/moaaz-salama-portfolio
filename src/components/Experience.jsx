import { motion } from 'framer-motion'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// career path</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            5+ years across startups, agencies, and enterprise platforms.
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <div className={`timeline-dot ${job.current ? 'current' : ''}`}>
                <div className="timeline-dot-inner" />
              </div>

              <div className={`timeline-card ${job.current ? 'current' : ''}`}>
                <div className="timeline-header">
                  <div>
                    <div className="timeline-title">{job.title}</div>
                    <div className="timeline-company">{job.company}</div>
                    {job.current && (
                      <span className="timeline-current-badge">Current</span>
                    )}
                  </div>
                  <div className="timeline-right">
                    <div className="timeline-period">{job.period}</div>
                    <div className="timeline-location">{job.location}</div>
                  </div>
                </div>

                <ul className="timeline-points">
                  {job.points.map((pt, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.06, duration: 0.4 }}
                    >
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

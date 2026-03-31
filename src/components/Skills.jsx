import { motion } from 'framer-motion'
import { skills } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const tagVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// tech stack</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build scalable, performant mobile experiences.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              className="skill-card"
              variants={cardVariant}
              whileHover={{
                borderColor: skill.color + '55',
                boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 20px ${skill.color}18`,
              }}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-card-header">
                <div className="skill-dot" style={{ background: skill.color }} />
                <span className="skill-category" style={{ color: skill.color }}>
                  {skill.category}
                </span>
              </div>

              <motion.div
                className="skill-tags"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skill.items.map((item) => (
                  <motion.span key={item} className="skill-tag" variants={tagVariant}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { stats } from '../data'

function CountUp({ to, decimals = 0, duration = 2 }) {
  const ref = useRef(null)
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => v.toFixed(decimals))
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionVal, to, {
      duration,
      ease: 'easeOut',
    })
    return controls.stop
  }, [inView, motionVal, to, duration])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function Stats() {
  return (
    <section className="stats-section" id="about">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">
                <CountUp to={s.value} decimals={s.decimals || 0} />
                {s.suffix}
              </div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

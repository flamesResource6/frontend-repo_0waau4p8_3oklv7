import { motion, useReducedMotion } from 'framer-motion'

export const spring = [0.22, 1, 0.36, 1]
export const micro = 0.25
export const sectionDur = 0.55

export function fadeSlideUp(delay = 0, duration = sectionDur, distance = 20) {
  return {
    hidden: { opacity: 0, y: distance, filter: 'blur(0px)' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration, ease: spring }
    }
  }
}

export function staggerChildren(stagger = 0.06, delayChildren = 0) {
  return {
    visible: {
      transition: { staggerChildren: stagger, delayChildren, ease: spring }
    }
  }
}

export function MotionSection({ children, className = '' }) {
  const reduce = useReducedMotion()
  const variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : fadeSlideUp(0, sectionDur, 24)

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export { motion }
import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from './components/Icons'
import { MotionSection, fadeSlideUp, staggerChildren, micro, sectionDur } from './components/Motion'

const ease = [0.22, 1, 0.36, 1]

function Button({ children, variant = 'primary' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600',
    ghost: 'bg-white/0 text-blue-700 hover:bg-blue-50 focus:ring-blue-600',
    secondary: 'bg-white text-blue-700 hover:bg-blue-50 ring-1 ring-blue-200'
  }
  return (
    <motion.button
      whileHover={{ y: -1, transition: { duration: micro, ease } }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </motion.button>
  )
}

function Card({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease }}
      className={`rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 ${className}`}
    >
      {children}
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-100">
            <Icon name="shield" className="h-4 w-4 text-blue-600" />
            Built for school transport safety
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Safer school rides. Happier mornings.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            KiddyGo brings live tracking, instant alerts, and simple route management to schools and parents. Clear. Calm. Reliable.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button>Book a Demo</Button>
            <Button variant="secondary">How It Works</Button>
          </div>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 -z-10 h-[400px] bg-gradient-to-b from-blue-50 to-white" />
    </section>
  )
}

function WhoWeHelp() {
  const items = [
    {
      title: 'For Schools',
      icon: 'building',
      bullets: [
        'Full fleet visibility',
        'CSV or address upload for routes',
        'Reduce parent calls',
      ],
    },
    {
      title: 'For Parents',
      icon: 'phone',
      bullets: [
        'Live bus tracking',
        'Pickup and drop alerts',
        'Peace of mind every day',
      ],
    },
  ]

  return (
    <MotionSection className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Who we help</h2>
        <p className="mt-3 text-gray-600">Simple tools for schools. Clarity for parents.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {items.map((it, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
                <Icon name={it.icon} className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                  {it.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="check" className="mt-1 h-4 w-4 text-blue-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </MotionSection>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Set up routes', desc: 'Schools import CSV or add stops. Done in minutes.', icon: 'route' },
    { title: 'Parents track live', desc: 'Real-time map and ETA. No guesswork.', icon: 'map' },
    { title: 'Instant alerts', desc: 'Pickup, drop, delays. Everyone stays informed.', icon: 'bell' },
  ]

  return (
    <MotionSection className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How it works</h2>
        <p className="mt-3 text-gray-600">Three simple steps. Smooth mornings.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100">
                <Icon name={s.icon} className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
            </div>
            <p className="mt-3 text-gray-600">{s.desc}</p>
          </Card>
        ))}
      </div>
    </MotionSection>
  )
}

function FeatureGrid() {
  const parents = [
    { title: 'Live tracking', icon: 'map', desc: 'See location and ETA in real time.' },
    { title: 'Pickup/drop alerts', icon: 'bell', desc: 'Instant notifications at each stop.' },
    { title: 'Attendance', icon: 'attendance', desc: 'Know who boarded and when.' },
    { title: 'Notifications', icon: 'chat', desc: 'Timely updates without calls.' },
    { title: 'Safety assurances', icon: 'shield', desc: 'Built with privacy and safety in mind.' },
  ]
  const schools = [
    { title: 'Fleet map', icon: 'map', desc: 'Overview of all vans on one map.' },
    { title: 'Smart routes', icon: 'route', desc: 'Upload CSV or addresses. Optimize easily.' },
    { title: 'Trip history', icon: 'history', desc: 'See past trips with timings.' },
    { title: 'Reports', icon: 'reports', desc: 'Distance, speed and delays in one place.' },
    { title: 'Notifications log', icon: 'bell', desc: 'Trace who received what and when.' },
    { title: 'Vehicle & user management', icon: 'userCog', desc: 'Assign vans, students and admins.' },
  ]
  const Item = ({ it }) => (
    <motion.div
      variants={fadeSlideUp(0, 0.45, 16)}
      className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100">
          <Icon name={it.icon} className="h-5 w-5 text-blue-600" />
        </div>
        <h4 className="font-semibold text-gray-900">{it.title}</h4>
      </div>
      <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
    </motion.div>
  )

  return (
    <MotionSection>
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">For Parents</h3>
            <motion.div
              variants={staggerChildren(0.08, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              {parents.map((p, i) => (
                <Item key={i} it={p} />
              ))}
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">For Schools</h3>
            <motion.div
              variants={staggerChildren(0.08, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              {schools.map((p, i) => (
                <Item key={i} it={p} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

function WhyKiddyGo() {
  const points = [
    'Works with any van',
    "Built for India’s unorganized van ecosystem",
    'Easy for non‑tech drivers',
    'Cuts parent calls',
    'Transparent for schools',
    'No hardware needed for pilots',
  ]
  return (
    <MotionSection className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 p-8 sm:p-12 text-white shadow-sm">
        <h3 className="text-2xl font-bold">Why KiddyGo</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <Icon name="check" className="mt-1 h-5 w-5 text-white" />
              <span className="text-blue-50/95">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  )
}

function Experience() {
  const [tab, setTab] = React.useState('parents')
  const tabs = [
    { id: 'parents', label: 'Parents' },
    { id: 'schools', label: 'Schools' },
  ]

  const parentShots = [
    { title: 'Live tracking & ETA', img: '/parent-live.png' },
    { title: 'Pickup / drop alerts', img: '/parent-alerts.png' },
  ]
  const schoolShots = [
    { title: 'Fleet map overview', img: '/school-map.png' },
    { title: 'Routes & reports', img: '/school-reports.png' },
  ]

  const Shot = ({ it }) => (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(2, 6, 23, 0.12)' }}
      transition={{ duration: 0.25, ease }}
      className="group rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100"
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-gray-50 to-white">
        <div className="flex h-full items-center justify-center text-gray-400">
          {it.title}
        </div>
      </div>
    </motion.div>
  )

  return (
    <MotionSection className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Experience</h2>
        <p className="mt-3 text-gray-600">Switch between parent and school views to see what each person gets.</p>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {tabs.map(t => {
          const active = tab === t.id
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ring-1 ${
                active
                  ? 'bg-blue-600 text-white ring-blue-600'
                  : 'bg-white text-gray-700 hover:bg-blue-50 ring-gray-200'
              }`}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease }}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {(tab === 'parents' ? parentShots : schoolShots).map((it, i) => (
          <Shot key={i} it={it} />
        ))}
      </motion.div>
    </MotionSection>
  )
}

function Testimonials() {
  const list = [
    {
      quote: 'I can see the van and relax. Mornings are calmer now.',
      name: 'Priya, Parent',
    },
    {
      quote: 'Fewer calls and more trust. Our staff saves time.',
      name: 'Rahul, School Admin',
    },
  ]
  const [a, b] = list
  return (
    <MotionSection className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: '-50%' }}
          transition={{ duration: 0.55, ease }}
          className="flex w-[200%] gap-8"
        >
          {[a, b].map((t, i) => (
            <div key={i} className="w-1/2">
              <p className="text-xl font-medium text-gray-900">“{t.quote}”</p>
              <p className="mt-3 text-gray-600">{t.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: '₹7,500/mo', points: ['Up to 3 vans', 'Email support', 'Parent app included'] },
    { name: 'Growth', price: '₹19,000/mo', points: ['Up to 10 vans', 'Priority support', 'Parent app included'] },
    { name: 'Scale', price: 'Let’s talk', points: ['11+ vans', 'Custom reports', 'Dedicated success'] },
  ]
  return (
    <MotionSection className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Pricing for schools</h2>
        <p className="mt-3 text-gray-600">Simple plans. Parent app is included.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25, ease }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="mt-2 text-3xl font-bold text-blue-700">{t.price}</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {t.points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Icon name="check" className="mt-1 h-4 w-4 text-blue-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button>Choose Plan</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Do we need new hardware?', a: 'No. You can start a pilot with existing phones.' },
    { q: 'Is the parent app included?', a: 'Yes. Every plan includes the parent app.' },
    { q: 'Where is my data stored?', a: 'Secure cloud infrastructure with strict access controls.' },
  ]
  const [open, setOpen] = React.useState(null)
  return (
    <MotionSection className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">FAQ</h2>
      <div className="mt-8 divide-y divide-gray-100 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
        {faqs.map((f, i) => {
          const active = open === i
          return (
            <button
              key={i}
              onClick={() => setOpen(active ? null : i)}
              className="w-full px-6 py-5 text-left"
            >
              <div className="flex items-center justify-between">
                <p className="text-gray-900 font-medium">{f.q}</p>
                <motion.span
                  animate={{ rotate: active ? 45 : 0 }}
                  transition={{ duration: 0.25, ease }}
                  className="text-blue-600"
                >
                  +
                </motion.span>
              </div>
              <motion.div
                initial={false}
                animate={{ height: active ? 'auto' : 0, opacity: active ? 1 : 0 }}
                transition={{ duration: 0.35, ease }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-gray-600">{f.a}</p>
              </motion.div>
            </button>
          )
        })}
      </div>
    </MotionSection>
  )
}

function FinalCTA() {
  return (
    <MotionSection className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="rounded-3xl bg-blue-600 p-10 text-white shadow-sm">
        <h2 className="text-3xl font-bold">Ready to make school rides safer?</h2>
        <p className="mt-2 text-blue-100">Let’s get you set up. It takes minutes.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button>Book a Demo</Button>
          <Button variant="secondary">Contact</Button>
        </div>
      </div>
    </MotionSection>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-600" />
            <span className="text-lg font-bold tracking-tight">KiddyGo</span>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-600 sm:flex">
            <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </nav>
          <div className="hidden sm:block">
            <Button>Book a Demo</Button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <div id="who"><WhoWeHelp /></div>
        <div id="how"><HowItWorks /></div>
        <div id="features"><FeatureGrid /></div>
        <WhyKiddyGo />
        <div id="experience"><Experience /></div>
        <Testimonials />
        <div id="pricing"><Pricing /></div>
        <div id="faq"><FAQ /></div>
        <FinalCTA />
      </main>

      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} KiddyGo. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-gray-700" href="#">Privacy</a>
              <a className="hover:text-gray-700" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

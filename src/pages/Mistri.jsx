import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hammer, Layers, Ruler, Shield, Clock8, Quote, Construction, MessageCircle } from 'lucide-react'
import ScheduleModal from '../components/ScheduleModal'

const works = [
  {
    title: 'Brick Work',
    detail: 'Plumb-checked walls, proper curing, lintels, and beam alignment for sturdy frames.',
    icon: Hammer,
  },
  {
    title: 'Plaster Work',
    detail: 'Cement-sand ratios locked, level guides, and crack-free finishes ready for paint.',
    icon: Layers,
  },
  {
    title: 'Tile Fixing',
    detail: 'Laser-leveled floors and walls with precise spacers, grouting, and edge trims.',
    icon: Ruler,
  },
  {
    title: 'Roof Construction',
    detail: 'Waterproofing, slopes, and reinforcement that keep terraces leak-free.',
    icon: Shield,
  },
]

const rates = [
  { label: 'Brick / block work', value: 'from ₹220 / sq ft*', note: 'Plumb-checked walls, proper curing, lintels.' },
  { label: 'Plaster work', value: 'from ₹65 / sq ft*', note: 'Level guides, crack-free finishes ready for paint.' },
  { label: 'Tile fixing', value: 'from ₹45 / sq ft*', note: 'Laser-leveled, spacers, grouting, and trims.' },
  { label: 'Daily rate (mistri)', value: '₹900 / day', note: 'Includes tools handling; materials at actuals.' },
]

const testimonials = [
  {
    quote: 'Their team finished our duplex plaster and brick work ahead of time with clean lines. Daily updates kept us stress-free.',
    name: 'Kunal S.',
    project: 'Duplex shell finish, Gurgaon',
  },
  {
    quote: 'Tile leveling and waterproofing were meticulous. No hollow sounds, and the handover was spotless.',
    name: 'Bhavana R.',
    project: 'Penthouse renovation, Delhi NCR',
  },
  {
    quote: 'Roof slope correction and crack sealing finally stopped the seepage. Professional crew and punctual.',
    name: 'Rakesh M.',
    project: 'Terrace repair, Noida',
  },
]

const cta = {
  phone: 'tel:+919162903405',
  whatsapp: 'https://wa.me/919162903405',
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.07 * i, duration: 0.5, ease: 'easeOut' } }),
}

function Mistri() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 4200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative overflow-hidden pb-16">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="section-padding relative pt-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="surface-strong p-8 border border-yellow-400/25"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="badge bg-yellow-500/20 text-yellow-100">Construction</p>
              <h1 className="font-display text-3xl sm:text-4xl font-semibold text-yellow-50 leading-tight">Bold, reliable mistri crews.</h1>
              <p className="max-w-2xl text-white/75">Structural alignment, clean plastering, leak-proof roofs, and tile finishes that stay true. Managed by seasoned supervisors.</p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="button-primary bg-yellow-500 text-black hover:bg-yellow-400"
                >
                  <Construction className="h-4 w-4" /> Schedule Visit
                </button>
                <a href={cta.whatsapp} target="_blank" rel="noreferrer" className="button-secondary border-yellow-300/40 text-yellow-100">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Plan
                </a>
              </div>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.7 } }}
            >
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-yellow-500/20 blur-3xl" />
              <div className="absolute -right-6 -bottom-6 h-16 w-16 rounded-full bg-orange-400/20 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-yellow-400/25 shadow-2xl shadow-black/50">
                <img
                  src="/MISTRI.png"
                  alt="Mistri services collage"
                  className="w-full object-cover floating"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {works.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
              custom={index}
              whileHover={{ y: -8, scale: 1.01 }}
              className="surface p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/15 text-yellow-100">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-white/70">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <section className="mt-12 overflow-hidden rounded-[26px] border border-white/12 bg-white/5 p-7 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="badge bg-white/10">Rates</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">Transparent mistri rates</h3>
              <p className="text-white/70">Labour and scope-based pricing with clear inclusions.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock8 className="h-4 w-4" /> Working hours: 8 AM – 6 PM (Sunday on request)
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rates.map((rate, index) => (
              <motion.div
                key={rate.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                custom={index}
                className="rounded-2xl border border-white/12 bg-white/5 p-4 shadow-[0_14px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{rate.label}</p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{rate.value}</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{rate.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/60">*Final rates depend on thickness, height, materials, and site access.</p>
        </section>

        <div className="mt-12 surface-strong p-7 bg-gradient-to-br from-yellow-500/20 via-white/5 to-transparent border border-yellow-400/25">
            <p className="badge bg-yellow-500/20 text-yellow-50">Testimonials</p>
            <div className="mt-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-3"
                >
                  <Quote className="h-6 w-6 text-yellow-200" />
                  <p className="text-lg text-white">“{testimonials[active].quote}”</p>
                  <div className="text-sm text-white/70">
                    <p className="font-semibold text-white">{testimonials[active].name}</p>
                    <p>{testimonials[active].project}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-4 flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`h-2 w-8 rounded-full transition ${
                      idx === active ? 'bg-yellow-400' : 'bg-white/20 hover:bg-white/40'
                    }`}
                    onClick={() => setActive(idx)}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        <div className="mt-12 surface p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="badge bg-white/10">CTA</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">Ready for a site walkthrough?</h3>
              <p className="text-white/70">We map scope, safety, and timelines before we start.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="button-primary bg-yellow-500 text-black hover:bg-yellow-400"
              >
                <Hammer className="h-4 w-4" /> Schedule Visit
              </button>
              <a href={cta.whatsapp} target="_blank" rel="noreferrer" className="button-secondary border-yellow-300/40 text-yellow-100">
                <MessageCircle className="h-4 w-4" /> WhatsApp Plan
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScheduleModal open={open} onClose={() => setOpen(false)} defaultService="Mistri" />
    </div>
  )
}

export default Mistri

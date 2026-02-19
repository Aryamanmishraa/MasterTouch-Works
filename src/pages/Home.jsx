import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PaintRoller, Construction, Users, PhoneCall, MessageCircle, Sparkles, Mail } from 'lucide-react'
import ScheduleModal from '../components/ScheduleModal'

const services = [
  {
    title: 'Painting Services',
    to: '/painting',
    icon: PaintRoller,
    blurb: 'Interior, exterior, and texture walls with masked floors, crisp edges, and designer finishes.',
    accent: 'From ₹12 / sq ft*',
  },
  {
    title: 'Mistri (Construction)',
    to: '/mistri',
    icon: Construction,
    blurb: 'Plaster, brickwork, waterproofing, tiling, and structural fixes with supervised crews.',
    accent: '8 AM – 6 PM crews',
  },
  {
    title: 'Labour Services',
    to: '/labour',
    icon: Users,
    blurb: 'Skilled helpers for loading, unloading, shifting, site prep, and day-rate support.',
    accent: 'Same-day help',
  },
]

const highlights = [
  {
    title: 'End-to-end delivery',
    detail: 'One partner from surface prep to final coat, tiling, and clean handover.',
  },
  {
    title: 'Safety & quality first',
    detail: 'Scaffolded work, dust-safe prep, branded materials, and documented checklists.',
  },
  {
    title: 'Time-boxed execution',
    detail: 'Clear milestones, daily updates, and crews sized to your site speed.',
  },
]

const cta = {
  phone: 'tel:+919162903405',
  whatsapp: 'https://wa.me/919162903405',
  email: 'mailto:satya.painter@email.com',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.5 } }),
}

const hoverCard = {
  rest: { y: 0, scale: 1, rotate: 0 },
  hover: { y: -4, scale: 1.01, rotate: 0, transition: { type: 'spring', stiffness: 220, damping: 20 } },
}

const MotionLink = motion(Link)

function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative overflow-hidden pb-16">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="section-padding relative pt-24 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="badge w-fit bg-white/10 text-white">Premium finishing, on-time delivery</div>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Satya Painter & Decorators
                <span className="block text-brand-200">Wall finishes, interiors, and construction you can trust</span>
              </h1>
              <p className="max-w-2xl text-lg text-white/80">
                We pair designer-grade painting with disciplined site execution—masked floors, sealed leaks, crisp edges, and daily clean-ups. One accountable team for painting, mistri, and labour needs across Delhi NCR.
              </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 border border-white/10">Satya Kumar · Proprietor</span>
              <a href={cta.phone} className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-3 py-1 text-brand-50 border border-brand-500/30">
                <PhoneCall className="h-4 w-4" /> +91 91629 03405
              </a>
              <a href={cta.email} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 border border-white/10">
                <Mail className="h-4 w-4" /> satya.painter@email.com
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => setOpen(true)} className="button-primary">
                <Construction className="h-4 w-4" /> Schedule Visit
              </button>
              <a href={cta.phone} className="button-secondary">
                <PhoneCall className="h-4 w-4" /> Call Now
              </a>
              <a href={cta.whatsapp} className="button-secondary" target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-300" /> 8+ years crews</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-300" /> Daily site photos</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-300" /> Material guidance</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-lg rounded-[28px] border border-white/10 bg-[#0f1116] p-4 shadow-2xl shadow-black/50">
              <div className="absolute -left-6 -top-6 h-16 w-16 rounded-2xl bg-white/5 blur-2xl" />
              <div className="absolute -right-10 top-10 h-20 w-20 rounded-full bg-white/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1582719478171-2f2df46fd9df?auto=format&fit=crop&w=1200&q=70"
                  alt="Interior wall being painted with roller"
                  className="h-[420px] w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-black/50 px-4 py-3 text-sm text-white">
                  <div>
                    <p className="font-semibold">Interior & exterior finishers</p>
                    <p className="text-white/70">Masked floors · Clean edges · Daily updates</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.2em]">On-Site</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="section-padding relative mt-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="badge">Core Services</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Choose what you need</h2>
            <p className="text-white/70">Three focused verticals with trained crews, supervision, and safety checklists.</p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={index}
            >
              <MotionLink
                to={service.to}
                variants={hoverCard}
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                className="surface group block h-full p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-100">{service.accent}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/70">{service.blurb}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
                  Explore <span aria-hidden>→</span>
                </div>
              </MotionLink>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding relative mt-20">
        <div className="glass rounded-3xl p-8 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p className="badge bg-white/10">Why Satya Painter</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Premium walls. Predictable delivery.</h2>
              <p className="mt-2 text-white/70">Aligned crew sizes, supervised work, and brand-grade materials for durable, clean finishes without chaos.</p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-brand-400" /> Turnkey or labour-only scopes</div>
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-brand-400" /> Fixed scope, transparent rates</div>
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-brand-400" /> Daily clean-up, safety briefings</div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                custom={index}
                className="surface rounded-2xl"
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ScheduleModal open={open} onClose={() => setOpen(false)} defaultService="Painting" />
    </div>
  )
}

export default Home

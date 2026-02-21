
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PaintRoller, Construction, Users, PhoneCall, MessageCircle } from 'lucide-react'
import ScheduleModal from '../components/ScheduleModal'

const services = [
  { title: 'Painting', to: '/painting', icon: PaintRoller, note: 'Interior, exterior, texture and putty.' },
  { title: 'Mistri / Civil', to: '/mistri', icon: Construction, note: 'Plaster, brickwork, waterproofing, tiling.' },
  { title: 'Labour', to: '/labour', icon: Users, note: 'Skilled helpers for loading, shifting, site prep.' },
]

const heroStats = [
  { label: 'Homes finished', value: '150+' },
  { label: 'Response time', value: '1 day' },
  { label: 'Years on site', value: '10+' },
]

const cta = {
  phone: 'tel:+919162903405',
  whatsapp: 'https://wa.me/919162903405',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.45 } }),
}

function Home() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative overflow-hidden pb-16">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="section-padding relative pt-18 lg:pt-22">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Local contractor
              <span className="inline-block h-1 w-1 rounded-full bg-brand-200" />
              Delhi NCR
            </div>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl space-y-1">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 180, damping: 16 }}
              >
                Hi, I am Satya Kumar
              </motion.span>
              <motion.span
                className="block text-brand-200"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 180, damping: 16, delay: 0.08 }}
              >
                Painter & Decorator in Delhi NCR
              </motion.span>
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              Painter and decorator who keeps sites neat, timelines honest, and communication clear. Painting, small civil repairs, and labour support with one accountable point of contact.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-white/80">
              <span className="rounded-full bg-white/10 px-3 py-1">Interior and exterior</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Waterproofing and plaster</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Labour you can trust</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => setOpen(true)} className="button-primary">
                Book a visit
              </button>
              <a href={cta.phone} className="button-secondary">
                <PhoneCall className="h-4 w-4" /> Call
              </a>
              <a href={cta.whatsapp} target="_blank" rel="noreferrer" className="button-secondary">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:max-w-lg">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  custom={index}
                  className="rounded-2xl border border-white/15 bg-white/5 p-3 text-center"
                >
                  <p className="font-display text-xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs text-white/70">{item.label}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-white/70">Available 8 AM - 6 PM · Same-day site checks when possible</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-white/15 blur-3xl" />
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[26px] border border-white/12 bg-white/5 shadow-[0_22px_90px_rgba(0,0,0,0.55)]">
              <img
                src={`${import.meta.env.BASE_URL}person.jpeg`}
                alt="Portrait"
                className="h-[440px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <section className="section-padding relative mt-14">
        <div className="mb-6">
          <p className="badge bg-white/10 text-white">Services</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white">What I can help with</h2>
          <p className="text-white/70">Pick a service to see details and samples.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={index}
              className="surface flex flex-col gap-3 p-5"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-brand-100">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-white/70">{service.note}</p>
              <Link to={service.to} className="text-sm font-semibold text-brand-200 hover:text-brand-100">
                View details →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <ScheduleModal open={open} onClose={() => setOpen(false)} defaultService="Painting" />
    </div>
  )
}

export default Home

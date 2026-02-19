import { useState } from 'react'
import { motion } from 'framer-motion'
import { PaintBucket, Brush, Droplets, Sparkles, PhoneCall, MessageCircle, Construction, CheckCircle2 } from 'lucide-react'
import ScheduleModal from '../components/ScheduleModal'

const services = [
  {
    title: 'Interior Painting',
    description: 'Crisp edges, masked floors, and a premium matte or silky finish for living and bedrooms.',
    icon: Brush,
  },
  {
    title: 'Exterior Painting',
    description: 'Weather-shield coats, crack sealing, and algae-resistant finishes built to last.',
    icon: PaintBucket,
  },
  {
    title: 'Wall Putty',
    description: 'Feather-smooth levelling with machine sanding that lets colors look richer and cleaner.',
    icon: Droplets,
  },
  {
    title: 'Texture Design',
    description: 'Designer feature walls—stucco, metallic, concrete, and more with protective top coats.',
    icon: Sparkles,
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=70', // smooth painted wall close-up
  'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1200&q=70', // roller finishing wall
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=70', // masked trim with fresh coat
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=70', // clean finished accent wall
]

const galleryFallback =
  'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=70'

const benefits = [
  { title: '10+ Years Experience', detail: 'Seasoned painting crew with supervised execution for homes and offices.' },
  { title: 'Quality Materials', detail: 'Top-brand emulsions, primers, and waterproof systems selected to spec.' },
  { title: 'On-Time Completion', detail: 'Structured daily targets, masked sites, and clean handovers every evening.' },
  { title: 'Skilled Team', detail: 'Texture artists, putty experts, and color consultants on every project.' },
]

const stats = [
  { value: '1500+', label: 'Homes & sites coated' },
  { value: '48 hrs', label: 'Typical 2BHK repaint' },
  { value: '4.9★', label: 'Client satisfaction' },
]

const cta = {
  phone: 'tel:+919162903405',
  whatsapp: 'https://wa.me/919162903405',
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.07 * i, duration: 0.5, ease: 'easeOut' } }),
}

function Painting() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative overflow-hidden pb-16">
      <div className="absolute inset-0 painting-page-bg" />
      <div className="absolute inset-0 painting-noise" />

      <div className="section-padding relative pt-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/5 shadow-2xl shadow-black/50"
        >
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                'radial-gradient(circle at 18% 25%, rgba(245,165,36,0.24), transparent 35%), radial-gradient(circle at 82% 20%, rgba(61,108,218,0.25), transparent 32%), radial-gradient(circle at 35% 80%, rgba(255,255,255,0.08), transparent 25%), linear-gradient(140deg, #0c1225 0%, #0a1020 35%, #0b1223 70%, #0a0f1b 100%)',
            }}
          />
          <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <p className="badge bg-white/20 text-white">Premium Painting</p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-[1.05] text-white">
                Painting Services
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Professional painting for your home & business with precise masking, smooth putty, and vibrant finishes
                inspired by designer interiors.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/75">
                <span className="rounded-full bg-white/10 px-3 py-1">Affordable & High-Quality</span>
                <span className="rounded-full bg-white/10 px-3 py-1">Residential & Commercial</span>
                <span className="rounded-full bg-white/10 px-3 py-1">Expert Supervised Teams</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={cta.phone}
                  className="button-primary bg-gradient-to-r from-[#f5a524] via-[#f57d24] to-[#f5a524] text-slate-950 shadow-[0_18px_60px_rgba(245,165,36,0.35)] hover:shadow-[0_16px_50px_rgba(245,165,36,0.45)]"
                >
                  <PhoneCall className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={cta.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary border-white/30 bg-white/10 text-white shadow-[0_14px_50px_rgba(61,108,218,0.35)] hover:border-white/60"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  <Construction className="h-4 w-4" /> Free Quote
                </button>
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.7 } }}
            >
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#f5a524]/30 blur-3xl" />
              <div className="absolute -right-8 -bottom-10 h-28 w-28 rounded-full bg-[#3d6cda]/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 shadow-[0_24px_120px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#0a1020]/50" />
                <img
                  src={`${import.meta.env.BASE_URL}PAINTING.png`}
                  alt="Painting services collage"
                  className="w-full object-cover floating"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section className="mt-12 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="badge bg-white/15">Services</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-white">Premium Painting Stack</h2>
              <p className="text-white/70">Exactly like the reference—rounded cards, soft glows, and crisp icons.</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <Sparkles className="h-4 w-4 text-accent-500" />
              Smooth hover lift & glow
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/12 via-white/6 to-white/8 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{
                    background:
                      'radial-gradient(circle at 20% 20%, rgba(245,165,36,0.16), transparent 35%), radial-gradient(circle at 80% 80%, rgba(61,108,218,0.18), transparent 35%)',
                  }}
                  />
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-100 shadow-inner">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Sparkles className="h-4 w-4 text-accent-500 opacity-70" />
                  </div>
                  <h3 className="relative mt-4 font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="relative mt-2 text-sm text-white/75 leading-relaxed">{service.description}</p>
                  <div className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                    <Droplets className="h-4 w-4" /> Premium finish
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mt-14 overflow-hidden rounded-[28px] border border-white/12 bg-white/5 p-7 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="badge bg-white/15">Image Gallery</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-white">See the finish quality</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/75">
              <Sparkles className="h-4 w-4 text-brand-100" /> Clean edges | Texture-ready walls
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {gallery.map((src, index) => (
              <motion.div
                key={src}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070d]/50 opacity-0 transition duration-500 group-hover:opacity-80" />
                <img
                  src={src}
                  alt="Satya Painter & Decorators project"
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  fetchpriority={index === 0 ? 'high' : 'auto'}
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = galleryFallback
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[26px] border border-white/12 bg-gradient-to-br from-[#0f1426] via-[#0c1222] to-[#0b1020] p-7 shadow-[0_22px_90px_rgba(0,0,0,0.5)]">
            <div className="absolute -left-10 top-6 h-24 w-24 rounded-full bg-[#f5a524]/20 blur-3xl" />
            <div className="absolute -right-8 bottom-4 h-24 w-24 rounded-full bg-[#3d6cda]/20 blur-3xl" />
            <div className="relative flex items-center justify-between gap-3">
              <p className="badge bg-white/15">Experience</p>
              <Sparkles className="h-5 w-5 text-accent-500" />
            </div>
            <h3 className="relative mt-3 font-display text-2xl font-semibold text-white">Why choose us</h3>
            <p className="relative text-white/70">Animated check icons, clear promises, and a premium handover every time.</p>
            <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={index}
                  className="flex gap-3 rounded-xl border border-white/12 bg-white/5 p-3"
                >
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/20 text-accent-500 shadow-inner">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{benefit.title}</p>
                    <p className="text-sm text-white/70">{benefit.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-white/12 bg-white/5 p-7 shadow-[0_22px_90px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0" style={{
              background:
                'radial-gradient(circle at 20% 30%, rgba(245,165,36,0.2), transparent 35%), radial-gradient(circle at 80% 70%, rgba(61,108,218,0.22), transparent 30%)',
            }}
            />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="badge bg-white/15">Track record</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">Numbers that match the glow</h3>
              </div>
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">Daily clean-ups</div>
            </div>
            <div className="relative mt-5 grid grid-cols-3 gap-3 text-center">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.45 }}
                  custom={index}
                  className="rounded-xl border border-white/15 bg-white/10 p-4 shadow-inner"
                >
                  <p className="font-display text-xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs text-white/70">{item.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="relative mt-5 flex flex-wrap gap-3 text-sm text-white/75">
              <span className="rounded-full bg-white/10 px-3 py-1">Color consultations</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Masked edges & covers</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Moisture checks</span>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-r from-[#f5a524] via-[#f57d24] to-[#3d6cda] p-8 shadow-[0_24px_120px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.18),transparent_30%)] opacity-70" />
            <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex flex-wrap gap-3">
                <a
                  href={cta.phone}
                  className="button-primary bg-slate-950 text-white shadow-[0_16px_60px_rgba(0,0,0,0.35)] hover:bg-slate-900"
                >
                  <PhoneCall className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={cta.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/30 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/60"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="fixed bottom-5 right-5 z-40 md:hidden">
        <div className="flex gap-3">
          <a href={cta.phone} className="button-primary shadow-lg shadow-brand-900/40">
            <PhoneCall className="h-4 w-4" /> Call
          </a>
          <a href={cta.whatsapp} target="_blank" rel="noreferrer" className="button-secondary">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>

      <ScheduleModal open={open} onClose={() => setOpen(false)} defaultService="Painting" />
    </div>
  )
}

export default Painting

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Painting from './pages/Painting'
import Mistri from './pages/Mistri'
import Labour from './pages/Labour'

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -18 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen gradient-surface text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute inset-0 grid-pattern" />
      </div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} className="relative flex-1 pb-16">
          <PageTransition>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/painting" element={<Painting />} />
              <Route path="/mistri" element={<Mistri />} />
              <Route path="/labour" element={<Labour />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageTransition>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

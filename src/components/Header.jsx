import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#problem', label: 'The Problem', type: 'anchor' },
    { href: '#solution', label: 'Our Solution', type: 'anchor' },
    { href: '#technology', label: 'Technology', type: 'anchor' },
    { href: '#pricing', label: 'Pricing', type: 'anchor' },
    { href: '/press', label: 'Press', type: 'route' }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/DefenX_Logo.png" 
                alt="DefenX Logo" 
                className="h-8 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-700 hover:text-burgundy transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-burgundy transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
            <a href="mailto:sgubba@terpmail.umd.edu" className="btn-primary">
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white rounded-lg shadow-elegant mt-2 py-4"
          >
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-burgundy hover:bg-cream transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-burgundy hover:bg-cream transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <div className="px-4 pt-2">
              <a href="mailto:sgubba@terpmail.umd.edu" className="btn-primary w-full block text-center">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header

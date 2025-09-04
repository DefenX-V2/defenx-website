import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  return (
    <footer id="contact" className="bg-white text-gray-900">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <img 
                src="/images/DefenX_Logo.png" 
                alt="DefenX Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Comprehensive school safety solution providing AI-powered detection, 
              real-time tracking, instant communication, and post-incident support.
            </p>
            <p className="text-burgundy font-semibold text-lg">
              Safety isn't a privilege — it's a guarantee.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row justify-center gap-6 text-sm"
          >
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4 text-burgundy" />
              <span className="text-gray-600">teamdefenx@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 text-burgundy" />
              <span className="text-gray-600">(202) 763-9058</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4 text-burgundy" />
              <span className="text-gray-600">College Park, MD</span>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="bg-gradient-to-r from-burgundy to-dark-red rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Protect Your School?</h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join schools across the nation in creating safer learning environments. 
              Schedule a demo today and see DefenX in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-burgundy font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-burgundy transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-burgundy text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-500 hover:text-burgundy transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              {/* Copyright */}
              <div className="text-gray-500 text-sm">
                © 2024 DefenX. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

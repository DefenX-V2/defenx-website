import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-burgundy/10 text-burgundy px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4 mr-2" />
              Comprehensive School Safety Solution
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Protecting Those Who
              <span className="text-gradient block">Protect Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              DefenX provides comprehensive school safety through AI-powered detection, real-time tracking, 
              instant communication, and post-incident support. Because safety isn't a privilege — it's a guarantee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="mailto:sgubba@terpmail.umd.edu" className="btn-primary flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1loNTe5-RF-wZDM4AfJkKO5wmT43oJlta/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-burgundy">99%</div>
                <div className="text-sm text-gray-600">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burgundy">50ms</div>
                <div className="text-sm text-gray-600">Detection Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burgundy">2sec</div>
                <div className="text-sm text-gray-600">Alert Delivery</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-elegant p-8">
              <div className="aspect-video bg-gradient-to-br from-burgundy/10 to-burgundy/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-burgundy mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Protection</h3>
                  <p className="text-gray-600">AI-powered detection and tracking system</p>
                </div>
              </div>
              
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-burgundy/5 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-burgundy/10 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Clock, TrendingUp } from 'lucide-react'

const Problem = () => {
  const stats = [
    {
      icon: AlertTriangle,
      number: "390K+",
      label: "Students experienced gun violence",
      description: "Since 1999 in the U.S."
    },
    {
      icon: TrendingUp,
      number: "$350K+",
      label: "Spent on failing safety systems",
      description: "Current solutions often fail when needed most"
    },
    {
      icon: Clock,
      number: "5min",
      label: "Average school shooting duration",
      description: "Lives lost every 5-15 seconds"
    },
    {
      icon: DollarSign,
      number: "$100/cam",
      label: "Legacy system costs",
      description: "Per camera per month"
    }
  ]

  const problems = [
    "Only detect gunshot sounds, leading to false alarms and panic",
    "Don't provide communication and support to the police, wasting precious minutes",
    "Complex systems that are difficult to use during emergencies", 
    "Prohibitively expensive with high subscription and maintenance fees",
    "Often fail when schools need them most - these failures cost lives"
  ]

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Problem We're
            <span className="text-gradient"> Solving</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As students, we've experienced how much education shapes our futures. Behind every lesson and every challenge, 
            there were teachers, coaches, and peers who guided us, inspired us, and created an environment where we felt safe to thrive.
            But while they've always protected us—who is protecting them?
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-cream to-light-cream rounded-xl p-6 text-center shadow-elegant hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-burgundy/10 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-burgundy" />
              </div>
              <div className="text-3xl font-bold text-burgundy mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Current System Problems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Current Systems Are Failing
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Schools are spending hundreds of thousands of dollars on safety systems that often fail 
                when they're needed most. These failures aren't just technical flaws — they cost lives.
              </p>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-elegant">
                <div className="text-center mb-6">
                  <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900">Critical Gap</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">Detection Delay</span>
                    <span className="text-red-600 font-semibold">2-5 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">False Alarms</span>
                    <span className="text-red-600 font-semibold">High</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">Police Response</span>
                    <span className="text-red-600 font-semibold">Delayed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-8">
            We need something that is <strong>simple</strong>, <strong>reliable</strong>, 
            and provides <strong>comprehensive protection</strong> for schools.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-dark-red mx-auto"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem

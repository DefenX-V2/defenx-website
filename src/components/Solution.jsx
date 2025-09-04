import React from 'react'
import { motion } from 'framer-motion'
import { Eye, MapPin, MessageSquare, Heart, Users, Award } from 'lucide-react'

const Solution = () => {
  const pillars = [
    {
      icon: Eye,
      title: "Detection",
      description: "State-of-the-art AI model with 99% mean average precision and mobile app verification",
      features: ["99% mean average precision", "Detection in under 50 milliseconds", "Mobile app verification", "40% false positive reduction"]
    },
    {
      icon: MapPin,
      title: "Tracking",
      description: "Persistent tracking across all cameras, even when weapons are concealed",
      features: ["Persistent cross-camera tracking", "Concealed weapon tracking", "Real-time intelligence updates", "Red dots for live location, yellow for last known"]
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Role-based mobile alerts and wearable PIN devices for instant coordination",
      features: ["Under 2-second notification delivery", "Role-segmented alerts", "One-press PIN devices", "Unified response coordination"]
    },
    {
      icon: Heart,
      title: "Post-Incident Support",
      description: "Comprehensive recovery framework with AI analysis and mental health resources",
      features: ["24-hour automatic video storage", "AI-powered incident analysis", "Mental health guides"]
    }
  ]

  const teamStats = [
    { number: "200+", label: "Stakeholder Interviews" },
    { number: "< 2hr", label: "Setup Time" },
    { number: "15", label: "Camera Streams Supported" }
  ]

  return (
    <section id="solution" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet
            <span className="text-gradient"> DefenX</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive school safety solution built around four core pillars, 
            designed with insights from over 200 stakeholder interviews.
          </p>
        </motion.div>

        {/* Team Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 mb-16 shadow-elegant"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Built by Students, For Schools</h3>
              <p className="text-lg text-gray-600 mb-6">
                We invested significant time and effort reaching out to and interviewing over 200 stakeholders, 
                including teachers, students, researchers, police, and other community members. By gathering this 
                breadth of perspectives, we gained a deep understanding of the school environment and used those 
                insights to shape DefenX into a solution that addresses real-world needs, safeguards privacy, 
                and integrates seamlessly into existing systems.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-dark-red rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-600">Deep stakeholder insights drive our design</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-cream rounded-lg"
                >
                  <div className="text-2xl font-bold text-burgundy mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Four Pillars */}
        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center mr-4">
                  <pillar.icon className="w-6 h-6 text-burgundy" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{pillar.description}</p>
              
              <div className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-burgundy rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-elegant"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Works with Your Existing Infrastructure
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            DefenX works with the IP cameras schools already have. We provide AI-powered detection, tracking, 
            communication, and post-incident support, plus a setup interface and cloud backend. Choose from 
            local deployment for maximum privacy or cloud deployment for lower costs and easier scalability. 
            Setup takes less than 2 hours—go from unprotected to fully secured in one afternoon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Schedule Demo</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution

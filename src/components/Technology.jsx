import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Camera, Smartphone, Wifi, Zap, Shield, MapPin, MessageCircle } from 'lucide-react'

const Technology = () => {
  const [activeTab, setActiveTab] = useState('detection')

  const tabs = [
    { id: 'detection', label: 'AI Detection', icon: Cpu },
    { id: 'tracking', label: 'Live Tracking', icon: MapPin },
    { id: 'communication', label: 'Communication', icon: MessageCircle },
    { id: 'pins', label: 'PIN Devices', icon: Shield }
  ]

  const techSpecs = {
    detection: {
      title: "AI-Powered Detection System",
      description: "Our state-of-the-art model runs on NVIDIA RTX GPU for fast, secure on-site processing.",
      features: [
        { icon: Zap, text: "Under 50 milliseconds detection time" },
        { icon: Cpu, text: "NVIDIA RTX GPU processing" },
        { icon: Shield, text: "99% mean average precision" },
        { icon: Camera, text: "Mobile app verification" }
      ],
      visual: (
        <div className="bg-gradient-to-br from-burgundy/10 to-burgundy/20 rounded-xl p-8 text-center">
          <Cpu className="w-16 h-16 text-burgundy mx-auto mb-4" />
          <div className="text-sm text-gray-600 mb-2">Detection Confidence</div>
          <div className="text-3xl font-bold text-burgundy mb-4">99%</div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Mean Average Precision</span>
              <span className="text-green-600">99%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Mobile Verification</span>
              <span className="text-green-600">40% reduction in false positives</span>
            </div>
          </div>
        </div>
      )
    },
    tracking: {
      title: "Real-Time Location Tracking",
      description: "Persistent tracking across all cameras, even when weapons are concealed.",
      features: [
        { icon: MapPin, text: "Persistent cross-camera tracking" },
        { icon: Camera, text: "Concealed weapon tracking" },
        { icon: Zap, text: "Real-time intelligence updates" },
        { icon: Wifi, text: "Red dots = active, yellow = last known" }
      ],
      visual: (
        <div className="bg-gradient-to-br from-burgundy/10 to-burgundy/20 rounded-xl p-8">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`aspect-square rounded ${i === 4 ? 'bg-red-500' : i === 1 || i === 7 ? 'bg-yellow-400' : 'bg-gray-200'} flex items-center justify-center`}>
                {i === 4 && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                {(i === 1 || i === 7) && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Live Tracking Status</div>
            <div className="flex justify-center space-x-4 text-xs">
              <div className="flex items-center"><div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>Active</div>
              <div className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>Last Known</div>
            </div>
          </div>
        </div>
      )
    },
    communication: {
      title: "Multi-Level Alert System",
      description: "Role-based notifications ensure the right people get the right information at the right time.",
      features: [
        { icon: Smartphone, text: "Under 2-second delivery" },
        { icon: MessageCircle, text: "3-tier alert system" },
        { icon: Shield, text: "Role-segmented notifications" },
        { icon: Zap, text: "Unified response coordination" }
      ],
      visual: (
        <div className="bg-gradient-to-br from-burgundy/10 to-burgundy/20 rounded-xl p-8">
          <Smartphone className="w-12 h-12 text-burgundy mx-auto mb-4" />
          <div className="space-y-3">
            <div className="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <div className="text-sm font-semibold text-red-700">HIGH PRIORITY</div>
              <div className="text-xs text-red-600">All staff, students</div>
            </div>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <div className="text-sm font-semibold text-yellow-700">MEDIUM PRIORITY</div>
              <div className="text-xs text-yellow-600">Teachers, staff, admins</div>
            </div>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <div className="text-sm font-semibold text-blue-700">LOW PRIORITY</div>
              <div className="text-xs text-blue-600">Admins, security only</div>
            </div>
          </div>
        </div>
      )
    },
    pins: {
      title: "Wearable PIN Devices",
      description: "Designed for busy teachers and staff who don't always have time to check their phones. One press verifies or reports a threat, with no screen needed.",
      features: [
        { icon: Shield, text: "One-press verification or reporting" },
        { icon: Zap, text: "No screen needed - simple operation" },
        { icon: Wifi, text: "Light up when alerts are sent" },
        { icon: Camera, text: "Perfect for busy educators" }
      ],
      visual: (
        <div className="bg-gradient-to-br from-burgundy/10 to-burgundy/20 rounded-xl p-8 text-center">
          <div className="relative mx-auto w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-sm text-gray-600 mb-2">PIN Device Status</div>
          <div className="text-burgundy font-semibold">Ready to Report</div>
        </div>
      )
    }
  }

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advanced
            <span className="text-gradient"> Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive technology stack provides fast, reliable, and secure school safety solutions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-burgundy text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-cream to-light-cream rounded-2xl p-8 lg:p-12 shadow-elegant"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {techSpecs[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {techSpecs[activeTab].description}
              </p>
              
              <div className="space-y-4">
                {techSpecs[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-burgundy/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-burgundy" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              {techSpecs[activeTab].visual}
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl p-6 shadow-elegant text-center">
            <Cpu className="w-12 h-12 text-burgundy mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">On-Site Processing</h4>
            <p className="text-gray-600">NVIDIA RTX GPU ensures fast, secure local processing</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-elegant text-center">
            <Camera className="w-12 h-12 text-burgundy mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Camera Integration</h4>
            <p className="text-gray-600">Works with existing IP cameras, setup in under 2 hours</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-elegant text-center">
            <Wifi className="w-12 h-12 text-burgundy mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Cloud Backend</h4>
            <p className="text-gray-600">Syncs everything across your team securely</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technology

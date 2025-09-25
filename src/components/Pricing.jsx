import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Check } from 'lucide-react'

const Pricing = () => {
  const pricingFeatures = [
    "AI monitoring for up to 15 camera streams",
    "Real-time detection and tracking",
    "Mobile app with multi-level alerts",
    "PIN devices for staff",
    "Dashboard access and analytics",
    "Post-incident support and analysis",
    "24-hour video storage",
    "Mental health resources",
    "Setup and training included"
  ]

  const comparison = [
    { feature: "Monthly Cost", legacy: "$100 per camera", defenx: "3x less expensive" },
    { feature: "Detection Accuracy", legacy: "97% industry average", defenx: "99% mean average precision" },
    { feature: "Detection Speed", legacy: "Minutes", defenx: "Under 50 milliseconds" },
    { feature: "Tracking Capability", legacy: "Stops at detection", defenx: "Persistent, even concealed" },
    { feature: "Alert Delivery", legacy: "Delayed", defenx: "Under 2 seconds" },
    { feature: "Deployment Options", legacy: "One-size-fits-all", defenx: "Local or cloud options" }
  ]



  return (
    <section id="pricing" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Affordable
            <span className="text-gradient"> Protection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The current market is broken from a cost perspective. Legacy systems charge close to $100 
            per camera stream per month, while some deployments range from $65,000 to $90,000 per square mile. 
            DefenX provides an affordable and effective alternative that leverages existing infrastructure.
          </p>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl shadow-elegant p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Choose Your Deployment Option
              </h3>
              <p className="text-gray-600">
                We offer three main school sizes, each with a varying number of camera streams depending on GPU requirements.
              </p>
            </div>
            
            {/* Deployment Cards */}
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {/* Local Deployment */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                  <h4 className="text-lg font-bold text-gray-900">Local Deployment</h4>
                </div>
                <p className="text-gray-600 text-center mb-6">Maximum privacy and control</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="text-sm font-medium text-gray-700">Initial Setup Fee</span>
                    <span className="text-sm font-bold text-gray-900">Contact Us</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="text-sm font-medium text-gray-700">Annual Subscription</span>
                    <span className="text-sm font-bold text-gray-900">Contact Us</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-gray-700">
                    High-compute technology installed on-premises for maximum privacy, with no data leaving the premises
                  </p>
                </div>
              </div>

              {/* Cloud Deployment */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                  <h4 className="text-lg font-bold text-gray-900">Cloud Deployment</h4>
                </div>
                <p className="text-gray-600 text-center mb-6">Lower costs and easy scaling</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="text-sm font-medium text-gray-700">Initial Setup Fee</span>
                    <span className="text-sm font-bold text-gray-900">Contact Us</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="text-sm font-medium text-gray-700">Annual Subscription</span>
                    <span className="text-sm font-bold text-gray-900">Contact Us</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-gray-700">
                    Ideal for schools that prefer lower upfront costs and easier scalability
                  </p>
                </div>
              </div>
            </div>

            {/* Both Options Include Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Both Options Include
                </h3>
                <p className="text-gray-600 text-sm">All features and services included with either deployment choice</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Features Column */}
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-4">
                    {pricingFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits & CTA Column */}
                <div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose DefenX?</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Cost Effective</p>
                          <p className="text-xs text-gray-600">3x less expensive than competitors</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Superior Accuracy</p>
                          <p className="text-xs text-gray-600">99% precision detection</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Flexible Options</p>
                          <p className="text-xs text-gray-600">Local or cloud deployment</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Quick Setup</p>
                          <p className="text-xs text-gray-600">Less than 8 hours to full deployment</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="mailto:sgubba@terpmail.umd.edu" className="btn-primary w-full mb-3 text-sm py-3 block text-center">
                    Get Started Today
                  </a>
                  <button className="btn-secondary w-full text-sm py-3">
                    Schedule Demo
                  </button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    60%+ gross margin maintained across all plans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Pricing

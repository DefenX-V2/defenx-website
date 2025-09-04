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

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl shadow-elegant overflow-hidden">
            <div className="bg-burgundy text-white text-center py-6">
              <h3 className="text-2xl font-bold mb-2">DefenX Complete</h3>
              <p className="text-burgundy-100">Comprehensive school safety solution</p>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-gray-900">$10,000</span>
                      <span className="text-gray-600 ml-2">or less setup</span>
                    </div>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold text-burgundy">$99</span>
                      <span className="text-gray-600 ml-2">per month</span>
                    </div>
                    <p className="text-gray-600">
                      We offer flexible pricing for different school sizes with varying camera streams. 
                      Choose onsite processing for maximum privacy or cloud processing for lower costs.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h4>
                    {pricingFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="lg:pl-8">
                  <div className="bg-cream rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Cost Savings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Legacy systems (monthly)</span>
                        <span className="text-red-600 font-semibold">$750+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">DefenX (monthly)</span>
                        <span className="text-green-600 font-semibold">$99</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="font-semibold">Monthly Savings</span>
                        <span className="text-burgundy font-bold">$651+</span>
                      </div>
                    </div>
                  </div>

                  <button className="btn-primary w-full mb-4">
                    Get Started Today
                  </button>
                  <button className="btn-secondary w-full">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-elegant overflow-hidden mb-16"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              DefenX vs Legacy Systems
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-red-600">Legacy Systems</th>
                    <th className="text-center py-4 px-6 font-semibold text-burgundy">DefenX</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-red-600">{row.legacy}</td>
                      <td className="py-4 px-6 text-center text-green-600 font-semibold">{row.defenx}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

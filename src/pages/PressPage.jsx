import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Building2, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const PressPage = () => {
  const pressArticles = [
    {
      id: 1,
      title: "Student Entrepreneurs Win $250K to Develop Tech to Detect Guns, Track Suspects in Schools",
      publication: "Maryland Today",
      date: "September 11, 2025",
      excerpt: "Team DefenX celebrates winning the school safety-themed Xperience competition at NEXPLORE 2040 held at Amazon HQ2. The $250,000 award will help develop AI technology that detects weapons and tracks suspects while providing automatic alerts to school staff.",
      imageUrl: "https://picsum.photos/400/250?random=1",
      link: "https://today.umd.edu/student-entrepreneurs-win-250k-to-develop-tech-to-detect-guns-track-suspects-in-schools",
      category: "Award",
      featured: true
    },
    {
      id: 2,
      title: "UMD students awarded $250,000 for school shooting detection AI tool",
      publication: "The Diamondback",
      date: "September 12, 2025",
      excerpt: "A team of 12 University of Maryland students won $250,000 after placing first in a competition to design artificial intelligence software that automatically reports school shootings to authorities.",
      imageUrl: "https://picsum.photos/400/250?random=2",
      link: "https://dbknews.com/2025/09/12/umd-defenx-school-shootings-ai-toold/",
      category: "Competition",
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center text-burgundy hover:text-dark-red transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Back to DefenX</span>
            </Link>
            <div className="flex items-center">
              <img src="/images/DefenX_Logo.png" alt="DefenX Logo" className="h-8" />
            </div>
          </div>
        </div>
      </nav>

      {/* Press Page Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              News &amp; <span className="text-gradient">Press</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay updated with the latest news about DefenX and our mission to make schools safer through innovative AI technology.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {pressArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-elegant overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      article.featured 
                        ? 'bg-burgundy text-white' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      <Building2 className="w-3 h-3 mr-1" />
                      {article.featured ? 'Featured' : article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span className="font-medium">{article.publication}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-burgundy text-white px-4 py-2 rounded-lg font-medium hover:bg-dark-red transition-colors duration-300 text-sm"
                  >
                    Read Full Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}

export default PressPage

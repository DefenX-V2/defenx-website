import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Technology from '../components/Technology'
import Pricing from '../components/Pricing'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <Pricing />
    </div>
  )
}

export default HomePage

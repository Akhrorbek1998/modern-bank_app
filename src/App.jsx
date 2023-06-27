import React from 'react'
import { Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Stats, Testimonials } from "./components"
import { styles } from './utils/style'

const App = () => {
  return (
    <div className={`bg-primary w-full overflow-hidden`}>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
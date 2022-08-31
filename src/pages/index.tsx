import React from 'react'

import Analytics from '../components/Analytics'
import Banner from '../components/Banner'
import MainHero from '../components/Content'
import MainHeroImage from '../components/ContentImage'
import Teams from '../components/Teams'
import Footer from '../components/Footer'
import MenuComponent from '../components/Header'
import LazyShow from '../components/LazyShow'
import Product from '../components/Product'
import Timeline from '../components/Timeline'
import Introduce from 'src/components/Introduce'
import MeetOurTeam from 'src/components/MeetOurTeam'

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden font-whyte text-500`}>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div className="max-w-7xl mx-auto h-[1333px] relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <MenuComponent />
          <Banner />
        </div>
      </div>
      <LazyShow>
        <>
          <Introduce/>
          {/* <MainHeroImage /> */}
          {/* <MainHero /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          <MeetOurTeam/>
          {/* <Teams /> */}
        </>
      </LazyShow>
      <LazyShow>
        {/* <Product /> */}
        <MeetOurTeam/>

      </LazyShow>
      <LazyShow>
        <>
          <Timeline />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  )
}

export default App

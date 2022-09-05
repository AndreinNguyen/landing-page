import React from 'react'

import Introduce from 'src/components/Introduce'
import MeetOurTeam from 'src/components/MeetOurTeam'
import OurProduct from 'src/components/OurProduct'

import Analytics from '../components/Analytics'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import MenuComponent from '../components/Header'
import LazyShow from '../components/LazyShow'
import Timeline from '../components/Timeline'

const App = () => {
  return (
    <div className={`bg-background grid gap-y-1 overflow-hidden font-whyte text-500`}>
      <div id="banner" className="bg-hero-pattern bg-no-repeat bg-bottom bg-mobile md:bg-desktop ">
        <div className="max-w-7xl mx-auto h-[600px] md:h-[900px] relative z-10">
          <MenuComponent />
          <Banner />
        </div>
      </div>
      <LazyShow>
        <>
          <Introduce />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <MeetOurTeam />
        </>
      </LazyShow>
      <LazyShow>
        <OurProduct />
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

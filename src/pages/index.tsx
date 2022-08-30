import React from 'react'

import Analytics from '../components/Analytics'
import Banner from '../components/Banner'
import Canvas from '../components/Canvas'
import MainHero from '../components/Content'
import MainHeroImage from '../components/ContentImage'
import Teams from '../components/Teams'
import Footer from '../components/Footer'
import MenuComponent from '../components/Header'
import LazyShow from '../components/LazyShow'
import Product from '../components/Product'
import Timeline from '../components/Timeline'

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden font-krona-one`}>
      <div
        className={`bg-hero-pattern bg-cover bg-no-repeat bg-bottom-custom relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen `}
      >
        <MenuComponent />
        <Banner />
      </div>
      <LazyShow>
        <div>
          <div className="flex">
            <MainHeroImage />
            <MainHero />
          </div>
          <Canvas />
        </div>
      </LazyShow>
      <LazyShow>
        <>
          <Teams />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Product />
      </LazyShow>
      <LazyShow>
        <>
          <Timeline />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  )
}

export default App

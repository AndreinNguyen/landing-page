import React from 'react';

import Analytics from '../components/Analytics';
import Banner from '../components/Banner';
import Canvas from '../components/Canvas';
import Content from '../components/Content';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import Pricing from '../components/Product';
import Timeline from '../components/Timeline';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <Banner />
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          <Content />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
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
  );
};

export default App;

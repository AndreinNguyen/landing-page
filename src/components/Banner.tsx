import React from 'react';

import config from '../config/index.json';

const Banner = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-center text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <p className="block xl:inline">{mainHero.title}</p>{' '}
        </h1>
        <h1 className="text-center text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <p className="block xl:inline">{mainHero.subtitle}</p>{' '}
        </h1>
      </div>
    </main>
  );
};

export default Banner;

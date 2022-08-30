import React from 'react';

import config from '../config/index.json';

const Content = () => {
  const { content } = config;

  return (
    <section
      className={`mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`}
      id="content"
    >
      <div className={``}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {content.title}
        </h1>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {content.subtitle}
        </h1>
        <p className={`text-gray-600`}>{content.description}</p>
      </div>
    </section>
  );
};

export default Content;

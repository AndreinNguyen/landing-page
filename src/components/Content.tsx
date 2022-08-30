import React from 'react';

import config from '../config/index.json';

const Content = () => {
  const { content } = config;

  return (
    <section className={`bg-background py-8`} id="content">
      <div className={``}>
        <h1>image</h1>
      </div>
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

import React from 'react';

import config from '../config/index.json';

const Footer = () => {
  const { company, footer } = config;
  const { logo, name: companyName } = company;
  const { description, sections } = footer;

  return (
    <div
      id="footer"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          <p>@Copyright</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

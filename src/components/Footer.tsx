import React from 'react'

import { Link } from 'react-scroll'

import config from '../config/index.json'

const Footer = () => {
  const { company, footer } = config
  const { logo, name: companyName } = company
  const { sections, description } = footer

  return (
    <div className="bg-footer bg-center bg-cover bg-no-repeat py-20">
      <div id="footer" className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 ">
        <div className="flex flex-col items-center justify-center text-whiteCustom">
          <div>
            <img src={logo} alt={companyName} className="h-10 md:h-24 py-2 md:py-8" />
          </div>
          <div className="mt-2">
            <p className={`max-w-lg text-center mx-auto text-base font-normal mb-8`}>{description}</p>
          </div>
          <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
            {sections.map((section, index) =>
              !section.link ? (
                <Link
                  key={`${section.name}-${index}`}
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  to={section.href}
                  className="hover:text-primary text-base cursor-pointer leading-4 dark:text-gray-400 dark:hover:text-white"
                >
                  {section.name}
                </Link>
              ) : (
                <a
                  href={section.link}
                  target="_blank"
                  className="hover:text-primary text-base cursor-pointer leading-4 dark:text-gray-400 dark:hover:text-white"
                  rel="noreferrer"
                >
                  {section.name}
                </a>
              ),
            )}
          </div>
          <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
            <p>@Copyright</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer

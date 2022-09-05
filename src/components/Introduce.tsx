import React from 'react'

import config from '../config/index.json'

const Introduce = () => {
  const { introduce } = config

  return (
    <section className={`bg-background py-1`} id="about-us">
      <div className={`container max-w-7xl mx-auto`}>
        <div className={`relative flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 pr-6 md:p-6`}>
            <img className="h-6/6" src="/assets/images/Content.png" alt="Introduce" />
          </div>
          <div className={`hidden md:block absolute right-0 transform translate-x-28 -translate-y-28 z-0`}>
            <img className="h-6/6" src="/assets/images/Circle.png" alt="Introduce" />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-3 flex justify-center items-center z-30`}>
            <div className={`align-middle`}>
              <h3 className={`text-4xl md:text-5xl text-whiteCustom font-medium leading-none mb-3`}>
                {introduce.title}
              </h3>
              <h4 className={`text-2xl md:text-4xl text-whiteCustom font-medium leading-none mb-3`}>
                {introduce.subtitle1}
              </h4>
              <h4 className={`text-2xl md:text-4xl text-whiteCustom font-medium leading-none mb-3`}>
                {introduce.subtitle2}
              </h4>
              <p className={`text-base md:text-2xl text-whiteCustom  font-normal mb-8`}>{introduce.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduce

import React from 'react'

import config from '../config/index.json'

const MeetOurTeam = () => {
  const { teams } = config

  // Add background color
  Object.defineProperty(teams.items[0], 'backgroundColor', {
    value: '#828282',
    configurable: true,
  })
  Object.defineProperty(teams.items[1], 'backgroundColor', {
    value: '#4F4F4F',
    configurable: true,
  })
  Object.defineProperty(teams.items[2], 'backgroundColor', {
    value: '#0037C2',
    configurable: true,
  })
  Object.defineProperty(teams.items[3], 'backgroundColor', {
    value: '#4F4F4F',
    configurable: true,
  })
  Object.defineProperty(teams.items[4], 'backgroundColor', {
    value: '#828282',
    configurable: true,
  })

  return (
    <section className={`bg-background py-8`} id="our-team">
      <div className={`container max-w-7xl mx-auto p-6 pb-12`}>
        <div className="relative align-middle">
          <h1 className={`w-full my-2 text-4xl font-medium leading-tight text-center text-whiteCustom z-50`}>
            {teams.title}
          </h1>
          <div
            className={`absolute opacity-70 transform translate-x-1/5 -translate-y-1/2 md:-translate-y-1/2 md:translate-x-1/4 z-0`}
          >
            <img className="h-full md:w-1/2" src="/assets/images/circle-bg-2.png" alt="Introduce" />
          </div>
          {/* <p className={`max-w-lg text-center mx-auto text-base md:text-2xl text-whiteCustom font-normal mb-8`}>
            Scelerisque sit orci tempor inceptos felis, tristique consectetur fringilla, erat auctor aliquet mauris nisi
            ultrices hac ut commodo, aenean aliquam mi per diam senectus, sapien dictumst proin morbi commodo et
            vehicula, consequat fusce ut erat pellentesque himenaeos, porta lorem dictumst per primis, praesent
          </p> */}
        </div>
        <div className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 z-50`}>
          {teams.items.map((el: any) => (
            <div
              key={el.name}
              style={{ backgroundColor: `${el.backgroundColor}` }}
              className={`flex flex-col w-5/6 lg:w-1/5 mx-auto lg:mx-4 rounded-xl mt-4 `}
            >
              <div className="flex justify-end px-4 pt-4">
                <div
                  id="dropdown"
                  className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                >
                  <ul className="py-1" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 text-s hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 text-s hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Export Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center pb-5">
                <img
                  className="mb-3 rounded-full shadow-lg"
                  src={el.icon}
                  alt="Bonnie image"
                  width="200px"
                  height="200px"
                />
                <h5 className="mb-1 text-xl font-medium text-whiteCustom2">{el.position}</h5>
                <span className="text-sm text-whiteCustom2">{el.name}</span>
              </div>
              {/* <div className={`flex-1 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}>
                <div className={`p-8 text-3xl font-bold text-center border-b-4`}>{firstPlan?.name}</div>
                <ul className={`w-full text-center text-sm`}>
                  {firstPlan?.features.map((feature) => (
                    <li className={`py-4`} key={`${firstPlan.name}-${feature}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                <div className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}>
                  {firstPlan?.price}
                  <span className={`text-base`}> {firstPlan?.priceDetails}</span>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetOurTeam

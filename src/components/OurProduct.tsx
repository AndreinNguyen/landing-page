import React from 'react'

const OurProduct = () => {
  return (
    <section className={`bg-background py-8`} id="products">
      <div className={`container max-w-7xl mx-auto p-6 pb-12`}>
        <div className="align-middle md:max-w-6xl md:mx-auto">
          <h1 className={`w-full my-2 text-4xl font-medium leading-tight text-center md:text-left text-whiteCustom`}>Our product</h1>
          <p className={`max-w-lg md:max-w-none text-center mx-auto text-base md:text-2xl text-whiteCustom font-normal mb-8 md:text-left`}>
            Scelerisque sit orci tempor inceptos felis, tristique consectetur fringilla, erat aucto
          </p>
        </div>
        <div className={`flex flex-col sm:flex-row justify-around pt-12 my-12 sm:my-4`}>
          {[0, 1, 2, 3].map(() => (
            <div
              className={`relative flex flex-col w-5/6 lg:w-1/5 mx-auto lg:mx-4 bg-product bg-cover bg-no-repeat rounded-xl mt-4 h-[400px] bg-center box-border`}
            >
              <div className="absolute m-2 bottom-0 w-[calc(100%-16px)] bg-gradient-to-b from-[#222222] to-[rgba(0, 0, 0, 0.25)] rounded-2xl h-20 shadow-productInfo p-2">
                <h5 className="mb-1 text-xl font-medium text-whiteCustom dark:text-white">Mind</h5>
                <span className="text-xs text-whiteCustom dark:text-gray-400">Description</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProduct

import React from 'react';
import Image from 'next/image';
import ContentImg from 'public/assets/images/Content.png';


const Introduce = () => {
  return (
    <section className={`bg-background py-1`} id="product">
      <div className={`container max-w-7xl mx-auto`}>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 pr-6 md:p-6`}>
            <Image
              className="h-6/6"
              src={ContentImg}
              alt="Introduce"
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-3 flex justify-center items-center`}>
            <div className={`align-middle`}>
              <h3
                className={`text-4xl md:text-5xl text-whiteCustom font-medium leading-none mb-3`}
              >
                Savvycom.ai
              </h3>
              <h4
                className={`text-2xl md:text-4xl text-whiteCustom font-medium leading-none mb-3`}
              >
                An AI & BLOCKCHAIN 
              </h4>
              <h4
                className={`text-2xl md:text-4xl text-whiteCustom font-medium leading-none mb-3`}
              >
                disruptive intergration
              </h4>
              <p className={`text-base md:text-2xl text-whiteCustom  font-normal mb-8`}>
              Scelerisque sit orci tempor inceptos felis, tristique consectetur fringilla, erat auctor aliquet mauris nisi ultrices hac ut commodo, aenean aliquam mi per diam senectus, sapien dictumst proin morbi commodo et vehicula, consequat fusce ut erat pellentesque himenaeos, porta lorem dictumst per primis, praesent 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;

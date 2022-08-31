import React from 'react';
import Image from 'next/image';
import ContentImg from 'public/assets/images/Content.png';


const Introduce = () => {
  const product = {
    "title": "React landing page 2021",
    "items": [
      {
        "title": "A plug n play template",
        "description": "Just edit the config.json file with details about your company and voila your beautiful state of the art landing page is ready to go live! Remember to also update your assets, add any images you want to show to /assets/images and link them in the config.json",
        "img": "/assets/images/product1.jpg"
      },
      {
        "title": "Make it your own!",
        "description": "Play around with the theme.ts file and configure the color palette to match the branding of your company! If you're feeling wild, maybe change some tailwind css as well!",
        "img": "/assets/images/product2.jpg"
      }
    ]
  }
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-7xl mx-auto m-8`}>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <Image
              className="h-6/6"
              src={ContentImg}
              alt="Introduce"
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;

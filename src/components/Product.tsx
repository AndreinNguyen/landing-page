import React from 'react';

import config from '../config/index.json';

const Product = () => {
  const { products } = config;
  const { items, title } = products;
  return (
    <section className={`bg-background py-8`} id="team">
    <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
      <h1
        className={`w-full my-2 text-5xl font-bold leading-tight text-center text-white pb-5`}
      >
        {title}
      </h1>
      <div>
        <div className={`flex`}>
        {items.map((item, index) => (
           <div className={`bg-current h-30 w-96 rounded mr-4`}>
           <img className={`object-contain h-30 w-96 rounded-full`}
             src={item.icon}
           />
           <p className={`text-center text-white`}>{item.name}</p>
           <p className={`text-center text-white`}>{item.description}</p>
         </div>
        ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Product;

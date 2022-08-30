import React from 'react';
import config from '../config/index.json';

const teams = () => {
  const { teams } = config;
  const { title, description, items } = teams;
  return (
    <section className={`bg-background py-8`} id="team">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-white pb-5`}
        >
          {title}
        </h1>
        <h1
          className={`w-full my-2 text-xl font-bold leading-tight text-center text-white p-5`}
        >
          {description}
        </h1>
        <div>
          <div className={`flex`}>
          {items.map((item, index) => (
             <div className={`bg-current h-30 w-96 rounded mr-4`}>
             <img className={`object-contain h-30 w-96 rounded-full`}
               src={item.icon}
             />
             <p className={`text-center text-white`}>{item.rank}</p>
             <p className={`text-center text-white`}>{item.name}</p>
           </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default teams;

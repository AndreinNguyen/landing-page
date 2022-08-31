import React from 'react';


const MeetOurTeam = () => {
  const pricing = {
    "title": "Pricing",
    "items": [
      {
        "name": "Free",
        "price": "$0",
        "priceDetails": "for one user",
        "features": [
          "1 user",
          "Basic Support",
          "1 GB of storage",
          "Email support"
        ]
      },
      {
        "name": "Pro",
        "price": "$15",
        "priceDetails": "per user",

        "features": [
          "5 users",
          "Priority Support",
          "10 GB of storage",
          "Phone and Email support"
        ]
      },
      {
        "name": "Enterprise",
        "price": "$29",
        "priceDetails": "per user",
        "features": [
          "50 users",
          "24/7 Support",
          "100 GB of storage",
          "Phone and Email support"
        ]
      }
    ]
  }
  const { items, title } = pricing;
  const [firstPlan, secondPlan, thirdPlan] = items;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          {[1,2,3,4].map(el=>(<div
            className={`flex flex-col w-5/6 lg:w-1/5 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {firstPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span>
              </div>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;

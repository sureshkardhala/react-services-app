import React from "react";
import {BiSolidChevronsRight} from "react-icons/bi";

const Cards = () => {


  const cards = [
    {
      id: 1,
      title: "Who We Are",
      info: "We help individuals & startups with Branding, Web Development, Digital Marketing and SAAS Products to scale their Businesses.",
    },
    {
      id: 2,
      title: "Our Misson",
      info: "We have started our journey to establish incubation centers in India. We are building a company culture of innovation, creativity and empathy.",
    },
    {
      id: 3,
      title: "What We Do",
      list: [
        {
          id: 1,
          name: "Internships & Careers",
        },
        {
          id: 2,
          name: "Training Certification",
        },
        {
          id: 3,
          name: "Website Development",
        },
        {
          id: 4,
          name: "Graphic Designs",
        },
        {
          id: 5,
          name: "Cloud & Hosting Services",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-fit mt-2 text-center py-4">
      <div className="w-full px-4 mt-4 md:px-0 md:w-5/6 flex justify-center flex-col h-full m-auto md:mt-20">
        <h2 className="text-3xl font-semibold text-gray-900">
          {<span className="text-4xl text-sky-600">Develop</span>} Amazing Business And Brand Digitally
        </h2>
        <p className="mt-12 text-lg">
          It’s easy to build Websites, but hard to get the desired results. This
          is where We steps in, providing a done-for-you service. We build a 6 –
          D Process, that can grow your business without increasing headcount
          with our Solutions.
        </p>
        <div className="mt-8 md:mt-16">
          <button className=" bg-blue-500 w-40 p-2 rounded-md text-white uppercase">
            Get Started
          </button>
        </div>
      </div>{" "}
      <div className="w-full mt-6 space-y-4 px-4 md:space-y-0 md:w-11/12 md:px-10 py-1 md:mt-4 m-auto flex flex-wrap justify-between md:space-x-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full h-52 md:w-80 text-left px-2 py-4 bg-white border-2 border-gray-300 shadow-3xl rounded-2xl cursor-pointer hover:scale-105 duration-300"
          >
            <p className="w-12 h-2 bg-blue-600"></p>
            <h1 className="mt-4 font-medium text-xl">{card.title}</h1>
            <p className="mt-2">{card?.info}</p>
            {card?.list && (
              <ul>
                {card.list.map(({ id, name }) => (
                  <li
                    key={id}
                    className="flex flex-row hover:text-blue-600 duration-300"
                  >
                    <BiSolidChevronsRight
                      size={21}
                      className="p-1 text-blue-600"
                    />
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;

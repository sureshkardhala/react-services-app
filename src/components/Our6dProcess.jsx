import React from "react";

const Our6dProcess = () => {
  const items = [
    {
      id: 1,
      name: "Discover",
      info: "We will work with you to understand your expected benefits and problem to discover exact requirement.",
    },
    {
      id: 2,
      name: "Define",
      info: "We will define the problem statement and review the user stories to identify the hypotheses with user.",
    },
    {
      id: 3,
      name: "Design",
      info: "We will create flow visuals based on the brand strategy, and design a solution for the market.",
    },
    {
      id: 4,
      name: "Develop",
      info: "We use a blended agile method to develop the designed solution into customized strategy.",
    },
    {
      id: 5,
      name: "Deploy",
      info: "The customized strategy is executed through knowledgeable and dedicated teams across all required channels.",
    },
    {
      id: 6,
      name: "Deliver",
      info: "We will plan, oversee and review a pilot in a live environment (or as close to) to ensure confidence in a roll-out to live.",
    },
  ];
  return (
    <div className="w-full h-fit mt-8 p-8" name="6dprocess">
      <div className="w-full md:w-2/3 flex flex-col p-2 justify-center text-center m-auto">
        <h1 className="text-3xl font-semibold">Our "6-D" Process</h1>
        <p className="mt-4">
          Automate interactions with your current and future customers today!
        </p>
      </div>
      <div className="mt-10 w-full m-auto flex flex-wrap justify-between md:px-12">
        {items.map(({ id, name, info }) => (
          <div
            className="w-full md:w-96 h-52 border-[1px] cursor-pointer border-sky-400 shadow-2xl p-2 rounded-md mt-10 hover:scale-105 duration-300"
            key={id}
          >
            <p className="w-8 h-8 text-center p-1 bg-blue-500 rounded-full text-white ">
              {id}
            </p>
            <h1 className="text-2xl font-semibold mt-6">{name}</h1>
            <p className="mt-2">{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Our6dProcess;

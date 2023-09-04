import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      href:"../"
    },
    {
      id: 2,
      name: "Our 6D Process",
      href:"6dprocess"
    },
    {
      id: 3,
      name: "Services",
      href:"services"
    },
    {
      id: 4,
      name: "Our Clients",
      href:"ourclients"
    },
    {
      id: 5,
      name: "Careers",
      href:""
    },
  ];
  return (
    <div className="w-full h-20 flex flex-wrap justify-between px-6 py-4 md:px-20 md:py-4 border-b-2 shadow-lg">
      <div className="md:w-1/3 w-5/6">
        <h1 className="p-2 text-2xl font-signature font-bold text-gray-800">
          Sonic Solutions
        </h1>
      </div>
      <ul className="hidden md:flex  flex-wrap w-2/3 justify-between">
        {links.map(({ id, name, href}) => (
          <li
            key={id}
            className="ml-2 p-2 cursor-pointer hover:text-gray-400 duration-300 hover:scale-x-105"
          >
           
            <Link to={href} smooth duration={500}>
              {name}
            </Link>
          </li>
          
        ))}
         <li className="w-30 h-fit px-2 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:scale-x-105 duration-200">
            Request Quote
           </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden p-2"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-sky-900 text-gray-200 bg-sky-900">
          {links.map(({ id, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={name}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

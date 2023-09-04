import React from "react";
import {PiCertificate} from "react-icons/pi";
import {HiOutlineLightBulb} from "react-icons/hi";
import {MdMobileFriendly} from "react-icons/md";
import {BsGraphUpArrow} from "react-icons/bs";
import {FaAsymmetrik} from "react-icons/fa";
import {AiOutlineShoppingCart, AiOutlineCloudServer} from "react-icons/ai";
import {HiComputerDesktop} from "react-icons/hi2";


const Services = () => {
  const items = [
    {
      id: 1,
      name: "Website Development",
      info: "We bring together a team of experts in different areas to get you the website you need for your business.",
      icon: <HiComputerDesktop size={25} color="white" />,
      size: "w-full md:w-96",
    },
    {
      id: 2,
      name: "E-Commerce Solution",
      info: "Do you have an eCommerce idea? We make sure it's automated with the payment gateway & delivery system.",
      icon: <AiOutlineShoppingCart  size={25} color="white" />,
      size: "w-full md:w-96",
    },
    {
      id: 3,
      name: "Graphic Designis",
      info: "We design custom graphic identities for your business, we create logos and branding for your company.",
      icon: <FaAsymmetrik  size={25} color="white" />,
      size: "w-full md:w-96",
    },
    {
      id: 4,
      name: "Cloud & Hosting Services",
      info: "We offer a high level of uptime and affordable service quality to host your website and store data.",
      icon: <AiOutlineCloudServer  size={25} color="white" />,
      size: "w-full md:w-96",
    },
    {
      id: 5,
      name: "Digital Marketing (SEO)",
      info: "We create and execute strategies for your brand through SEO, PPC, social media and conversion optimization.",
      icon: <BsGraphUpArrow  size={25} color="white" />,
      size: "w-full md:w-96",
    },
    {
      id: 6,
      name: "App Development",
      info: "We Develop & Design your Mobile Applications for Android and get them launched on the playstore.",
      icon: <MdMobileFriendly  size={25} color="white" />,
      size: "w-full md:w-96",
    },
    {
      id: 7,
      name: "Internships & Careers",
      info: "We provide internships on technologies and help students to achieve good career by making them eligible to their desired jobs",
      icon: <HiOutlineLightBulb  size={25} color="white" />,
      size: "w-full md:w-[45%]",
    },
    {
      id: 8,
      name: "Training Certifications",
      info: "We provide IT training that is 100% hands-on. Our expert instructors will get you certified in a matter of days.",
      icon: <PiCertificate  size={25} color="white" />,
      size: "w-full md:w-[45%]",
    },
  ];
  return (
    <div className="w-full h-fit my-8 p-8 py-10" name="services">
      <div className="w-full md:w-2/3 flex flex-col p-2 justify-center text-center m-auto">
        <h1 className="text-3xl font-semibold">What we can do for you?</h1>
        <p className="mt-4">
          We’re a one-stop solution and provide a wide range of services for all
          your needs
        </p>
      </div>
      <div className="mt-10 w-full m-auto flex flex-wrap justify-between text-center md:px-12 ">
        {items.map(({ id, name, info, size , icon}) => (
          <div
            className={size + ` mt-10 h-fit py-4 md:h-60 border-[1px] text-center cursor-pointer hover:bg-slate-300  border-blue-200 shadow-2xl p-2 md:py-3 rounded-md  hover:scale-105 duration-300`}
            key={id}
          >
            <p className="w-fit h-fit text-center p-4 bg-blue-500 rounded-full text-white mt-6 m-auto">
              {icon}
            </p>
            <h1 className="text-2xl font-semibold mt-2">{name}</h1>
            <p className="mt-2">{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

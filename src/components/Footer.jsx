import React from 'react';
import {FaFacebookSquare, FaTwitter,  FaInstagram, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import { Link } from 'react-scroll';

const Footer = () => {
    const links=[
        {
            id:1,
            icon:<FaFacebookSquare size={24}/>,
            href:""
        },
        {
            id:2,
            icon:<FaTwitter size={24} />,
            href:""
        },
        {
            id:3,
            icon:<SiGmail size={24} />,
            href:""
        }
        ,
        {
            id:4,
            icon:<FaInstagram size={24} />,
            href:""
        },
        {
            id:5,
            icon:<FaLinkedin  size={24}    />,
            href:""
        }
    ];
    const qucikItems = [
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
      const otherPages = [
        {
          id: 1,
          name: "Terms & Conditions",
        },
        {
          id: 2,
          name: "Privacy Policy",
        },
        {
          id: 3,
          name: "Refund and Returns Policy",
        },
        {
          id: 4,
          name: "Contact us",
        },
      ];
  return (
    <div className="w-full h-fit  mt-10 py-2 bg-black text-gray-300">
        <div className='w-full flex flex-wrap justify-between px-10'>
        <div className="w-full md:w-1/4 h-fit md:h-60 flex flex-col p-2 cursor-pointer mt-10">
            <h1 className='text-2xl font-signature font-semibold'>Sonic Solutions</h1>
            <p className='mt-4'>“We believe in our 6-D Process (Discover, Define, Design, Develop, Deploy, Deliver) to occupy projects and the clients we deal with.”</p>
            <ul className='flex flex-row space-x-4 mt-4'>{
                links.map(({id, icon, href}) => (
                    <li key={id} className='cursor-pointer hover:scale-110 duration-300'><Link to={href}> {icon}</Link></li>
                ))
            }
                
            </ul>
        </div>
        <div className="w-full md:w-1/4 h-fit md:h-60 flex flex-col p-2 mt-10">
            <h1 className='text-2xl  font-semibold cursor-pointer'>Quick Menu</h1>
            <ul className='flex flex-col  mt-4'>{
                qucikItems.map(({id, name, href}) => (
                    <li key={id} className='cursor-pointer hover:text-gray-600 duration-300'><Link to={href}> {name}</Link></li>
                ))
            }
                
            </ul>
        </div>
        <div className="w-full md:w-1/4  h-fit md:h-60 flex flex-col p-2 cursor-pointer mt-10">
            <h1 className='text-2xl  font-semibold'>Other Pages</h1>
            <ul className='flex flex-col  mt-4'>{
                otherPages.map(({id, name}) => (
                    <li key={id} className='cursor-pointer hover:text-gray-600 duration-300'><Link to={''}> {name}</Link></li>
                ))
            }
                
            </ul>
        </div>
        <div className="w-full md:w-1/4  h-fit md:h-60 flex flex-col p-2 cursor-pointer mt-10">
            <h1 className='text-2xl  font-semibold'>Get In Touch</h1>
            <p className='mt-4'>Visakhapatnam, AndhraPradesh, INDIA -531001</p>
            <p className='mt-4'>office@sonicsolutions.com</p>
            <p className='mt-4'>+91 9948227622</p>
            <p className='mt-4'>+91 7893405276</p>
        </div>
       
        </div>
        <div className='w-full border-t-[1px] border-blue-400 p-2 text-center mt-6'>
            <p className='mt-2'>Copyright © 2023 Sonic Solutions Pvt Ltd</p>
        </div>
    </div>
  )
}

export default Footer
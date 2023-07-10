import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo2, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full fles items-center
      py-5 fixed top-0 z-20 bg-primary`}>

      <div className="w-full flex justify-between
                items-center max-w-7xl mx-auto">

        <Link to="/" className="flex item-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            }}  
        >
          <img src={logo2} alt="logo" className='w-10 h-10 
           object-contain left-0' />
          <p className="text-white text-[18px]
                font-bold cursor-pointer flex">Yashasvi&nbsp;
            <span className="sm:block hidden"
            >|&nbsp;Bhardwaj</span></p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                ? "text-white"
                : "text-gray-400"
                } hover:text-gray-100 text-[18px] `}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
            ))}
        </ul>

        <div className ="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
            <div className={`${!toggle ? 'hidden' : 'flex'}
                p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
                z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((Link) => (
                  <li
                    key={Link.id}
                    className={`${active === Link.title
                        ? "text-white"
                        : "text-gray-400"
                      } font-poppins font-medium cursor-pointer text-[14px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title)
                    }}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                  ))}
              </ul>
            </div>

        </div>

      </div>
    </nav>
  )
}
export default Navbar
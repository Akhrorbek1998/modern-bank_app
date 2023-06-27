import React, { useState } from 'react'
import { styles } from "../utils/style"
import { navigationLinks } from '../utils/constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("Home")
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, index) => (
          <li
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
              ${index === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
              ${active === nav.title ? "text-white" : "text-lightWhite"} 
            `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleNav ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggleNav(!toggleNav)}
        />

        <div
          className={`${!toggleNav ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navigationLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navigationLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import logo from '../assets/logo.png'
import { Search , FilePenLine, User} from 'lucide-react';
const Nav = () => {
  return (
    <div className="absolute top-0 text-white z-10 w-full text-lg pl-20 py-6">
      <nav className="w-full flex justify-between">
        <span className="flex gap-2  items-center w-full font-medium">
          <img src={logo} alt="" className="w-[50px] h-[50px]" />
          <h1>Events Pulse</h1>
        </span>
        <ul className="flex w-full justify-evenly items-center">
          <li className="flex gap-3 items-center">
            <Search />
            Find Events
          </li>

          <li className="flex gap-3 items-center">
            <FilePenLine />
            Create Events
          </li>
          <li className="flex gap-3 items-center">
            
                      <User />
                      Login
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav
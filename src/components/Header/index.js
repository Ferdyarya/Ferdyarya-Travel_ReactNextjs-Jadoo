import React from 'react'
import Link from 'next/link';

import Logo from 'images/logo.svg';

export default function Header() {
  return (
    <header className="max-w-7xl px-9 mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-28">
            <Logo className="logo-style-1"/>
            </div>

            {/* Navbar */}
            <div className="w-auto">
              <ul className="flex items-center">
                <li className="">
                  <Link href="/destination">
                    <a className="px-9 text-gray-800">Destination</a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/Hotels">
                    <a className="px-9 text-gray-800">Hotels</a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/Flights">
                    <a className="px-9 text-gray-800">Flights</a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/Bookings">
                    <a className="px-9 text-gray-800">Bookings</a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/Login">
                    <a className="px-9 text-gray-800">Login</a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/Sign-up">
                    <a className="px-5 text-gray-800 py-1 border border-gray-800 rounded-md mx-3 ">Sign Up</a>
                  </Link>
                </li>
                <li className="">
                  <button className="px-9 text-gray-800 relative">
                    EN
                    <span className="absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-x-1/2 ml-2"></span>
                  </button>
                </li>
              </ul> 
            </div>  
        </div>
      </header>
  )
}

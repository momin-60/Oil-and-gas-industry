import React from 'react'
import navlogo from '../assets/Nav-logo.png'
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <section className='container'>
            <div className="Logo">
                <img src={navlogo} alt="" />
            </div>
            <div className="Menu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="Contact">
            <button className='btn'>CONTACT</button>
            </div>
            <div className="menubtn">
            <IoMenuOutline />
            </div>
        </section>
    </nav>
  )
}

export default Navbar
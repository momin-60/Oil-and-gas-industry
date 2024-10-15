import React from 'react'
import Navlogo from '../assets/Nav-logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import foot1 from '../assets/Cert1.png'
import foot2 from '../assets/Cert2.png'

const footer = () => {
  return (
    <section className='Footer'>
        <div className="footer-part container">
            <div className="footOne">
                <img src={Navlogo} alt="" />
                <div className="small-inm">
                <p><MdOutlineEmail /> <span>mominislam.bd60@gmail.com</span></p>
                <p><MdPhoneInTalk /> <span>+88 01311971499</span></p>
                <p><FaMapLocationDot /> <span>Mirpur 10, Dhaka</span></p>
                </div>
                <div className="footer-logo">
                    <p><FaFacebook /></p>
                    <p><AiFillTwitterCircle /></p>
                    <p><TiSocialLinkedinCircular /></p>
                    <p><FiInstagram /></p>
                </div>
            </div>

            <div className="footTwo">
                <h3>Company</h3>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Gallery</p>
            </div>
            
            
            
            
            <div className="footThree">
                <h3>Others</h3>
                <p>Blog</p>
                <p>Contact</p>
                <p>Terms & conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="footFour"> 
                <h3>Certificate</h3>
                <div className="foot-logo">
                    <img src={foot1} alt="" />
                    <img src={foot2} alt="" />
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="copy-part container">
                <p>© Copyright 2022 by Mohammad Momin - All right reserved.</p>
            </div>
        </div>
    </section>
  )
}

export default footer
import React from 'react'
import Buttomimg from '../assets/buttom-img.png'
import Buttom from '../Components/Button.jsx'

const Service = () => {
  return (
    <section className='service'>
        <div className="up-part">
                <div className="up-left1">
                    <div className="up-left-text">
                    <h1>Our Services</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className="up-left2">
                  <div className="all-mid">
                  <p>Modern natural oil and gas refineries.</p>
                  <Buttom/>
                  </div>
                </div>
                <div className="up-left3">
                <div className="all-mid">
                  <p>National fuel distribution and supply.</p>
                  <Buttom/>
                  </div>
                </div>
                <div className="up-left4">
                <div className="all-mid">
                  <p>Supply of national industries.</p>
                  <Buttom/>
                  </div>
                </div>
        </div>
        <div className="buttom-part container">
          <p>Learn more about our company</p>
          <img src={Buttomimg} alt="" />
          <Buttom/>
        </div>
    </section>
  )
}

export default Service
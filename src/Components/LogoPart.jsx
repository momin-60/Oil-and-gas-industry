import React from 'react'
import LogoPho1 from '../assets/logo-part-img1.png'
import LogoPho2 from '../assets/logo-part-img2.png'
import LogoPho3 from '../assets/logo-part-img3.png'
import LogoPho4 from '../assets/logo-part-img4.png'

const LogoPart = () => {
  return (
    <section className='container logo-all'>
        <img src={LogoPho1} alt="" />
        <img src={LogoPho2} alt="" />
        <img src={LogoPho3} alt="" />
        <img src={LogoPho4} alt="" />

    </section>
  )
}

export default LogoPart
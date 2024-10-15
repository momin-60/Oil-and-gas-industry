import React from 'react'
import country1 from '../assets/countryimg1.png'
import country2 from '../assets/country-img2.png'
import country3 from '../assets/country-img3.png'
import country4 from '../assets/country-img4.png'

const Petphoto = () => {
  return (
    <section className='petphoto'>
        <img src={country1} alt="" />
        <img src={country2} alt="" />
        <img src={country3} alt="" />
        <img src={country4} alt="" />
    </section>
  )
}

export default Petphoto
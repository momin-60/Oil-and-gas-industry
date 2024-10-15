import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Country from './Components/country'
import Petphoto from './Components/Petphoto'
import Service from './Components/Service'
import LogoPart from './Components/LogoPart'
import ReadMore from './Components/ReadMore'
import Mapin from './Components/Mapin'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Country/>
        <Petphoto/>
        <Service/>
        <LogoPart/>
        <ReadMore/>
        <Mapin/>
        <Footer/>
        
    </div>
  )
}

export default App
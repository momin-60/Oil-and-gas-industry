import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Readbutton from '../Components/Readbutton'




const ReadMore = () => {
  return (
    <section className='readmore'>
            <div className="readmore-up container">
                <div className="Read1">
                    <div className="Read-mid">
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <Readbutton/>
                    </div>
                </div>
                <div className="Read2">
                <div className="Read-mid">
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <Readbutton/>
                    </div>
                </div>
                <div className="Read3">
                <div className="Read-mid">
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <Readbutton/>
                    </div>
                </div>
            </div>
            <div className="readmore-down container">
                <p>MORE FROM THE BLLOG </p>
                <h1><MdKeyboardArrowRight /></h1>
            </div>
    </section>
  )
}

export default ReadMore
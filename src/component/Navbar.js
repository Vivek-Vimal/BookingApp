import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {quantity} = useSelector(state => state.Reducer)
    const [sec, setSec] = useState(Math.floor(Math.random()*(60-30+1)+ 30))
    useEffect(()=>{
      const interval = setInterval(() => {
        setSec(sec => sec - 1)
      }, 1000);
      return ()=> clearInterval(interval)
    })
    return (
        <section>
            <div className="booking_heading">
            <div>
             <h3 className="time_interval">Time Left : {sec >=0 ? sec : 0 }</h3>
            <Link to="/Booking" className="booking_head">Claim Your Free Trail Class</Link> 
            </div>
           <div className="booking_cart">
            <Link to="/Cart"><div className="cart"><i className="fas fa-cart-arrow-down"/></div></Link>
            <div className="number">{quantity}</div>
            </div>
          </div>
        </section>
    )
}

export default Navbar

import React,{useContext, useRef} from 'react'
import {dataBookingProvide} from '../data/DataBookingProvider'
import { useSelector, useDispatch } from 'react-redux'

const Booking = () => {
    const {shoppingCart} = useSelector(state => state.Reducer)
    const dispatch = useDispatch()
    const online = useContext(dataBookingProvide)
    const freeSeatLeft = useRef(Math.floor(Math.random()*(15-5+1)+ 5))
    const seat = useRef(Math.floor(Math.random()*(15-5+1)+ 5))

    return (
        <section>
          <div className="booking_sub_heading">
            <h2>Class Schedule</h2>
            <h3 >Free Seats Left: {freeSeatLeft.current} </h3>
          </div>
          <div className="booking_content">
            <h3>Date</h3>
            <h3>Time</h3>
            <h3>Availability</h3>
          </div>
          { online.map( e =>(
           <div className="booking_sub_content">
           <p>{e.price}</p>
           <p>{e.id}</p>
           <p>{e.status === "full" ? 0 : seat.current }</p>
           <button type="button" className={e.status === "full"? "btn_full": "btn"}
              onClick={e.status === "full" || shoppingCart.length > 2 ? 
              ( e.status==="full" ? null : ()=> alert('Yoc can only book maximum 3 classes per week') ) :
              ()=> dispatch({type:'ADD_TO_CART', ID:e.id, eachWholeProduct: e})}>
              {e.status === "full" ? "Full" : "Book Now"}
           </button>
          </div>))}
        </section>
    )
}

export default Booking

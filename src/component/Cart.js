import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
    const {shoppingCart} = useSelector(state => state.Reducer)
    const dispatch = useDispatch()
    return (
        <>
        <div className="cart_sub_heading">
          <h3>Date</h3>
          <h3>Time</h3>
          <h3>Availability</h3>
        </div>
        { shoppingCart.map( e => (
        <div className="booking_sub_content">
           <p>{e.price}</p>
           <p>{e.id}</p>
           <p>{Math.floor(Math.random()*(60-30+1)+ 30)}</p>
           <button type="button" className="cart_btn" onClick={()=> dispatch({type:'REMOVE', ID:e.id, currentWholeProduct: e })}>Cancel</button>
        </div>))}
        </>
    )
}

export default Cart
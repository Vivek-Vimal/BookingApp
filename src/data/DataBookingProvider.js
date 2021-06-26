import React,{createContext} from 'react'
import { bookingData } from './DataBooking'

export const dataBookingProvide = createContext()

const DataBookingProvider = (props) => {
    return (
        <dataBookingProvide.Provider value={[...bookingData]}>
            {props.children}
        </dataBookingProvide.Provider>
    )
}

export default DataBookingProvider
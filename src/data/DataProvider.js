import React,{createContext} from 'react'
import { ProductData } from './data'

export const dataProvide = createContext()

const DataProvider = (props) => {
    return (
        <dataProvide.Provider value={[...ProductData]}>
            {props.children}
        </dataProvide.Provider>
    )
}

export default DataProvider

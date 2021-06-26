import React,{useContext} from 'react'
import { dataProvide } from '../data/DataProvider'

const Home = () => {
  const data = useContext(dataProvide)
    return (
        <>
          <div className="home_heading">
            <h1>Class Schedule</h1>
          </div>
          <div className="home_sub_heading">
            <h3>Name</h3>
            <h3>Week Days</h3>
            <h3>Time</h3>
          </div>
          { data.map( item => (
          <div className="home_content">
             <p>{item.title}</p>
             <p>{item.category}</p>
             <p>{item.price}</p>
          </div>
          ))}
        </>
    )
    }    
export default Home
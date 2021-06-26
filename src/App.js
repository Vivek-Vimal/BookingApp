import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import DataProvider from './data/DataProvider'
import DataBookingProvider from './data/DataBookingProvider';
import Booking from './component/Booking';
import Cart from './component/Cart'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <DataProvider>
      <DataBookingProvider>
      <Route exact path="/" component={Home}/>  
      <Route exact path="/Booking" component={Booking} />
      <Route exact path="/Cart" component={Cart}/>
      </DataBookingProvider>
      </DataProvider>
      </Switch>
    </>
  );
}

export default App;

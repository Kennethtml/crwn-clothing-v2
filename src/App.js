import Home from './Routes/home/home.component';
import {Routes, Route} from 'react-router-dom';
import Navigation from './Routes/Navigation/Navigation.component';
import Authentication from './Routes/Authentication/authentication.component';
import Shop from './Routes/shop/shop.component';
import CheckOut from './Routes/Checkout/checkOut.component';






function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
             <Route path='auth' element={<Authentication/>}/>
             <Route path='checkout' element={<CheckOut/>}/>
             
            
      </Route>
     
      
    </Routes>
      
  )
}

export default App;

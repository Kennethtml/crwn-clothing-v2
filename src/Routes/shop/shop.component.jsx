
import './shop-component.style.scss'
import { Routes,Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories.component'



const Shop=()=>{
   
    return(
        
      
      <Routes>
          <Route index={true} element={<CategoriesPreview/>}/>
      </Routes>  
        
        
        
             

        
    )
    

}

export default Shop;
import { useContext } from "react";
import { CategoriesContext} from "../../components/context/categories.context";
import './categories-preview.styles.scss'
import CategoryPreview from "../../components/category-preview/categories-preview.component";



const CategoriesPreview=()=>{
    const {categoriesMap}=useContext(CategoriesContext)
    return(
        
       <>
         {Object.keys(categoriesMap).map((title)=>{
             return <CategoryPreview key={title}title={title} products={categoriesMap[title]}/>
     
    })}
       
       
       </>
        
        
        
        
        
             

        
    )
    

}

export default CategoriesPreview;
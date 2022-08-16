import { createContext,useState,useEffect } from "react";
import{addCollectionandDocuments,getCategoriesandDocument} from '../../utils/firebase/firebase.utils'

import SHOP_DATA from '../../Routes/shop-data.js'

export const CategoriesContext=createContext({
    categoriesMap:[]
});

export  const CategoriesProvider=({children})=>{

    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap=await getCategoriesandDocument()
           setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])
    const[categoriesMap,setCategoriesMap]=useState({})
    const value={categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
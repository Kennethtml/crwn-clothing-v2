import { createContext, useEffect, useState } from "react";

export const cartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{}

})

const addCartItem=(cartItems,productToAdd)=>{

    const existingCartItem=cartItems.find((cartItem=>
        cartItem.id===productToAdd.id))

    if(existingCartItem){
       return  cartItems.map((cartItem)=>{
            if(cartItem.id===productToAdd.id){
                return {...cartItem,quantity:cartItem.quantity +1}

            }

            return cartItem

        })
    }


    return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem=(cartItems,productToRemove)=>{
    const existingCartItem=cartItems.find((cartItem=>
        cartItem.id===productToRemove.id))

        
    if (existingCartItem.quantity===1){
       return cartItems.filter((cartItem)=> cartItem.id !== productToRemove.id
        )
        
    }

    return cartItems.map((cartItem)=>{
            if(cartItem.id===productToRemove.id){
                return {...cartItem,quantity:cartItem.quantity -1}

            }
            return cartItem
        }
    )




}

const deleteCartItem=(cartItems,productToDelete)=>{
    const existingCartItem=cartItems.find((cartItem=>
        cartItem.id===productToDelete.id))

        
    if (existingCartItem){
       return cartItems.filter((cartItem)=> cartItem.id !== productToDelete.id
        )
        
    }

}
export const CartProvider=({children})=>{
    const[isCartOpen,setIsCartOpen]=useState(false)
    const [cartItems,setCartItems]=useState([])
    const [cartCount, setCartCount]=useState(0)
    const [cartTotal,setCartTotal]=useState(0)

 useEffect(()=>{setCartCount( cartItems.reduce((total,cartItem)=>{
        return total+cartItem.quantity
    },0))},[cartItems])

     useEffect(()=>{setCartTotal( cartItems.reduce((total,cartItem)=>{
        return total+cartItem.quantity* cartItem.price
    },0))},[cartItems])
   


    
    const addItemToCart=(product)=>{
        setCartItems(addCartItem(cartItems,product))
    }  
     const removeItemFromCart=(product)=>{
        setCartItems(removeCartItem(cartItems,product))
    } 
    const deleteItemFromCart=(product)=>{
        setCartItems(deleteCartItem(cartItems,product))
    }
    const value={isCartOpen,cartTotal,setIsCartOpen,addItemToCart,removeItemFromCart,deleteItemFromCart,cartItems,cartCount} 

    return <cartContext.Provider value={value}>
        {children}
    </cartContext.Provider>
}
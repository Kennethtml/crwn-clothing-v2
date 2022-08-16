import'./checkOut.styles.scss'
import { useContext } from 'react'
import { cartContext } from '../../components/context/cartContext'
import CheckoutItem from '../../components/checkOut item/checkOut-item.component'

const CheckOut=()=>{

    const {cartItems,addItemToCart,removeItemFromCart,cartTotal}=useContext(cartContext)
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className="header-block">
                    <span>product</span>

                </div>
                <div className="header-block">
                    <span>description</span>
                    
                </div>
                <div className="header-block">
                    <span>quantity</span>
                    
                </div>
                <div className="header-block">
                    <span>Price</span>
                    
                </div>
                <div className="header-block">
                    <span>remove</span>
                    
                </div>

            </div>
            {cartItems.map((cartItem)=>{
                const{name,id,quantity}=cartItem
                return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                  

            })}
            <span className='total'>Total:${cartTotal}</span>
        </div>
    )
}

export default CheckOut
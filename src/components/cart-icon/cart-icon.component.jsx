import'./cart-icon.styles.scss'
import{ReactComponent as ShoppingIcon} from'../../Assets/shopping-bag.svg'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext';




const CartIcon=()=>{
    const{isCartOpen,setIsCartOpen,cartCount}=useContext(cartContext)
    const toggleIsCartOpen=()=>{
        setIsCartOpen(!isCartOpen)
        console.log(isCartOpen)
    }
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )

}
export default CartIcon
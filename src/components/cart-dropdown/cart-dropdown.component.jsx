import './cart-dropdown.styles.scss'
import Button from '../button component/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext';
import { useNavigate
 } from 'react-router-dom';


const CartDropdown =()=>{
    const{cartItems}=useContext(cartContext)
    const navigate=useNavigate();
    const goToCheckOutHandler=()=>{
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=>{
                    return <CartItem cartItem={item}/>
                })}
            </div>
            <Button onClick={goToCheckOutHandler}>Go to CheckOut</Button>

        </div>
    )
}

export default CartDropdown
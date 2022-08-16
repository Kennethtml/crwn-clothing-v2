import  './product-card.style.scss';
import Button from '../button component/button.component';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
const ProductCard =({product})=>{
    const{name,price,imageUrl}=product;

    const{addItemToCart}=useContext(cartContext)

    const addItem=()=>addItemToCart(product)
    return(
        <div className='product-card-container'>
            <img src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>

            </div>

            <Button type='inverted' onClick={addItem}>Add to card</Button>

        </div>
    )

}
export default ProductCard
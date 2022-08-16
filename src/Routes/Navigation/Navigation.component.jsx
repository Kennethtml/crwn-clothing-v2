import { Fragment } from "react"
import { Outlet,Link } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../Assets/crown.svg'
import'./Navigation.style.scss'
import { useContext } from "react"
import { Usercontext } from "../../components/context/user.context"
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { cartContext } from "../../components/context/cartContext"


function Navigation(){
    
    const {currentUser,setCurrentUser}=useContext(Usercontext)
    const {isCartOpen,setIsCartOpen}=useContext(cartContext)
    

    const handleSignOut=async()=>{
      const response= await signOutAuthUser()
      setCurrentUser(null)
    }
  return(
   <Fragment>
       <div className="navigation">
           <Link className="logo-container" to="./">
           <CrwnLogo className="logo"/>
           </Link>
           <div className="nav-links-container">
               <Link className="nav-link" to="/shop">
                   SHOP
               </Link>
               {currentUser?(
                   <span className="nav-link" onClick={handleSignOut}> SIGN OUT</span>
               ):
               (

               <Link className="nav-link" to="/auth">
                    SIGN IN
               </Link>
               
               )}
               <CartIcon/>
           </div>
           {isCartOpen ? <CartDropdown/>:""}
       </div>

       <Outlet/>
   </Fragment>
    
  )
}

export default Navigation  
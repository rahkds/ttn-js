import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from './../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context.jsx";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";
import  {NavigationContainer } from './navigation.styles.jsx';


const Navigation= () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
      <>
        <NavigationContainer>
            {/* <Link  className='logo-container' to='/'>
                <CrwnLogo/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutHandler} >SIGN OUT</span>
                    ) : (
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>   
                    )
                }
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropDown/>} */}
        </NavigationContainer>
        <Outlet/>
      </>
    )
  }


export default Navigation;
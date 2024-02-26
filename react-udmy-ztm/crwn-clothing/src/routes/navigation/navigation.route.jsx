import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from './../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";


const Navigation= () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
      <>
        <div className="navigation">
            <Link  className='logo-container' to='/'>
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
            {isCartOpen && <CartDropDown/>}
        </div>
        <Outlet/>
      </>
    )
  }


export default Navigation;
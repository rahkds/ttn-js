import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from './../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context.jsx";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";
import  {NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';


const Navigation= () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
      <>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as='span' onClick={signOutHandler} >SIGN OUT</NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>   
                    )
                }
                <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropDown/>}
        </NavigationContainer>
        <Outlet/>
      </>
    )
  }


export default Navigation;
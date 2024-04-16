
import Button from '../button/button.component';
import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx'
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';


const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {navigate('/checkout')};

    return (
        <CartDropDownContainer>
            <CartItems >
                {cartItems.length ? (
                    cartItems.map((item) => {
                        return (
                            <CartItem key={item.id} cartItem={item}/>
                        );
                    })
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}

            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO THE CHECKOUT</Button>
        </CartDropDownContainer>
    );
}


export default CartDropDown;
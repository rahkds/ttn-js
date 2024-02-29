
import { useContext } from 'react';
import Button from '../button/button.component';
import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx'
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext);
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
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {CategoryItem} from "../categories/category.types";


const addCartItem = (cartItems : CartItem[], productToAdd : CategoryItem) : CartItem[]=> {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
  
  
const removeCartItem = (cartItems : CartItem[], cartItemToRemove: CartItem) : CartItem[]=> {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}
  
const clearCartItem = (cartItems : CartItem[], cartItemToClear : CartItem) : CartItem[] =>
cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setCartItems = withMatcher(
    (cartItems : CartItem[]) : SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const setIsCartOpen = withMatcher(
    (bool: boolean) : SetIsCartOpen => {
        return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
    }   
)


export const addItemToCart = (cartItems : CartItem[], product: CategoryItem): SetCartItems => {
    const newCartItems = addCartItem(cartItems, product);
    return setCartItems(newCartItems)
}


export const removeItemFromCart = (cartItems: CartItem[], product: CartItem) => {
    const newCartItems = removeCartItem(cartItems, product);
    return setCartItems(newCartItems);
}


export const clearItemFromCart = (cartItems : CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
}

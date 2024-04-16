import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {setCartItems, setIsCartOpen} from "./cart.action";
import {AnyAction} from "redux-saga";


export type CartState = {
  isCartOpen :  boolean,
  cartItems : CartItem[]
}

export const CART_INTITAL_STATE : CartState = {
    isCartOpen : false,
    cartItems : [],
  }
  
export const cartReducer = (state = CART_INTITAL_STATE, action : AnyAction) : CartState => {
    if(setIsCartOpen.match(action)) {
          return {
            ...state,
            isCartOpen : action.payload
          }
    }
    if(setCartItems.match(action)) {
      return {
        ...state,
        cartItems : action.payload
      }
    }

    return state;
    
    // const {type, payload} = action;
    // switch(type) {
    //   case CART_ACTION_TYPES.SET_CART_ITEMS:
    //       return {
    //         ...state,
    //         cartItems : payload
    //       }
  
    //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
    //       return {
    //         ...state,
    //         isCartOpen : payload
    //       }
      
    //   default:
    //     return state;
    // }
  }
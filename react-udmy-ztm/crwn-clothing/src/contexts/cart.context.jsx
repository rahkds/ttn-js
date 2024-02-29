import { createContext, useReducer } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
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


export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount : 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS : 'SET_CART_ITEMS',
  SET_IS_CART_OPEN : 'SET_IS_CART_OPEN'
}

const INTITAL_STATE = {
  isCartOpen : false,
  cartItems : [],
  cartCount : 0,
  cartTotal : 0
}

const cartReducer = (state, action) => {
  const {type, payload} = action;
  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
          ...state,
          ...payload
        }

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        return {
          ...state,
          isCartOpen : payload
        }
    
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
}


export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, INTITAL_STATE);
  const {cartItems, cartCount, cartTotal, isCartOpen} = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total+ cartItem.quantity, 0);
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    

    dispatch({type : CART_ACTION_TYPES.SET_CART_ITEMS, payload : {
      cartItems : newCartItems,
      cartCount : newCartCount,
      cartTotal : newCartTotal
    }})
  }

  const setIsCartOpen = (bool) => {
    dispatch({type : CART_ACTION_TYPES.SET_IS_CART_OPEN, payload : bool})
  }


  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  }
    

    const removeItemToCart = (product) => {
      const newCartItems = removeCartItem(cartItems, product);
      updateCartItemsReducer(newCartItems);
    }
    

    const clearItemFromCart = (cartItemToClear) => {
      const newCartItems = clearCartItem(cartItems, cartItemToClear);
      updateCartItemsReducer(newCartItems);
    };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemToCart,
    clearItemFromCart, cartTotal};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
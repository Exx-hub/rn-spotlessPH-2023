import { createContext, useReducer, useState } from "react";

export const CartContext = createContext(null);

const initialState = {
  cartItems: [],
  numOfItems: 0,
  total: 0,
  pickupDetails: {
    address: "",
    pickupDate: "",
    time: "",
    deliveryDate: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemAdded = action.payload;

      // check if item already exists
      const itemExists = state.cartItems.find((item) => item.title === itemAdded.title);

      // if yes, update quantity
      // if no, add new item with quantity = 0

      const updatedCart = itemExists
        ? state.cartItems.map((item) =>
            item.title === itemExists.title
              ? { ...itemExists, quantity: itemExists.quantity + 1 }
              : item
          )
        : [...state.cartItems, { ...itemAdded, quantity: 1 }];

      // get total amount
      const totalAmount = updatedCart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0);

      // get numOfItems
      const totalItems = updatedCart.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);

      return { ...state, total: totalAmount, numOfItems: totalItems, cartItems: updatedCart };
    }
    case "CONFIRM_PICKUP_DETAILS": {
      return { ...state, pickupDetails: action.payload };
    }

    case "REMOVE_ITEM": {
      const title = action.payload;

      const updatedCart = state.cartItems.filter((item) => item.title !== title);

      // get total amount
      const totalAmount = updatedCart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0);

      return { ...state, total: totalAmount, cartItems: updatedCart };
    }

    case "INCREMENT": {
      const title = action.payload;

      const updatedCart = state.cartItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      );

      // get total amount
      const totalAmount = updatedCart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0);

      return { ...state, total: totalAmount, cartItems: updatedCart };
    }
    case "DECREMENT": {
      const title = action.payload;

      const updatedCart = state.cartItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity - 1 } : item
      );

      const totalAmount = updatedCart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0);

      return { ...state, total: totalAmount, cartItems: updatedCart };
    }

    case "RESET_STATE": {
      return {
        cartItems: [],
        numOfItems: 0,
        total: 0,
        pickupDetails: {
          address: "",
          pickupDate: "",
          time: "",
          deliveryDate: "",
        },
      };
    }
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export default ContextProvider;

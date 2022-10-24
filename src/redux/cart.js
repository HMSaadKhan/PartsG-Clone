import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../common";

const initialState = {
  cartItems: Cart,
  subtotal: 0,
  shipment: 0,
  total: 0,
};

const subtotalCalculations = (cartItems) => {
  let total = 0;
  cartItems.forEach((cartItem) => {
    total += cartItem.qty * parseInt(cartItem.price);
  });
  return total;
};
const totalCalculations = (shipment, subtotal) => {
  return subtotal + shipment;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (cartItem.qty < cartItem.stock) {
        cartItem.qty += 1;
      }

      state.subtotal = subtotalCalculations(state.cartItems);
      state.total = totalCalculations(parseInt(state.shipment), state.subtotal);
    },

    decrement: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem.qty > 1) {
        cartItem.qty -= 1;
      }

      state.subtotal = subtotalCalculations(state.cartItems);
      state.total = totalCalculations(parseInt(state.shipment), state.subtotal);
    },

    setquantity: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.qty = action.payload.value;
      state.subtotal = subtotalCalculations(state.cartItems);
      state.total = totalCalculations(parseInt(state.shipment), state.subtotal);
    },

    addToCart: (state, action) => {
      let { name, id, link, price, model, stock } = action.payload;
      state.cartItems = [
        ...state.cartItems,
        { name, id, link, price, model, stock, qty: 1 },
      ];
      state.subtotal = subtotalCalculations(state.cartItems);
      state.total = totalCalculations(parseInt(state.shipment), state.subtotal);
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.subtotal = subtotalCalculations(state.cartItems);
      state.total = totalCalculations(parseInt(state.shipment), state.subtotal);
    },

    setShipping: (state, action) => {
      state.shipment = action.payload;
      state.subtotal = subtotalCalculations(state.cartItems);
      state.total = totalCalculations(parseInt(state.shipment), state.subtotal);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  setquantity,
  addToCart,
  deleteFromCart,
  setShipping,
} = cartSlice.actions;

export default cartSlice.reducer;

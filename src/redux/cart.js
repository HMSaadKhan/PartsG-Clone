import { createSlice, current } from "@reduxjs/toolkit";
import { Cart } from "../common";

const initialState = {
  cartItems: Cart,
  subtotal: 0,
};

const totalCalculations = (cartItems) => {
  let total = 0;
  cartItems.forEach((cartItem) => {
    total += cartItem.qty * parseInt(cartItem.price);
  });
  return total;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      console.log(cartItem);
      console.log(cartItem.qty, cartItem.stock);
      if (cartItem.qty < cartItem.stock) {
        cartItem.qty += 1;
      }
      state.subtotal = totalCalculations(state.cartItems);
    },
    decrement: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
      state.subtotal = totalCalculations(state.cartItems);
    },
    setquantity: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.qty = action.payload.value;
      state.subtotal = totalCalculations(state.cartItems);
    },

    addToCart: (state, action) => {
      let { name, id, link, price, model, stock } = action.payload;
      state.cartItems = [
        ...state.cartItems,
        { name, id, link, price, model, stock, qty: 1 },
      ];
      state.subtotal = totalCalculations(state.cartItems);
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.subtotal = totalCalculations(state.cartItems);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setquantity, addToCart, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

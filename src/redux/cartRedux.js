import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.product.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.product = action.payload.products;
      state.totalPrice -= action.payload.price * action.payload.quantity;
    },
    decreaseProduct: (state, action) => {
      state.product = action.payload.cartCopy;
      state.totalPrice = state.totalPrice - action.payload.price;
    },
    increaseProduct: (state, action) => {
      state.product = action.payload.cartCopy;
      state.totalPrice = state.totalPrice + action.payload.price;
    },
  },
});

export const { addProduct, removeProduct, decreaseProduct, increaseProduct } =
  cartSlice.actions;
export default cartSlice.reducer;

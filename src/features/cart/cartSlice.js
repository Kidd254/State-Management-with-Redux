import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';
import { v4 as uuidv4 } from 'uuid';


const initialState ={
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    add: (state, action) => {
      const newObject = {
        title: action.payload.title,
        author: action.payload.author,
        id: uuidv4(),
      };
      state.cartItems.push(newObject);
      state.amount += 1; // Increment the amount by one
    },
    remove: (state, action) => {
      state.cartItems.filter((books) => (
        books.id !== action.payload.id
      ));
    state.amount -= 1; // Decrement the amount
    },
  },
});


export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer

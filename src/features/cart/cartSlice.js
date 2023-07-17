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
      state.bookList.push(newObject);
    },
    remove: (state, action) => {
      state.bookList.filter((books) => (
        books.id !== action.payload.id
      ));
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer

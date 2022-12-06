import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;

// eslint-disable-next-line no-console
console.log(store.getState());

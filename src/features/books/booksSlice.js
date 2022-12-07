import { createSlice } from "@reduxjs/toolkit";
import initialStateBooksSlice from "../../utils/initialStateBooksSlice";

export const booksSlice = createSlice({
  name: "books",
  initialState: initialStateBooksSlice,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload);
    },
    editBook: (state, action) => {
      const {
        id,
        title,
        isbn,
        pageCount,
        year,
        thumbnailUrl,
        description,
        authors,
        categories,
      } = action.payload;
      const bookToEdit = state.find((bookToCheck) => bookToCheck.id === id);
      if (bookToEdit) {
        bookToEdit.title = title;
        bookToEdit.isbn = isbn;
        bookToEdit.pageCount = pageCount;
        bookToEdit.year = year;
        bookToEdit.thumbnailUrl = thumbnailUrl;
        bookToEdit.description = description;
        bookToEdit.authors = authors;
        bookToEdit.categories = categories;
      }
    },
    deleteBook: (state, action) => {
      const bookToDelete = state.find(
        (bookToCheck) => bookToCheck.id === action.payload
      );
      bookToDelete && state.splice(state.indexOf(bookToDelete), 1);
    },
  },
});
// eslint-disable-next-line no-console
console.log(booksSlice.getInitialState());
export const { addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;

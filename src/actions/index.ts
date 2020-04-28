import { Book } from "../CrudRedux";
/* Action Types */
export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";

/* Action Creators */
export function addBook(book: Book) {
  return { type: ADD_BOOK, payload: book };
}

export function deleteBook(book: Book) {
  console.log(book);
  return { type: DELETE_BOOK, payload: book };
}

export function updateBook(book: Book) {
  return { type: UPDATE_BOOK, book };
}

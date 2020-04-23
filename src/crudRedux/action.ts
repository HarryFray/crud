import { Book } from "./CrudRedux";
/* Action Types */
export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";

/* Action Creators */
export function addBook(text: string) {
  return { type: ADD_BOOK, text };
}

export function deleteBook(index: number) {
  return { type: DELETE_BOOK, index };
}

export function updateBook(book: Book) {
  return { type: UPDATE_BOOK, book };
}

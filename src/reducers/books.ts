import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../actions/index";
import { Book } from "../CrudRedux";

interface test {
  id: string;
}

let Books = [
  {
    id: 1,
    title: "Fooled By Randomness",
    author: "Nassim Nicholas",
    percentComplete: 2,
  },
  {
    id: 2,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    percentComplete: 40,
  },
  {
    id: 3,
    title: "Doing Good Better",
    author: "Willeam Macaskill",
    percentComplete: 90,
  },
];

// (5) we can even provide multiple function signatures
// "overload signatures"
// function books(
//   state: Book[],
//   action: {
//     type: "ADD_BOOK";
//     payload: Book;
//   }
// ): Book[];

// function books(
//   state: Book[],
//   action: { type: "DELETE_BOOK"; payload: number }
// ): Book[];

interface A {
  type: "ADD_BOOK" | "DELETE_BOOK";
  payload: Book;
}

function books(state: Book[] = Books, action: A): Book[] {
  let payload = action.payload;
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: payload.id,
          title: payload.title,
          author: payload.author,
          percentComplete: payload.percentComplete,
        },
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== payload.id);
    // case UPDATE_BOOK:
    //   return [
    //     ...state,
    //     {
    //       id: payload.id,
    //       title: payload.title,
    //       author: payload.author,
    //       percentComplete: payload.percentComplete,
    //     },
    //   ];
    default:
      return state;
  }
}

export default books;

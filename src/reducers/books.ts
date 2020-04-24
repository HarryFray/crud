import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../actions/index";
import { Book } from "../CrudRedux";

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

const books = (state = Books, action: { type: string; payload: Book }) => {
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
      return [
        ...state,
        {
          id: payload.id,
          title: payload.title,
          author: payload.author,
          percentComplete: payload.percentComplete,
        },
      ];
    case UPDATE_BOOK:
      return [
        ...state,
        {
          id: payload.id,
          title: payload.title,
          author: payload.author,
          percentComplete: payload.percentComplete,
        },
      ];
    default:
      return state;
  }
};

export default books;

import { ADD_HERO } from "../actions/index";

export interface actionType {
  type: "ADD_HERO";
  payload: string;
}

function heros(
  state: { count: number; images: string[] } = { count: 0, images: [] },
  action: actionType
): { count: number; images: string[] } {
  switch (action.type) {
    case ADD_HERO:
      return {
        count: state.count + 1,
        images: [...state.images, action.payload],
      };
    default:
      return state;
  }
}

export default heros;

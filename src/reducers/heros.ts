import { ADD_HERO } from "../actions/index";

export interface actionType {
  type: "ADD_HERO";
}

function heros(
  state: { count: number } = { count: 0 },
  action: actionType
): { count: number } {
  switch (action.type) {
    case ADD_HERO:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default heros;

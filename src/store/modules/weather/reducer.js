import produce from "immer";

const INITIAL_STATE = {
  conditions: null
};

export default function weather(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@weather/GET_SUCCESS": {
        draft.conditions = action.payload.data;
        break;
      }

      default:
    }
  });
}

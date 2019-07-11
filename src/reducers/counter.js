import produce from "immer";

export default (prevState = { counter: 0 }, action) =>
  produce(prevState, draft => {
    switch (action.type) {
      case "INC":
        draft.counter += 1;
        break;
      case "DEC":
        draft.counter -= 1;
        break;
    }
  });

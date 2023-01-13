export const listReduce = (state = [], action) => {
  switch(action.type) {
    case "ADD-TO_LIST":
      return [...state, action.payload];
    case "REMOVE-FROM_LIST":
      return state.filter((item) => item !== action.payload);
    default:
      return state
  }
};



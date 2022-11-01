const initioalState = {
  Data: [],
  sort: "",
};
export const SortProducts = (state = initioalState, action) => {
  switch (action.type) {
    case "SORT_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

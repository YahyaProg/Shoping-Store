export const Products = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return action.payload;
    case "GET_PRODUCTS":
      return action.payload;
    case "LIKE_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

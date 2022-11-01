const initioalState = {
  singleProduct: {},
  smaeProducts: [],
};
export const SingleProducts = (state = initioalState, action) => {
  switch (action.type) {
    case "GET_SINGLE_PRODUCTS_INFO":
      return action.payload;
    default:
      return state;
  }
};

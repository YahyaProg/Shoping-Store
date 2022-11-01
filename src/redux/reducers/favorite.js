const initioalState=[
  
]
export const Favorite = (state = [], action) => {
  switch (action.type) {
    case "GET_FIRST_FAVORIT":
      return action.payload;
    case "FAVOTITR_PRODUCT":
      return action.payload;
    case "FAVOTITR_BACK_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

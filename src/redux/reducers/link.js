const initioalState = {
  link: "",
  key: "",
  header: "",
  category: "",
  brand: "",
  type: "",
};
export const SelectedLinks = (state = initioalState, action) => {
  switch (action.type) {
    case "SELECTED_LINKS":
      return action.payload;
    default:
      return state;
  }
};

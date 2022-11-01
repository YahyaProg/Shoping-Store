const initialState = {
  Menu: false,
  mainSidebar: false,
  secondSidebar: { Show: false, Key: "" },
};

export const ShowMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MAIN_SIDEBAR_MENU":
      return action.payload;
    case "HIDE_MAIN_SIDEBAR_MENU":
      return action.payload;
    case "SHOW_SECOND_SIDEBAR_MENU":
      return action.payload;
    case "HIDE_SECOND_SIDEBAR_MENU":
      return action.payload;
    case "SHOW_MAIN_MENU":
      return action.payload;
    case "HIDE_MAIN_MENU":
      return action.payload;
    default:
      return state;
  }
};

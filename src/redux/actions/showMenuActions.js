export const showMainSidebarMenu = () => {
  return async (dispatch, getState) => {
    const state = getState().showMenu;
    await dispatch({
      type: "SHOW_MAIN_SIDEBAR_MENU",
      payload: { ...state, mainSidebar: true },
    });
  };
};

export const hideMainSidebarMenu = () => {
  return async (dispatch, getState) => {
    const state = getState().showMenu;
    await dispatch({
      type: "HIDE_MAIN_SIDEBAR_MENU",
      payload: { ...state, mainSidebar: false },
    });
  };
};

export const showCoverSidebarMenu = (key) => {
  return async (dispatch, getState) => {
    const state = getState().showMenu;

    await dispatch({
      type: "SHOW_SECOND_SIDEBAR_MENU",
      payload: { ...state, secondSidebar: { Show: true, Key: key } },
    });
  };
};

export const hideCoverSidebarMenu = () => {
  return async (dispatch, getState) => {
    const state = getState().showMenu;
    await dispatch({
      type: "HIDE_SECOND_SIDEBAR_MENU",
      payload: {
        ...state,
        secondSidebar: { ...state.secondSidebar, Show: false },
      },
    });
  };
};

export const showMainMenu = () => {
  return async (dispatch, getState) => {
    const state = getState().showMenu;
    await dispatch({
      type: "SHOW_MAIN_MENU",
      payload: { ...state, Menu: true, mainSidebar: false },
    });
  };
};

export const hideMainMenu = () => {
  return async (dispatch, getState) => {
    const state = getState().showMenu;
    await dispatch({
      type: "HIDE_MAIN_MENU",
      payload: { ...state, Menu: false },
    });
  };
};

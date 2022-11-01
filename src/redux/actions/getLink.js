export const GetLinks = (link, key, header, category, brand, type) => {
  return async (dispatch, getState) => {
    const state = getState().GetLink;
    await dispatch({
      type: "SELECTED_LINKS",
      payload: { ...state, link, key, header, category, brand, type },
    });
  };
};

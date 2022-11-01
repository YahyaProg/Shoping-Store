export const FavoriteAction = (
  id,
  image,
  price,
  showPrice,
  name,
  offer,
  email
) => {
  return async (dispatch, getState) => {
    const state = getState().Favorite;
    const newItem = {like:true ,id, image, price, showPrice, name, offer,email };
    console.log("email",email);
    await dispatch({ type: "FAVOTITR_PRODUCT", payload: [...state, newItem] });
  };
};
export const firstFavorit = (favorit) => {
  return async (dispatch) => {
    await dispatch({
      type: "GET_FIRST_FAVORIT",
      payload: [...JSON.parse(favorit)],
    });
  };
};
export const FavoriteBack = (id) => {
  return async (dispatch, getState) => {
    const state = getState().Favorite;
    const filteredFavorite = state.filter((item) => {
      return item.id !== id;
    });

    await dispatch({
      type: "FAVOTITR_BACK_PRODUCT",
      payload: filteredFavorite,
    });
  };
};

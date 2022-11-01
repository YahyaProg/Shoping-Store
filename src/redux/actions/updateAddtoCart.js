export const UpdateCartAction = () => {
  return async (dispatch, getState) => {
    const state = getState().AddCart;
    const cart = localStorage.getItem("cart");

    if (cart) {
      await dispatch({
        type: "ADD_TO_CART",
        payload: { ...state, cartCase: JSON.parse(cart) },
      });
    } else {
      await dispatch({
        type: "ADD_TO_CART",
        payload: { ...state, cartCase: [] },
      });
    }
  };
};

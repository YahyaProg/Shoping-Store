import { productsList } from "../../products_data/data";
export const SingleProduct = (id) => {
  return async (dispatch, getState) => {
    const state = getState().SingleProduct;
    const product = productsList.filter((item) => {
      return item.id === id;
    });
    const singleProduct = product;
    const header = product[0].header;
    const SameProducts = productsList.filter((item) => {
      return item.header === header;
    });
    const sameProducts = SameProducts.slice(0, 10);
    await dispatch({
      type: "GET_SINGLE_PRODUCTS_INFO",
      payload: { singleProduct, sameProducts },
    });
  };
};

import { productsList } from "../../products_data/data";
export const SliderSchema = () => {
  return async (dispatch, getState) => {
    const productsOffer = productsList
      .filter((item) => {
        return item.product_info.offer === true;
      })
      .slice(0, 10);
    await dispatch({ type: "OFFER_SCHEMA", payload: productsOffer });
  };
};

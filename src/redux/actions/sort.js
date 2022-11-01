export const Filter = (type) => {
  return async (dispatch, getState) => {
    const products = getState().Products;
    const State = getState().Sort;
    let TemptProducts;
    if (type === "all") {
      TemptProducts = products;
      await dispatch({
        type: "SORT_PRODUCTS",
        payload: { ...State, Data: TemptProducts, sort: "all" },
      });
    }
    if (type === "price") {
      TemptProducts = products.sort((a, b) => {
        return b.product_info.showPrice - a.product_info.showPrice;
      });

      await dispatch({
        type: "SORT_PRODUCTS",
        payload: { ...State, Data: TemptProducts, sort: "price" },
      });
    }

    if (type === "popular") {
      TemptProducts = products.sort((a, b) => {
        return b.product_info.popular - a.product_info.popular;
      });
      await dispatch({
        type: "SORT_PRODUCTS",
        payload: { ...State, Data: TemptProducts, sort: "popular" },
      });
    }
  };
};

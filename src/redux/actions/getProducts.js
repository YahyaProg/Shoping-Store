import { productsList } from "../../products_data/data";

export const AllProducts = () => {
  return async (dispatch) => {
    await dispatch({ type: "GET_ALL_PRODUCTS", payload: productsList });
  };
};
export const initiolProducts = () => {
  return async (dispatch) => {
    const peroducts = localStorage.getItem("products");
    if (peroducts) {
      await dispatch({ type: "GET_PRODUCTS", payload: JSON.parse(peroducts) });
    }
  };
};
export const getProducts = () => {
  return async (dispatch, getState) => {
    const { link, key, header, category, brand, type } = getState().GetLink;
    let TemptProducts;
    if (key) {
      TemptProducts = productsList.filter((item) => item.category === key);
      await dispatch({ type: "GET_PRODUCTS", payload: TemptProducts });
    }
    if (key && key === "offer") {
      TemptProducts = productsList.filter((item) => {
        const { product_info } = item;
        return product_info.offer === true;
      });
      await dispatch({ type: "GET_PRODUCTS", payload: TemptProducts });
    }
    if (header) {
      TemptProducts = productsList.filter((item) => item.header === header);
      await dispatch({ type: "GET_PRODUCTS", payload: TemptProducts });
    }

    if (!key && !header && category && brand) {
      TemptProducts = productsList.filter(
        (item) => item.header === category && item.brand === brand
      );
      await dispatch({ type: "GET_PRODUCTS", payload: TemptProducts });
    }
    if (type) {
      TemptProducts = productsList.filter((item) => item.type === type);
      await dispatch({ type: "GET_PRODUCTS", payload: TemptProducts });
    }
  };
};

export const likeProduct = (id) => {
  return async (dispatch, getState) => {
    const state = getState().Products;
    const temptProducts = state.map((item) => {
      if (item.id === id) {
        return { ...item, like: !item.like };
      } else {
        return item;
      }
    });
    await dispatch({ type: "LIKE_PRODUCT", payload: temptProducts });
  };
};

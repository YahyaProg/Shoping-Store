import { useEffect } from "react";

export const addToCart = (id, amount, name, showPrice, images) => {
  return async (dispatch, getState) => {
    const state = getState().AddCart;
    const temptItem = state.cartCase?.find((item) => item.id === id);
    if (temptItem) {
      const temptCart = state.cartCase?.map((item) => {
        if (item?.id === id) {
          let newAmount = item.amount + amount;
          if (newAmount > 10) {
            newAmount = 10;
          }
          let totalamount = newAmount * item.price;
          return { ...item, amount: newAmount, totalamount };
        } else {
          return item;
        }
      });

      await dispatch({
        type: "ADD_TO_CART",
        payload: { ...state, cartCase: temptCart },
      });
    } else {
      const newItem = {
        id,
        name,
        amount,
        image: images[0],
        price: showPrice,
        totalamount: amount * showPrice,
      };

      await dispatch({
        type: "ADD_TO_CART",
        payload: { ...state, cartCase: [...state.cartCase, newItem] },
      });
    }
  };
};

export const totalAmount = () => {
  return async (dispatch, getState) => {
    const state = getState().AddCart;
    const { total_items, total_amounts } = state.cartCase.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amounts += price * amount;

        return total;
      },
      {
        total_items: 0,
        total_amounts: 0,
      }
    );
    await dispatch({
      type: "TOTAL_AMOUNT",
      payload: { ...state, total_items, total_amounts },
    });
  };
};

export const AmountChange = (id, action) => {
  return async (dispatch, getState) => {
    const state = getState().AddCart;
    const temptItem = state.cartCase?.find((item) => item.id === id);
    if (temptItem) {
      const temptCart = state.cartCase?.map((item) => {
        if (item?.id === id) {
          if (action === "increase") {
            let newAmount = item.amount + 1;
            if (newAmount > 10) {
              newAmount = 10;
            }
            let totalamount = newAmount * item.price;
            return { ...item, amount: newAmount, totalamount };
          }
          if (action === "decrease") {
            let newAmount = item.amount - 1;
            if (newAmount < 0) {
              newAmount = 0;
            }
            let totalamount = newAmount * item.price;
            return { ...item, amount: newAmount, totalamount };
          }
        } else {
          return item;
        }
      });
      await dispatch({
        type: "CHANGE_AMOUNT",
        payload: { ...state, cartCase: temptCart },
      });
    }
  };
};

export const deleteItemCart = (id) => {
  return async (dispatch, getState) => {
    const state = getState().AddCart;
    let temptCart = state.cartCase.filter((item) => {
      return item.id !== id;
    });
    let totalItems;
    if (!state.cartCase) {
      totalItems = 0;
    }
    await dispatch({
      type: "DELETE_ITEM_CART",
      payload: { ...state, total_items: totalItems, cartCase: temptCart },
    });
  };
};

export const Clear_Cart = () => {
  return async (dispatch, getState) => {
    const state = getState().AddCart;
    await dispatch({
      type: "CLEAR_CART",
      payload: { ...state, total_items: 0, total_amounts: 0, cartCase: [] },
    });
  };
};

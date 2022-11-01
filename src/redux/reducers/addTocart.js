import { useEffect } from "react";
const getcart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};
const initioalState = {
  cartCase: getcart(),
  total_items: 0,
  total_amounts: 0,
};

export const AddCart = (state = initioalState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return action.payload;
    case "TOTAL_AMOUNT":
      return action.payload;
    case "CHANGE_AMOUNT":
      return action.payload;
    case "DELETE_ITEM_CART":
      return action.payload;
    case "CLEAR_CART":
      return action.payload;
    default:
      return state;
  }
};

import { actionsTypes } from "../constants/actionTypes";

export const setProduct = (products) => {
  return {
    type: actionsTypes.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionsTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionsTypes.REMOVE_SELECTED_PRODUCT,
  };
};

import { actionsTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionsTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case actionsTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

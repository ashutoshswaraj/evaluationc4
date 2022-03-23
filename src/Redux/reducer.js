import {
  GET_CLICKED_PRODUCT_REQ,
   GET_PRODUCT_REQ,
GET_PRODUCT_SUCCESS,
GET_PRODUCT_FAILURE, 
  
GET_CLICKED_PRODUCT_SUCCESS,
GET_CLICKED_PRODUCT_FAILURE,
  SORT_DATA,
} from "./actionTypes";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
  sortedProducts: [],
  clickedProduct: [],
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case GET_PRODUCT_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...payload],
        sortedProducts: [...payload],
        isError: false,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SORT_DATA:
      if (payload === "--sort by --")
        return {
          ...state,
          sortedProducts: [...state.products],
        };
      else if (payload ==="asc")
        return {
          ...state,
          sortedProducts: [...state.sortedProducts.sort((a, b) => a.price - b.price)],
        };
      else if (payload === "desc")
        return {
          ...state,
          sortedProducts: [...state.sortedProducts.sort((a, b) => b.price - a.price)],
        };

    case GET_CLICKED_PRODUCT_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CLICKED_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clickedProduct: payload,
        isError: false,
      };
    case GET_CLICKED_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
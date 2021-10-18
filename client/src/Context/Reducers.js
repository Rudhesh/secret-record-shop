import axios from "axios";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "FAVORITE":
      axios.post("/main", action.payload).then((res) => {
        // console.log(res.data);
        alert(res.data.message);
      });
      return {
        ...state,
        favorite: [...state.favorite, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter((c) => c.id !== action.payload.id),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (previousState, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...previousState, sort: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...previousState, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        searchQuery: "",
      };
    default:
      return previousState;
  }
};

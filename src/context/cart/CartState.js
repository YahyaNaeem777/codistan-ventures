import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer  from "./CartReducer";
import { ADD_TO_CART } from "../Types";
import { REMOVE_ITEM } from "../Types";
const CartState = ({ children }) => {
  const initialState = {
    CartItem: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  return (
    <CartContext.Provider
      value={{
        CartItem: state.CartItem,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

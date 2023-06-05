import { ADD_TO_CART} from "../Types";
import { REMOVE_ITEM } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        CartItem: [...state.CartItem, action.payload],
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        CartItem: state.CartItem.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;

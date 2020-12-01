import { combineReducers } from "redux";

import userReducer from "./user/UserReducer";
import cartrReducer from './cart/cart.reducer'

export default combineReducers({
  user: userReducer,
  cart: cartrReducer,
});

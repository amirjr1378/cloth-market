import {combineReducers} from "redux";
import { itemsReducer } from './items/itemsReducer';
import { cartReducer } from './cart/cartReducer';
export const rootReducer = combineReducers({
   items: itemsReducer,
   cart: cartReducer
})

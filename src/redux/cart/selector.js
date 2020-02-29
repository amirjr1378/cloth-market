import { createSelector } from "reselect";

export const selectCart = state => state.cart;
export const selectCartItemsCount = createSelector(selectCart, cart =>
   cart.reduce((sum, item) => sum + item.count, 0)
);

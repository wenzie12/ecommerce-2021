import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    // first arg: collection of selectors
    // 2nd arg: func that will return the value out of selectors
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
            0
      )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => 
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
  )
)
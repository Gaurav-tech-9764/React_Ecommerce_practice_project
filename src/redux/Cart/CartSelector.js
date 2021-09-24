import { createSelector } from "reselect";

const selectCart = state => state.cart;


export const selectCartItems =  createSelector(
    [selectCart],
    cart => cart.CartItems
)


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
    )

export const selectCartItemCount = createSelector(
    [selectCartItems],
    CartItems => CartItems.reduce((accumalator, CartItems)=> accumalator + CartItems.quantity, 0 )

)

export const selectCartTotal = createSelector(
    [selectCartItems],
    CartItems => CartItems.reduce((accumalator, CartItems)=> accumalator + CartItems.quantity * CartItems.price, 0 )

)
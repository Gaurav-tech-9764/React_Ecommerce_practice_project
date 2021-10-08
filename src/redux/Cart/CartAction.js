import CartActionTypes from "./CartTypes";

export const toggleCartHidden = () =>({

    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const AddItem = item =>({

    type: CartActionTypes.ADD_ITEM,
    payload:item
})
export const RemoveFromCart = item =>({

    type: CartActionTypes.REMOVE_ITEM,
    payload:item
})

export const ClearItemFromCart = item =>({

    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const ClearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})
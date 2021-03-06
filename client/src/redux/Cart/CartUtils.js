export const AddItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  export const RemoveItemsFromCart = (cartItems, cartItemToRemove)=>{

    const existingCartItems = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItems.quantity === 1){

      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

    }

    return cartItems.map(
      cartItem => 
      cartItem.id === cartItemToRemove.id ?
      {...cartItem, quantity:cartItem.quantity - 1}
      :
      cartItem
    )
  }
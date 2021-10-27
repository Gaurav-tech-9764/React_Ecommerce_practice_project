import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/Cart/CartSelector";
import CartItem from "../Cart-Item/CartItem";
import { toggleCartHidden } from "../../redux/Cart/CartAction";
import { useHistory } from "react-router";
import { ButtonContainer, CartDropdownContainer, CartItemsContainer ,EmptyMsgContainer } from "./CartDromDownContainer.styles";


const CartDropdown = () =>{
    const CartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const history = useHistory()


    return(
        <CartDropdownContainer>

            <CartItemsContainer>

            { 
                      CartItems.length ?
                   (
                    CartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                     ))

                   ) 
                     :
                     (
                         <EmptyMsgContainer>Your Cart Is Empty</EmptyMsgContainer>
                     )


                }
            
            </CartItemsContainer>
              
            <ButtonContainer onClick={()=> {history.push('/CheckOut');
            dispatch(toggleCartHidden())}
            }>GO TO CHECKOUT</ButtonContainer>

        </CartDropdownContainer>
            
        
     
    )
}

// const mapStateToProps = createStructuredSelector({
  
//     CartItems : selectCartItems
//   });
export default CartDropdown
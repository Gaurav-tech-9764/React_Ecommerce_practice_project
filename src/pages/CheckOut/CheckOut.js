
import React from "react";
import {  useSelector } from "react-redux";

import CheckOutItem from "../../Components/CheckOut-Items/CheckOutItem";
import StripeCheckoutButton from "../../Components/Stripe-Button/StripeButton";
import { selectCartItems, selectCartTotal } from "../../redux/Cart/CartSelector";
import { CheckoutHeader, CheckoutPage, CheckOutTotal, HeaderBlock, TestWarning } from "./Checkout.styles";


const CheckOut = () => {

    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectCartTotal)

    return(

        <CheckoutPage>
     <CheckoutHeader>
     <HeaderBlock>
     <span>Products</span>
     </HeaderBlock>
     <HeaderBlock>
     <span>Discription</span>
     </HeaderBlock>
     <HeaderBlock>
     <span>Quantity</span>
     </HeaderBlock>
     <HeaderBlock>
     <span>Price</span>
       </HeaderBlock>
       <HeaderBlock>
     <span>Remove</span>
     </HeaderBlock>
   
 
    </CheckoutHeader>
               
            

            {
                cartItems.map(cartItem=>
                (
                    <CheckOutItem key={cartItem.id} cartItems={cartItem}/>
                ))
            }

            <CheckOutTotal>
            <span>TOTAL :- ${total}</span>
            </CheckOutTotal>
              
          
           <TestWarning>
           *Please use thew Following Test Card for test payment*
                <br/>
                4242 4242 4242 4242  - exp=01/24 - CVV=123

           </TestWarning>
            <br/>
            <StripeCheckoutButton price={total} />

        </CheckoutPage>
      
      
    )
}

// const mapStateToProps= createStructuredSelector({

//     cartItems: selectCartItems,
//     total: selectCartTotal
// })

export default  CheckOut
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"


const StripeCheckoutButton = ({price}) => {
   
    const priceForStripe = price * 100
    // console.log(priceForStripe)
   const publiShableKey= "pk_test_51JednVSDPjfxnBHVCcgIUPBJy0QNaLVRbRmNgmU7fRUVv1maEgueJ89YbkQZWlOVJNkDK9qVU21wT2FwncM5iPfI00CIQMSJZg"

   const onToken=token=>{
       
  axios({
      url:'payment',
      method:'post',
      data:{
          amount:priceForStripe,
          token
      }
  }).then(response => {
      alert("Payment Successfull")
  }).catch(error => {
      console.log("Pyment Error:", JSON.parse(error))
      alert("Payment Faild!!!")
  })

   }
   return(
       <StripeCheckout label="Pay Now"
           name="Clothinf Ecom"
           billingAddress
           shippingAddress
           currency="inr"
           image="https://svgshare.com/i/CUz.svg"
           description={`Your Total Price is ${price}`}
           amount={priceForStripe}
           panelLabel="pay now"
           token={onToken}
           stripeKey={publiShableKey}
       />
   )

}

export default StripeCheckoutButton
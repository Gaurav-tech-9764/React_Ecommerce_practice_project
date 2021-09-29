import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100

   const publiShableKey= "pk_test_51JednVSDPjfxnBHVCcgIUPBJy0QNaLVRbRmNgmU7fRUVv1maEgueJ89YbkQZWlOVJNkDK9qVU21wT2FwncM5iPfI00CIQMSJZg"

   const onToken=token=>{
       
       alert("payment Success")

   }
   return(
       <StripeCheckout label="Pay Now"
           name="Clothinf Ecom"
           billingAddress
           shippingAddress
           image="https://svgshare.com/i/CUz.svg"
           description={`Your Total Price is $${price}`}
           amount={priceForStripe}
           panelLabel="pay now"
           token={onToken}
           stripeKey={publiShableKey}
       />
   )

}

export default StripeCheckoutButton
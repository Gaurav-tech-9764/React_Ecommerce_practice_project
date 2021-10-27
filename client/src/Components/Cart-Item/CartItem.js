import React from "react"
import { CartItemContainerStyles, CartItemImage, ItemName, ItemsDetails } from "./CartItems.Styles"


const CartItem = ({item : {imageUrl, price, name, quantity}}) =>{

    return(

       <CartItemContainerStyles>
 <CartItemImage src={imageUrl} alt="item"/>
            <ItemsDetails>
                <ItemName >{name}</ItemName>
                <span className="price">{quantity} * {price}</span>
            </ItemsDetails>

       </CartItemContainerStyles>

           
        
    )



}

export default React.memo(CartItem)
import React from "react";
import {  useDispatch } from "react-redux";
import { ClearItemFromCart, AddItem, RemoveFromCart } from "../../redux/Cart/CartAction";
import { CheckOutContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from "./CheckOut.styles";
import "./CheckOutItem.Styles.scss"

const CheckOutItem = ({cartItems}) => {
    const dispatch = useDispatch()


    const {name, imageUrl, price, quantity} = cartItems

    return(

        <CheckOutContainer>
            <ImageContainer>
            <img src={imageUrl} alt="item"/>
            </ImageContainer>
               
        
            <TextContainer>{name}</TextContainer>

            <QuantityContainer>
            <div onClick={()=>dispatch(RemoveFromCart(cartItems))}>&#10094;</div>
            
           <span> {quantity}</span>
           
            <div onClick={()=> dispatch(AddItem(cartItems))}>&#10095;</div>
             </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => dispatch(ClearItemFromCart(cartItems))}> &#10005;</RemoveButtonContainer>
        </CheckOutContainer>
           
    )
}

// const mapDispatchToProps = dispatch =>({

//     clearItem: item => dispatch(ClearItemFromCart(item)),
//     addItem: item => dispatch(AddItem(item)),
//     RemoveItem: item =>dispatch(RemoveFromCart(item))

// })

export default CheckOutItem
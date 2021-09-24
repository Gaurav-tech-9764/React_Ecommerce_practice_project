import React from "react";
import { connect } from "react-redux";
import { ClearItemFromCart, AddItem, RemoveFromCart } from "../../redux/Cart/CartAction";
import "./CheckOutItem.Styles.scss"

const CheckOutItem = ({cartItems, clearItem, addItem, RemoveItem}) => {

    const {name, imageUrl, price, quantity} = cartItems

    return(

        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>

            <span className="quantity">
            <div className="arrow" onClick={()=>RemoveItem(cartItems)}>&#10094;</div>
            
           <span className="value"> {quantity}</span>
           
            <div className="arrow" onClick={()=>addItem(cartItems)}>&#10095;</div>
             </span>
            <span className="price">{price}</span>
            <div className="remove" onClick={()=>clearItem(cartItems)}> &#10005;</div>

        </div>
    )
}

const mapDispatchToProps = dispatch =>({

    clearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: item => dispatch(AddItem(item)),
    RemoveItem: item =>dispatch(RemoveFromCart(item))

})

export default connect(null, mapDispatchToProps) (CheckOutItem)
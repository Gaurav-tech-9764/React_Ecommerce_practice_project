import React from "react";
import { connect } from "react-redux";
import CartItem from "../Cart-Item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.Styles.scss";


const CartDropdown = ({CartItems}) =>{
  

    return(
        <div className="cart-dropdwon">
            <div className="cart-items">
                {
                    CartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                     ))

                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        
        </div>
    )
}

const mapStateToProps = ({ cart: { CartItems } }) => ({
    CartItems
  });
export default connect(mapStateToProps)(CartDropdown)
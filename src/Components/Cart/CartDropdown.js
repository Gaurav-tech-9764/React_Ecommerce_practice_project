import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/Cart/CartSelector";
import CartItem from "../Cart-Item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.Styles.scss";
import { toggleCartHidden } from "../../redux/Cart/CartAction";


const CartDropdown = ({CartItems , history, dispatch}) =>{
  console.log("tesing in dropdown")

    return(
        <div className="cart-dropdwon">
            <div className="cart-items">
                { CartItems.length ?
                   (
                    CartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                     ))

                   ) 
                     :
                     (
                         <span className="empty-message">Your Cart Is Empty</span>
                     )


                }
            </div>
            <CustomButton onClick={()=> {history.push('/CheckOut');
            dispatch(toggleCartHidden())}
            }>GO TO CHECKOUT</CustomButton>
        
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  
    CartItems : selectCartItems
  });
export default withRouter(connect(mapStateToProps)(CartDropdown))
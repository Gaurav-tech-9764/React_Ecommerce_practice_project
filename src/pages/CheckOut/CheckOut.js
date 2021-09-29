
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../Components/CheckOut-Items/CheckOutItem";
import StripeCheckoutButton from "../../Components/Stripe-Button/StripeButton";
import { selectCartItems, selectCartTotal } from "../../redux/Cart/CartSelector";
import "./CheckOut.Styles.scss";

const CheckOut = ({cartItems,total}) => {

    return(

        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-clock">
                    <span>Products</span>
                </div>
                <div className="header-clock">
                    <span>Discription</span>
                </div>
                <div className="header-clock">
                    <span>Quantity</span>
                </div>
                <div className="header-clock">
                    <span>Price</span>
                </div>
                <div className="header-clock">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem=>
                (
                    <CheckOutItem key={cartItem.id} cartItems={cartItem}/>
                ))
            }

            <div className="total">
                <span>TOTAL :- ${total}</span>
            </div>
            <div className="test-warning">
                *Please use thew Following Test Card for test payment*
                <br/>
                4242 4242 4242 4242  - exp=01/24 - CVV=123

            </div>
            <br/>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps= createStructuredSelector({

    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps) (CheckOut)
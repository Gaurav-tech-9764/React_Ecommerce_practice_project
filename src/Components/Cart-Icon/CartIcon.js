import React from "react";
import { connect } from "react-redux";
import {toggleCartHidden} from "../../redux/Cart/CartAction"
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./CartIcon.Styles.scss";
import CartItem from "../Cart-Item/CartItem";
import { selectCartItemCount } from "../../redux/Cart/CartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCartHidden, CartItemCount}) =>{
console.log("this ins cardicon")
    return(
<div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoppingIcon"/>
        <span  className="item-count">{CartItemCount}</span>
    </div>

    )
    
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({

    CartItemCount : selectCartItemCount

})

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)
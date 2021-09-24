import React from "react";
import { connect } from "react-redux";
import {toggleCartHidden} from "../../redux/Cart/CartAction"
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./CartIcon.Styles.scss";

const CartIcon = ({toggleCartHidden}) =>{

    return(
<div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoppingIcon"/>
        <span  className="item-count">0</span>
    </div>

    )
    
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps) (CartIcon)
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleCartHidden} from "../../redux/Cart/CartAction"
import { selectCartItemCount } from "../../redux/Cart/CartSelector";
import { CartIconContainer, ItemCount, ShoopingIcon } from "./CartIcon.styles";


const CartIcon = () =>{
    const CartItemCount =useSelector(selectCartItemCount)
    const dispatch = useDispatch()    


    return(
<CartIconContainer onClick={()=>dispatch(toggleCartHidden())}>
        <ShoopingIcon/>
        <ItemCount>{CartItemCount}</ItemCount>
    </CartIconContainer>

    )
    
}

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () =>dispatch(toggleCartHidden())
// })

// const mapStateToProps = createStructuredSelector({

//     CartItemCount : selectCartItemCount

// })

export default  CartIcon
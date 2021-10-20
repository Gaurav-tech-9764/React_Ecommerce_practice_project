import React from "react";
import { ReactComponent  as Logo } from "../../assets/crown.svg";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart/CartDropdown";

import { selectCurrentUser } from "../../redux/User/UserSelector";
import { selectCartHidden } from "../../redux/Cart/CartSelector";
import {HeaderContainer,LogoContainer, OptionDivContainer, OptionsContainer, OptionLinkContainer} from './Header.Styles'
import { SignOutStart } from "../../redux/User/UserAction";


const Header = () => {

  const currentUser =useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHidden)
  const dispatch = useDispatch()

return(
    <HeaderContainer >

    <LogoContainer to="/">
    <Logo />
    </LogoContainer>
    <OptionsContainer>
        <OptionLinkContainer to="/Shop">
            SHOP
        </OptionLinkContainer>
        <OptionLinkContainer className="option" to="/Contacts">
            CONTACT
        </OptionLinkContainer>
       
        {currentUser ? (
        <OptionDivContainer className='option' onClick={()=> dispatch(SignOutStart())}>
          SIGN OUT
        </OptionDivContainer>
      ) : (
        <OptionLinkContainer className='option' to='/signin'>
          SIGN IN
        </OptionLinkContainer>
      )}
      
<CartIcon/>


    </OptionsContainer>
    {hidden ? null: <CartDropdown/>}
    
</HeaderContainer>

)
  
}

// const mapStateToProps = createStructuredSelector ({
//     currentUser: selectCurrentUser,
//     hidden:selectCartHidden
  
// //   });
// const mapDispatchToProps = dispatch => ({
//   signOutStart: ()=> dispatch(SignOutStart())
// })
  
  export default Header;
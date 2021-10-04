import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent  as Logo } from "../../assets/crown.svg";

import { auth } from "../../FireBase/Firebase-util";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/User/UserSelector";
import { selectCartHidden } from "../../redux/Cart/CartSelector";
import {HeaderContainer,LogoContainer, OptionDivContainer, OptionsContainer, OptionLinkContainer} from './Header.Styles'


const Header = ({currentUser, hidden}) => {

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
        <OptionDivContainer className='option' onClick={() => signOut(auth)}>
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

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
  
  });
  
  export default connect(mapStateToProps)(Header);
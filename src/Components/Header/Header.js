import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent  as Logo } from "../../assets/crown.svg";
import "./Header.Styles.scss";
import { auth } from "../../FireBase/Firebase-util";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart/CartDropdown";


const Header = ({currentUser, hidden}) => {
console.log("testing",currentUser)
return(
    <div className="header">

    <Link  className="logo-container" to="/">
    <Logo className="logo" />
    </Link>
    <div className="options">
        <Link className="option" to="/Shop">
            SHOP
        </Link>
        <Link className="option" to="/Contacts">
            CONTACT
        </Link>
       
        {currentUser ? (
        <div className='option' onClick={() => signOut(auth)}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      
<CartIcon/>


    </div>
    {hidden ? null: <CartDropdown/>}
    
</div>

)
  
}

const mapStateToProps = ({ user:{currentUser}, cart:{hidden} }) => ({
    currentUser,
    hidden
  
  });
  
  export default connect(mapStateToProps)(Header);
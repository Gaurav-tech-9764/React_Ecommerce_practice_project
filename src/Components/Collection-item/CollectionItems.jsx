import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AddItem } from "../../redux/Cart/CartAction";
import { selectCurrentUser } from "../../redux/User/UserSelector";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItems.Styles.scss"

const CollectionItems = ({item,currentUser, history,AddItem}) =>{
    const {name, price, imageUrl} = item
    return(
    <div className="collection-item">
    <div style={{backgroundImage:`url(${imageUrl})`}} className="image" />


    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    { currentUser ?
        <CustomButton onClick={()=> AddItem(item)} inverted>Add To Cart</CustomButton>
        :
        <CustomButton type="button" onClick={()=> history.push('/Signin')} loggedin >Login For Add To Cart</CustomButton>
    }
  
</div>
    )
}


const mapDispatchToProps = dispatch => ({

    AddItem: item => dispatch(AddItem(item))
})

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    
  })
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionItems)) 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
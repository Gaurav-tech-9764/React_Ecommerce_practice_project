import React from "react";
import { connect } from "react-redux";
import { AddItem } from "../../redux/Cart/CartAction";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItems.Styles.scss"

const CollectionItems = ({item, AddItem}) =>{
    const {name, price, imageUrl} = item
    return(
    <div className="collection-item">
    <div style={{backgroundImage:`url(${imageUrl})`}} className="image" />


    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <CustomButton onClick={()=> AddItem(item)} inverted>Add To Cart</CustomButton>
</div>
    )
}


const mapDispatchToProps = dispatch => ({

    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItems)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
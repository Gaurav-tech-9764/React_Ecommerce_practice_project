import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/User/UserSelector";
import { AddItem } from "../../redux/Cart/CartAction";
import { useHistory } from "react-router";
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemStyles, NameContainer, PriceContainer } from "./CollectionItem.Styles";

const CollectionItems = ({item}) =>{

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const history = useHistory()

    const {name, price, imageUrl} = item
    return(
    <CollectionItemStyles>
    <BackgroundImage style={{backgroundImage:`url(${imageUrl})`}} className="image" />


    <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
    </CollectionFooterContainer>
    { currentUser ?
        <AddButton onClick={()=>dispatch(AddItem(item))} inverted>Add To Cart</AddButton>
        :
        <AddButton  onClick={()=> history.push('/Signin')} loggedin >Login For Add To Cart</AddButton>
    }
  
</CollectionItemStyles>
    )
}


// const mapDispatchToProps = dispatch => ({

//     AddItem: item => dispatch(AddItem(item))
// })

// const mapStateToProps =  createStructuredSelector({
//     currentUser: selectCurrentUser,
    
//   })
export default CollectionItems
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
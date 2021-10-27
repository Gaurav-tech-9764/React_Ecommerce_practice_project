import React from "react";
import { useSelector } from "react-redux";
import { SelectCollectionForPreview } from "../../redux/Shop-redux/ShopSelector";
import PreviewCollection from "../Preview/PreviewCollection";
import { CollectionOverview } from "./CollectionOverView.Styles";



const CollectionOverView = () => {

    const collection =useSelector(SelectCollectionForPreview)
    return(
<CollectionOverview>

             {

collection.map(({id, ...othercollectionProps}) => (

<PreviewCollection key={id} {...othercollectionProps}/>
))
}
      


</CollectionOverview>
  
    )
}

// const mapStateToProps=createStructuredSelector({
//     collection:SelectCollectionForPreview
// })

export default CollectionOverView
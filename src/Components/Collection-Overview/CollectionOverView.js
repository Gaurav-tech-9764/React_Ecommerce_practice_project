import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectShopCollection } from "../../redux/Shop-redux/ShopSelector";
import PreviewCollection from "../Preview/PreviewCollection";
import "./CollectionOverView.Styles.scss"


const CollectionOverView = ({collection}) => {
    return(

        <div className="collection-overview">
             {

collection.map(({id, ...othercollectionProps}) => (

<PreviewCollection key={id} {...othercollectionProps}/>
))
}
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    collection:SelectShopCollection
})

export default connect(mapStateToProps)(CollectionOverView)
import React from "react"
import  {Route}  from "react-router"
import CollectionOverView from "../../Components/Collection-Overview/CollectionOverView"
import CollectionPage from "../Collection/CollectionPage"



const Shop = ({ match }) => {

    return(

    <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverView} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
    )
}
  

    

export default Shop
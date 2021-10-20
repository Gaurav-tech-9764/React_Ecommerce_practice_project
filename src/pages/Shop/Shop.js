import React, { useEffect } from "react"
import  {Route}  from "react-router"
import { useDispatch } from "react-redux"
import { FetchCollectionStart } from "../../redux/Shop-redux/ShopAction"
import CollectionsOverviewContainer from "../../Components/Collection-Overview/CollectionOverViewContainer"
import CollectionPageContainer from "../Collection/CollectionPageContainer"


const  Shop = ({ match}) => {

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(FetchCollectionStart())
  },[dispatch])


   

  return(
        <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
      )
 
}


  
// const mapDispatchToProps = dispatch =>({
//   FetchCollectionStart: () =>dispatch(FetchCollectionStart())
// }

// )


    

export default Shop
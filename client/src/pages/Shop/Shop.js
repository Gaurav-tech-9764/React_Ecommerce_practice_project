import React, { useEffect } from "react"
import  {Route}  from "react-router"
import { useDispatch } from "react-redux"
import { FetchCollectionStart } from "../../redux/Shop-redux/ShopAction"
// import CollectionsOverviewContainer from "../../Components/Collection-Overview/CollectionOverViewContainer"
// import CollectionPageContainer from "../Collection/CollectionPageContainer"
import { lazy } from "react"
import { Suspense } from "react"
import SimpleSpinner from "../../Components/NewSpinner/SimpleSpinner"
import ErrorBoundary from "../../Components/Error-Boundary/ErroBoundary"


const CollectionsOverviewContainer = lazy(()=> import('../../Components/Collection-Overview/CollectionOverViewContainer'))
const CollectionPageContainer = lazy(()=>import('../Collection/CollectionPageContainer'))
const  Shop = ({ match}) => {

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(FetchCollectionStart())
  },[dispatch])


   

  return(
        <div className='shop-page'>
        <ErrorBoundary>
        <Suspense fallback={<SimpleSpinner/>}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </Suspense>
        </ErrorBoundary>
        </div>
      )
 
}


  
// const mapDispatchToProps = dispatch =>({
//   FetchCollectionStart: () =>dispatch(FetchCollectionStart())
// }

// )


    

export default Shop
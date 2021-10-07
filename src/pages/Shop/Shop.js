import React, { Component } from "react"
import  {Route}  from "react-router"
import { connect } from "react-redux"
import { FetchCollectionStartAsync } from "../../redux/Shop-redux/ShopAction"
import CollectionsOverviewContainer from "../../Components/Collection-Overview/CollectionOverViewContainer"
import CollectionPageContainer from "../Collection/CollectionPageContainer"

class  Shop extends Component {

  componentDidMount(){
        const {FetchCollectionStartAsync} = this.props

        FetchCollectionStartAsync()
 }

 render(){
      const {match} = this.props

  return(
        <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
      )
    }
  }


  
const mapDispatchToProps = dispatch =>({
  FetchCollectionStartAsync: () =>dispatch(FetchCollectionStartAsync())
}

)


    

export default connect(null, mapDispatchToProps) (Shop)
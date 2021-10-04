import React, { Component } from "react"
import  {Route}  from "react-router"
import CollectionOverView from "../../Components/Collection-Overview/CollectionOverView"
import CollectionPage from "../Collection/CollectionPage"
import { firestore, ConverCollectionsSnapshotMap } from "../../FireBase/Firebase-util"
import { connect } from "react-redux"
import { updateCollection } from "../../redux/Shop-redux/ShopAction"
import Spinner from "../../Components/Spinner-Component/Spinner"


const CollectionOverViewWithSpinner = Spinner(CollectionOverView);
const CollectionPageWithSpinner = Spinner(CollectionPage)


class  Shop extends Component {


  state={
    isLoading : true 
   };

  unSubscribeFromSnapShot = null;

  componentDidMount(){

    const {updateCollection} = this.props

    const collectionRef =firestore.collection('collections');

    collectionRef.get().then( snapShot => {
const CollectionMap=ConverCollectionsSnapshotMap(snapShot)
updateCollection(CollectionMap);
this.setState({isLoading:false})
    } 
      )

  }


 render(){
const {match} = this.props
const {isLoading} = this.state

  return(

    <div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props) => <CollectionOverViewWithSpinner isLoading={isLoading}{...props}/>} />
    <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={isLoading}{...props}/>} />
  </div>
    )
   
 }
}
  
const mapDispatchToProps = dispatch =>({
  updateCollection: (collectionMap) =>dispatch(updateCollection(collectionMap))
}

)


    

export default connect(null, mapDispatchToProps) (Shop)
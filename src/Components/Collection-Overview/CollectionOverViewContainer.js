import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { SelectIsCollectionFetching } from "../../redux/Shop-redux/ShopSelector";
import Spinner from "../Spinner-Component/Spinner";
import CollectionOverView from "./CollectionOverView";



const mapStateToProps = createStructuredSelector({
  isLoading: SelectIsCollectionFetching,
   
  })
    

  const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    Spinner
  )(CollectionOverView);


  export default CollectionsOverviewContainer
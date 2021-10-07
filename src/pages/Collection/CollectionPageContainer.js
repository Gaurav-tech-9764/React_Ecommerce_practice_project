import { connect } from "react-redux";
import { SelectIsCollectionLoaded } from "../../redux/Shop-redux/ShopSelector";
import { createStructuredSelector } from "reselect";
import CollectionPage from "./CollectionPage";
import { compose } from "redux";
import Spinner from "../../Components/Spinner-Component/Spinner";

const mapStateToProps = createStructuredSelector({

    isLoading: state => !SelectIsCollectionLoaded(state)
  })

  const CollectionPageContainer = compose(
      connect(mapStateToProps),
      Spinner

  )(CollectionPage)

  export default CollectionPageContainer

import ShopActionTypes from "./ShopTypes";

const INITIAL_STATE = {
  ShopData: null,
  isFetching: false,
  errorMessage: undefined
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ShopActionTypes.FETCH_COLLECTION_START:
      return{
        ...state,
        isFetching:true
      }
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
     return {
  ...state,
  isFetching:false,
  ShopData: action.payload
    }
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
   ...state,
   isFetching:false,
  errorMessage: action.payload
     }

    default:
      return state;
  }
};

export default ShopReducer;
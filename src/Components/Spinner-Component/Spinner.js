import React  from "react";
import SimpleSpinner from "../NewSpinner/SimpleSpinner";
//  import { SpinnerContainer, SpinnerOverlay } from "./Spinner.Styles";


 const Spinner = WrappedComponent => {
    const SpinnerComponent = ({ isLoading, ...otherProps }) => {
      return isLoading ? (
       <SimpleSpinner/>
      ) : (
        <WrappedComponent {...otherProps} />
      );
    };
    return SpinnerComponent;
  };
  
  export default Spinner;
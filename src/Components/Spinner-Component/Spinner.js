import React  from "react";
 import { SpinnerContainer, SpinnerOverlay } from "./Spinner.Styles";


 const Spinner = WrappedComponent => {
    const SpinnerComponent = ({ isLoading, ...otherProps }) => {
      return isLoading ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <WrappedComponent {...otherProps} />
      );
    };
    return SpinnerComponent;
  };
  
  export default Spinner;
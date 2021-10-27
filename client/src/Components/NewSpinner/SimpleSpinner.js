import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./SimpleSpinner.Styles";

const SimpleSpinner = () => {
    return(
      <SpinnerOverlay>
          <SpinnerContainer/>
      </SpinnerOverlay>
    )
}

export default SimpleSpinner
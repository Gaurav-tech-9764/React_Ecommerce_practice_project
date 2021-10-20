import React from 'react';


import { CustomButtonContainer } from './CustomeButton.Styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

// ({ children, isGoogleSignIn, loggedin,inverted, ...otherProps }) => (
//   <button
//     className={`${loggedin ? 'loggedin' : ''} ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
//     {...otherProps}
//   >
//     {children}
//   </button>
// );
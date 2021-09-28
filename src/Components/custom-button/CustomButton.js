import React from 'react';

import './CustomButton.Styles.scss';

const CustomButton = ({ children, isGoogleSignIn, loggedin,inverted, ...otherProps }) => (
  <button
    className={`${loggedin ? 'loggedin' : ''} ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
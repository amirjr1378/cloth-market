import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './Spinner.styles';
function Spinner({ ...props }) {
   return (
      <SpinnerOverlay>
         <SpinnerContainer />
      </SpinnerOverlay>
   );
}


export default Spinner;

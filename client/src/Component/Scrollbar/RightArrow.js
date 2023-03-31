import React from 'react'
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Arrow from './Arrow';
function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </Arrow>
    );
}

export default RightArrow
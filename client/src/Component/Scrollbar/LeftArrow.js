import React from 'react'
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Arrow from './Arrow';
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =React.useContext(VisibilityContext);
  return (
    <Arrow  disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

export default LeftArrow
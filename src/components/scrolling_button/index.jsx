import React from 'react';

const ScrollingButton = () =>{
  return (
    <a id="scrollUp" href="#top" style="position: fixed; z-index: 2147483647; display: block;">
        <i class="fa fa-angle-up" aria-hidden="true"/>
    </a>
  );
}

export default ScrollingButton;

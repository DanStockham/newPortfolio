import React from 'react';
import Nav from './Nav.js';

export const Wrapper = (props) => {
    return (
      <div>
            <Nav />
            {props.children}
      </div>
    )
}

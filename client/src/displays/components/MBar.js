import React from 'react';
import MButton from './MButton';

/**
 * Menu Button Functional Component.
 * 
 * Still in progress...
 */
function MBar(props) {
  // Load buttons.
  let buttons = Object.entries(props.buttons).map(option => (
    <MButton flexible 
      key={option[0]}
      text={option[0]} 
      dropdowns={option[1]} 
    />
  ));

  return (
    <div className="flexDisplay">
      {buttons}
    </div>
  );
}

export default MBar;
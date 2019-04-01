import React from 'react';
import MButton from './MButton';

/**
 * Menu Button Functional Component.
 * 
 * Still in progress...
 */
function MBar(props) {
  // Load buttons.
  let buttons;
  
  if (props.options) {
    // Create each option.
    buttons = props.options.map((option, index) => (
      <MButton flexible 
        key={index}
        label={option.label} 
        onClick={option.onClick}
        clickType={props.clickType}
        widthDivisor={props.options.length}
        dropDowns={option.dropDowns}
        dropDownType={props.dropDownType} 
      />
    ));
  } 

  return (
    <div className="flexDisplay">
      {buttons}
    </div>
  );
}

export default MBar;
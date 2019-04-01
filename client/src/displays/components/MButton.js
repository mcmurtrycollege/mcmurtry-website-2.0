import React from 'react';

/**
 * MenuButton Functional Component.
 * 
 * Still in progress...
 */
function MButton(props) {
  let dropdownMenu = null;

  if (props.dropdowns) {
    let options = Object.entries(props.dropdowns).map(option => (
      <div className="tertiary whiteText"
        key={option[0]}
      >
        {option[0]}
      </div>
    ));

    dropdownMenu = (
      <div className="dropdown">
        {options}
      </div>
    );
  }

  let conatinerClassName = "primary buttonContainer";

  if (props.flexible) {
    conatinerClassName += " flexible";
  }

  return (
    <span className={conatinerClassName}>
      <div className="clickable whiteText buttonPane">
        {props.text}
      </div>
      {dropdownMenu}
    </span>
  );
}

export default MButton;
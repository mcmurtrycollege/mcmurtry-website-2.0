import React from 'react';

/**
 * MenuButton Functional Component.
 * 
 * Still in progress...
 */
function MButton(props) {
  let dropDownMenu;

  // Create Dropdown menu.
  if (props.dropDowns) {
    // Create each option.
    let options = props.dropDowns.map((option, index) => (
      <MButton key={index}
        label={option.label}
        onClick={option.onClick}
        clickType={props.dropDownType}
      />
    ));
    
    // Calculate width of drop down.
    let perWidth = ((1.0 / props.widthDivisor) * 100) + "%";

    // Create drop down.
    dropDownMenu = (
      <div className="dropdown" style={{width : perWidth}}>
        {options}
      </div>
    );
  }

  // Create container class name.
  let conatinerClassName = "buttonContainer";

  if (props.flexible) {
    conatinerClassName = "flexible " + conatinerClassName;
  }

  // Create button class name.
  let paneClassName = props.clickType + " slow buttonPane";

  return (
    <span className={conatinerClassName}>
      <div className={paneClassName} onClick={props.onClick}>
        {props.label}
      </div>
      {dropDownMenu}
    </span>
  );
}

export default MButton;
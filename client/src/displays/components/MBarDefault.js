import React from 'react';
import MBar from './MBar';

function MBarDefault(props) {
  return (
    <MBar
      clickType="clickable1"
      dropDownType="clickable1"
      options={[
        {
          label : "About"
        }, 
        {
          label : "Events",
          dropDowns : [
            {
              label : "Events"
            },
            {
              label : "Arts Events"
            },
            {
              label : "Contacts"
            }
          ]
        }, 
        {
          label : "Residential Leadership"
        },
        {
          label : "Academics"
        },
        {
          label : "Wellbeing"
        },
        {
          label : "Guiding Documents"
        },
        {
          label : "O-Week"
        },
        {
          label : "Resources"
        },
        {
          label : "Contact"
        }
      ]} 
    />
  );
}

export default MBarDefault;
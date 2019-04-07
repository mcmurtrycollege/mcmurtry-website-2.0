import React from 'react';
import Title from '../../../title';
import './constitution.css';


const Constitution = () => (
    <div className='constitution-page'>
        <Title width={360} title="Constitution" />
        <div className='constitution-pdf'>
            <iframe src="https://mcmurtry.rice.edu/assets/files/mcm_constitution.pdf" width="600" height="820" frameBorder="0" scrolling="yes" title="Constitution"></iframe>
        </div>
    </div>
)

export default Constitution;
import React from 'react';
import Title from '../../../title';
import './general-bylaws.css';


const GeneralBylaws = () => (
    <div className='general-bylaws-page'>
        <Title width={260} title="General Bylaws" />
        <div className='general-bylaws-pdf'>
            <iframe src="https://mcmurtry.rice.edu/assets/files/mcm_bylaws.pdf" width="600" height="820" frameBorder="0" scrolling="yes" title="General Bylaws"></iframe>
        </div>
    </div>
)

export default GeneralBylaws;
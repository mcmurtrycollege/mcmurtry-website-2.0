import React from 'react';
import Title from '../../../title';
import './housing-bylaws.css';


const HousingBylaws = () => (
    <div className='housing-bylaws-page'>
        <Title width={260} title="Housing Bylaws" />
        <div className='housing-bylaws-pdf'>
            <iframe src="https://mcmurtry.rice.edu/assets/files/mcm_housing_bylaws.pdf" width="600" height="820" frameBorder="0" scrolling="yes" title="Housing Bylaws"></iframe>
        </div>
    </div>
)

export default HousingBylaws;
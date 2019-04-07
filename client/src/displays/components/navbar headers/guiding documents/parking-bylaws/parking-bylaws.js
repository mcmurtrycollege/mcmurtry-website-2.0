import React from 'react';
import Title from '../../../title';
import './parking-bylaws.css';


const ParkingBylaws = () => (
    <div className='parking-bylaws-page'>
        <Title width={260} title="Parking Bylaws" />
        <div className='parking-bylaws-pdf'>
            <iframe src="https://mcmurtry.rice.edu/assets/files/mcm_parking_bylaws.pdf" width="600" height="820" frameBorder="0" scrolling="yes" title="Parking Bylaws"></iframe>
        </div>
    </div>
)

export default ParkingBylaws;
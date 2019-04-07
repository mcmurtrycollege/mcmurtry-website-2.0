import React from 'react';
import Title from '../../../title';
import './initiativerequest.css';


const InitiativeRequest = () => (
    <div className='initiative-request-page'>
        <Title width={230} title="Initiative Request" />
        <div className='initiative-request-form'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWw9BThDp7wDgxtYYvwRomD-myrMXZYP6ve-TzincU81ViBg/viewform?embedded=true" width="700" height="2000" frameBorder="0" scrolling="yes" type="text/javascript" title="Initiatives Request"></iframe>
        </div>
    </div>
)

export default InitiativeRequest;

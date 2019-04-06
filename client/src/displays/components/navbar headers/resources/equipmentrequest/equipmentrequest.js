import React from 'react';
import Title from '../../../title';
import './equipmentrequest.css';


const EquipmentRequest = () => (
    <div className='equipment-request-page'>
        <Title width={360} title="Equipment Request" />
        <div className='equipment-request-form'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekrzRmxwFU8DxqwLAxV94b9OFyesTLxkmwjituOuCSIjUjtQ/viewform?embedded=true&formkey=dFRXRWdxa20yMlF2dEN2U1lSNWxSemc6MQ" width="700" height="2200" frameBorder="0" scrolling="yes" type="text/javascript"></iframe>
        </div>
    </div>
)

export default EquipmentRequest;
import React from 'react';
import { Box } from 'rebass';
import Title from '../../title';
import Wellbeing_Cards from './wellbeing_contact_card';
import './wellbeing.css';
import { RHAs } from './wellbeing.json';

const ResidentHealthAdvisors = () => (
    <div className='wellbeing-page'>
        <Title width={350} title="Resident Health Advisors" smallText={true} />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
            {RHAs.description}
        </Box>
        <div>
            <Wellbeing_Cards content={RHAs.members} />
        </div>
    </div>
)

export default ResidentHealthAdvisors;
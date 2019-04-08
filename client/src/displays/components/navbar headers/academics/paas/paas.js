import React from 'react';
import { Box } from 'rebass';
import Title from '../../../title';
import AcademicCards from '../academic_contact_cards';
import {paas_description, paas } from './paas.json';
import './paas.css';

const PAAs = () => (
    <div className='paas-page'>
        <Title width={300} title="Peer Academic Advisors" smallText={true} />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='paas-description'>
            {paas_description}
        </Box>
        <div>
            <AcademicCards content={paas} height={200} />
        </div>
    </div>
)

export default PAAs;
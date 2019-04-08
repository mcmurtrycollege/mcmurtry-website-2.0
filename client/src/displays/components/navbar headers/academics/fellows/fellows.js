import React from 'react';
import { Box } from 'rebass';
import Title from '../../../title';
import AcademicCards from '../academic_contact_cards';
import {fellows_description, fellows } from './fellows.json';
import './fellows.css';

const AcademicFellows = () => (
    <div className='fellows-page'>
        <Title width={[320, 500]} title="Academic Fellows" />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='fellows-description'>
            {fellows_description}
        </Box>
        <div>
            <AcademicCards content={fellows} height={150} />
        </div>
    </div>
)

export default AcademicFellows;
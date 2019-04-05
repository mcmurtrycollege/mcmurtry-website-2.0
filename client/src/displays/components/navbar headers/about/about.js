import React from 'react';
import Title from '../../title';
import { Box } from 'rebass';
import './about.css';
import { about, burtDeeDee } from './about.json';

const About = () => (
    <div className='about-page'>
        <Title width={300} title="About McMurtry" />
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto'>
            <p>
                {about}
            </p>
        </Box>
        <Title width={300} title="Burt and Deedee McMurtry" />
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={50}>
            <p>
                {burtDeeDee}
            </p>
        </Box>
    </div>

)

export default About;
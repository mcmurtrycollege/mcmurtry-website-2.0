import React from 'react';
import { Box, Image } from 'rebass';
import Title from '../../title';
import './about.css';
import { about, burtDeeDee } from './about.json';
import mcm_commons from '../../../static/mcm_commons.jpg';
import burt_deedee from '../../../static/burt_deedee.jpg';

const About = () => (
    <div className='about-page'>
        <Title width={190} title="About" />
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={50}>
            <Box className='about-subtitle' mr='auto' ml='auto' width={290} my={20}>
                <h1 style={{margin: '8px', fontWeight: 'normal'}}>McMurtry</h1>
            </Box>
            <p>
                <Image src={mcm_commons} alt='' width={360} style={{ padding: '10px 20px', float: 'left' }} />
                {about}
            </p>
        </Box>
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={50}>
            <Box className='about-subtitle' mr='auto' ml='auto' width={[300, 480]} my={20}>
                <h1 style={{margin: '8px', fontWeight: 'normal'}}>Burt and Deedee McMurtry</h1>
            </Box>
            <p>
                <Image src={burt_deedee} alt='' width={320} style={{ padding: '10px 20px', float: 'right' }} />
                {burtDeeDee}
            </p>
        </Box>
    </div>

)

export default About;
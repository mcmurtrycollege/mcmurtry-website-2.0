import React from 'react';
import { Box, Image } from 'rebass';
import Title from '../title';
import './intropage.css';

import Yurt from '../../static/YurtTest.svg';

const Intro = () => (
    <div className='intro-page'>

        {/* Note: This is a temporary image to act as a placeholder */}

        <Box width={0.6} ml='auto' mr='auto'>
            <Image src={Yurt} />
        </Box>
    </div>
)

export default Intro;
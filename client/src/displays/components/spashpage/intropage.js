import React from 'react';
import { Box, Image } from 'rebass';
import Title from '../title';
import './intropage.css';

import Yurt from '../../static/YurtTrees.svg';

const Intro = () => (
    <div className='intro-page'>

        {/* Note: This is a temporary image to act as a placeholder */}
        <Title width={360} title="We Are Murt" />
        <Box width={0.8} ml='auto' mr='auto'>
            <Image src={Yurt} />
        </Box>
        {/* <Title width={360} title="You Are Dirt" /> */}
    </div>
)

export default Intro;
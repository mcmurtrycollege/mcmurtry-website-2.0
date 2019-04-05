import React from 'react';
import { Box, Image } from 'rebass';
import './mcmLogo.css';

import mcmCrest from '../static/mcmCrest.svg';

const McmLogo = () => (
    <div>
        <div className='mcm-crest'>
            <Box width={[0.7, 0.3]} ml='auto' mr='auto' pt={0.1}>
                <Image src={mcmCrest} />
            </Box>
        </div>
    </div>
)

export default McmLogo;
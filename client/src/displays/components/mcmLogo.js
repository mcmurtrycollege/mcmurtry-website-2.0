import React from 'react';
import { Box, Image } from 'rebass';
import './mcmLogo.css';

import mcmCrest from '../static/mcmCrest.svg';

const McmLogo = () => (
    <div>
        <Box width={[0.7, 0.3]} ml='auto' mr='auto' pt={0.1}>
            <div class='mcm-crest'>
                <Image src={mcmCrest} />
            </div>
        </Box>
    </div>
)

export default McmLogo;
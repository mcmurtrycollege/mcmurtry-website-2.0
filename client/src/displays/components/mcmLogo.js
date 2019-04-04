import React from 'react';
import { Box, Image } from 'rebass';
import './mcmLogo.css';

import mcmCrest from '../static/mcmCrest.svg';

const McmLogo = () => (
    <div>
        <Box width={[0.7, 0.3]} class='mcm-crest' ml='auto' mr='auto' pt={0.1}>
            <Image src={mcmCrest} />
        </Box>
    </div>
)

export default McmLogo;
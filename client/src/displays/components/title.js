import React from 'react';
import { Box } from 'rebass';

const title_style = {
        fontSize: '3em',
        textAlign: 'center',
        fontWeight: 'normal',
        border: '2px solid #422a4C',
        padding: '8px',
        color: '#422a4C',
        backgroundColor: '#DDCEE5'
}

const Title = props => (
    <Box width={props.width} ml='auto' mr='auto'>
        <h1 style={title_style}>{props.title}</h1>
    </Box>
)

export default Title;

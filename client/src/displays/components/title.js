import React from 'react';
import { Box } from 'rebass';

const title_style1 = {
        fontSize: '2em',
        textAlign: 'center',
        fontWeight: 'normal',
        border: '1px solid #422a4C',
        padding: '8px',
        color: '#431e69'
        // backgroundColor: '#DDCEE5'
}

const title_style2 = {
    fontSize: '2em',
    textAlign: 'center',
    fontWeight: 'normal',
    border: '1px solid #422a4C',
    padding: '8px',
    color: '#431e69'
    // backgroundColor: '#DDCEE5'
}

const Title = props => (
    <Box width={props.width} ml='auto' mr='auto'>
        <h1 style={props.smallText ? (title_style2) : (title_style1)}>{props.title}</h1>
    </Box>
)

export default Title;

import React from 'react';
import { Box, Flex } from 'rebass';
import './contactcards.css';

const Card = props => (
    props.position !== undefined ? (
        <Box className='position-card' width={280}>
            <div className="position-card-content">
                <h2 className="position">{props.position}:</h2>
                <h2 className="name">{props.name}</h2>
                <a href={`mailto:${props.email}`} className='contact'>
                    <h3 className="contact-email"><img src="https://icon.now.sh/arrow/422a4C" />{' '}{props.email}</h3>
                </a>
                <h4>Year: {props.year}</h4>
            </div>
        </Box>
    ) : (
        <Box className='position-card' width={280}>
            <div className="positionless-card-content">
                <h2 className="name">{props.name}</h2>
                <a href={`mailto:${props.email}`} className='contact'>
                    <h3 className="contact-email"><img src="https://icon.now.sh/arrow/422a4C" />{' '}{props.email}</h3>
                </a>
                <h4>Year: {props.year}</h4>
            </div>
        </Box>
    )
)

const Cards = props => (
    <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                props.content.map(({ position, name, year, email }) => (
                    <Card key={name} position={position} name={name} year={year} email={email} />
                ))
            }
        </Flex>
    </Box>
)

export default Cards;
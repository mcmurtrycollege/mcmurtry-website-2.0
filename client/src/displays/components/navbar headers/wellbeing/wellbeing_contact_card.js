import React from 'react';
import { Box, Flex } from 'rebass';
import './wellbeing_contact_cards.css';

const WellbeingContactCard = props => (
    <Box className='wellbeing-card' width={220}>
        <div className="wellbeing-card-content">
            <h2 className="wellbeing-card-name">{props.name}</h2>
            <h3 className='wellbeing-card-phone'>
                <img src="https://icon.now.sh/call/422a4C/16" />
                {' '}{props.phone}
            </h3>
            <h2 className='wellbeing-card-room'>
                Room Number: {props.room}
            </h2>
        </div>
    </Box>
)

const WellbeingCards = props => (
    <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                props.content.map(({ name, phone, room }) => (
                    <WellbeingContactCard key={name} name={name} phone={phone} room={room} />
                ))
            }
        </Flex>
    </Box>
)

export default WellbeingCards;
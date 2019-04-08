import React from 'react';
import { Box, Flex } from 'rebass';
import './academic_cards.css';

const AcademicContactCard = props => (
    <Box className='academic-card' width={250}>
        <div className="academic-card-content">
            {
                props.position !== undefined ? (
                    <h2 className="academic-position">{props.position}</h2>
                ) : (
                        null
                    )
            }
            <h2 className="academic-card-name">{props.name}</h2>
            <a href={`mailto:${props.email}`} className='academic-contact'>
                <h3 className="academic-contact-email"><img src="https://icon.now.sh/arrow/422a4C/10" alt="email" />{' '}{props.email}</h3>
            </a>
            <h2 className='academic-card-major'>
                Major: {props.major}
            </h2>
            {
                props.subjects !== undefined ? (
                    <h2 className="academic-subjects">Subjects: {props.subjects}</h2>

                ) : (
                        null
                    )
            }
        </div>
    </Box>
)

const AcademicCards = props => (
    <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                props.content.map(({ position, name, email, major, subjects }) => (
                    <AcademicContactCard key={name} position={position} name={name} email={email} major={major} subjects={subjects} />
                ))
            }
        </Flex>
    </Box>
)

export default AcademicCards;
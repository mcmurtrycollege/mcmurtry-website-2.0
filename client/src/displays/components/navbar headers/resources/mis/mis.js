import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../../title';
import './mis.css';
import { content, hours, personnel } from './mis.json';
import mis_rules from '../../../../static/mis_safety.pdf';

const McmInovationSpace = () => (
    <div className='mis-page'>
        <Title width={350} title='McMurtry Inovation Space' smallText={true} />
        <Box className='mis-paragraphs' width={[1, 0.8, 0.7, 0.6]} ml='auto' mr='auto'>
            {
                content.map(paragraph => (
                    <p key={content.indexOf(paragraph)}>{paragraph}</p>
                ))
            }
        </Box>
        <Flex flexWrap='wrap' justifyContent='center' flexDirection='row'>
            <Box width={[0.8, 0.28]} className='mis-info' style={{margin: '2%'}}>
                <a href={mis_rules} style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
                    <div>
                        <h2 className='mis-link'>Safety Guidlines <img src="https://icon.now.sh/arrow/422a4C/18" alt="arrow" /></h2>
                    </div>
                </a>
            </Box>
            <Box width={[0.8, 0.28]} className='mis-info' style={{margin: '2%'}}>
                <a href='https://docs.google.com/spreadsheets/d/18Lu5pL6v0oYOnZQu4kYPGuUyiMvAfOHZXBH39udHVXI/edit' style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
                    <div>
                        <h2 className='mis-link'>Equipment Information <img src="https://icon.now.sh/arrow/422a4C/18" alt="arrow" /></h2>
                    </div>
                </a>
            </Box>
        </Flex>
        <Box width={[0.8, 0.28]} className='mis-email-link' style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <a href='mailto:mcminnovationspace@gmail.com' style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
                <div>
                    <h2 className='mis-link' style={{fontSize: '1em'}}>Email Us at mcminnovationspace@gmail.com</h2>
                </div>
            </a>
        </Box>
        <Box width={[1, 0.7]} pb={20} ml='auto' mr='auto' className='schedule-box'>
            <Box width={[0.4, 0.25]} className='subtitle' ml='auto' mr='auto'>
                <h2>Hours</h2>
            </Box>
            <Flex justifyContent='center' flexWrap='wrap' flexDirection='row'>
                {
                    hours.map(({ day, hours }) => (
                        <Box width={150} className='schedule' key={`${day}`}>
                            <h2 className='schedule-item'>{day}</h2>
                            <h2 className='schedule-item' style={{ fontWeight: 'normal' }}>{hours}</h2>
                        </Box>
                    ))
                }
            </Flex>
        </Box>
        <Box width={[0.7, 0.2]} className='subtitle' ml='auto' mr='auto'>
            <h2>Student Personnel</h2>
        </Box>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                personnel.map(({ name, major, college, email, askMeAbout }) => (
                    <Box width={[0.9, 0.3]} className='mis-contact-card' key={`${name}`}>
                        <div className="mis-contact">
                            <h2 className='mis-name'>{name}</h2>
                            <h2 className='mis-major'>Major: {major}</h2>
                            <h2 className='mis-college'>College: {college}</h2>
                            <a href={`mailto:${email}`} style={{ textDecoration: 'none' }}>
                                <h2 className='mis-email'><img src="https://icon.now.sh/arrow/422a4C/14" alt="email" />{' '}{email}</h2>
                            </a>
                            <h2 className='mis-askMeHeader'>Ask Me About:</h2>
                            <p className='mis-askMeAbout'>{askMeAbout}</p>
                        </div>
                    </Box>
                ))
            }
        </Flex>
    </div>
)

export default McmInovationSpace;
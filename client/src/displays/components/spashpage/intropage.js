import React from 'react';
import { Box, Flex, Image } from 'rebass';
import { Link } from 'react-router-dom';
import './intropage.css';

import Yurt from '../../static/YurtTrees.svg';

const quickLinks = [
    {
        name: "Calendar",
        icon: "https://icon.now.sh/event/422a4C/70",
        to: "/events/"
    },
    {
        name: "O-Week",
        icon: "https://icon.now.sh/people/422a4C/70",
        href: "https://mcmurtryoweek.wixsite.com/home-page"
    },
    {
        name: "Book a Room",
        icon: "https://icon.now.sh/event_note/422a4C/70",
        to: "/roomreservations/"
    },
    {
        name: "Contact",
        icon: "https://icon.now.sh/question_answer/422a4C/70",
        to: "/contact/"
    }
]

const Intro = () => (
    <div className='intro-page'>
        <Box width={0.8} ml='auto' mr='auto' style={{textAlign: 'center'}}>
            <Image src={Yurt} />
        </Box>
        <Box className='quick-links-title' width={[0.8, 0.2]} ml='auto' mr='auto'>
            <h2 style={{ margin: '10px' }}>Quick Links</h2>
        </Box>
        <Flex justifyContent='center' flexWrap='wrap' flexDirection='row' >
            {
                quickLinks.map(({ name, icon, href, to }) => (
                    href === undefined ? (
                        <Link className='quick-link-container' to={to} key={`${name}`} style={{ textDecoration: 'none' }}>
                            <Box key={`${name}`} width={220}>
                                <div className='quick-link'>
                                    <img src={icon} alt='' />
                                    <h2 className='quick-link-name'>{name}</h2>
                                </div>
                            </Box>
                        </Link>
                    ) : (
                            <a href={href} className='quick-link-container' key={`${name}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <Box key={`${name}`} width={220}>
                                    <div className='quick-link'>
                                        <img src={icon} alt='' />
                                        <h2 className='quick-link-name'>{name}</h2>
                                    </div>
                                </Box>
                            </a>
                        )
                ))

            }
        </Flex>
    </div>
)

export default Intro;
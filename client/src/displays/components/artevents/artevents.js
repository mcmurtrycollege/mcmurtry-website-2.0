import React from 'react';
import Title from '../title';
import './artevents.css'

const eventStyle = {
    border: "0"
}

const ArtEvents = () => (
    <div className='artevents-page'>
        <Title width={250} title="Arts Calendar" />
        <div className='artevent-calendar'>
        <iframe src="https://calendar.google.com/calendar/embed?src=rice.edu_6u95bv80srmldk74hpf25jlgi0%40group.calendar.google.com&ctz=America/Chicago"  width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
    </div>
)

export default ArtEvents;
import React from 'react';
import Title from '../../../title';
import './events.css';

const eventStyle = {
    border: "0"
}

const Events = () => (
    <div className='events-page'>
        <Title width={190} title="Events" />
        <div className='event-calendar'>
            <iframe src="https://calendar.google.com/calendar/embed?src=rice.edu_03uqu2lvp1fcalj8r059715q40%40group.calendar.google.com&ctz=America/Chicago&amp;showTitle=0" width="800" height="600" frameBorder="0" scrolling="yes"></iframe>
        </div>
    </div>
)

export default Events;
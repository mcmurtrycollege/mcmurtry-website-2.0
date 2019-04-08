import React from 'react';
import Title from '../../../title';
import Cards from '../../../contactcards';
import './court.css';
import { justices } from './court.json';

export default class Court extends React.Component {
    render(){
        return (
            <div className='court-page'>
                <Title width={350} title="Court & Justices" />
                <Cards content={justices} height={140} />
            </div>
        )
    }
}
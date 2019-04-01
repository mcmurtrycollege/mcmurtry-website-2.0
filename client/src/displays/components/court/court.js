import React from 'react';
import Title from '../title';
import Cards from '../contactcards';
import { justices } from './court.json';

export default class Court extends React.Component {
    render(){
        return (
            <div>
                <Title width={420} title="Court & Justices" />
                <Cards content={justices} />
            </div>
        )
    }
}
import React from 'react';
import { Box } from 'rebass';
import './associates.css'
import { darkPurle, medPurple, offWhite, darkGrey, lightGrey } from './colors.json';

class BoxSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closed: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ closed: !this.state.closed })
    };

    render() {
        let h;
        if (this.state.closed) {
            h = 100;
        } else {
            h = 1000;
        }
        const style = {
            maxHeight: `${h}px`,
            backgroundColor: `${medPurple}`
        }
        return (
            <div>
                <Box width={[1, 1, 0.4, 0.3]} height={120} ml='auto' mr='auto' mt={200}>
                    <div className="associate_card" style={style} onClick={this.handleClick}>
                        <Box width={0.95} ml='auto' mr='auto' mt={10} style={{ backgroundColor: `${offWhite}` }}>
                            Image goes here.
                        </Box>
                        <h2 className='associate_name'>
                            John Associate
                        </h2>
                        <div>
                            <p className='associate_description'>
                                This the description. This the description. This the description. This the description. 
                            </p>
                        </div>
                    </div>
                </Box>
            </div>
        )
    }
}

export default BoxSlider;
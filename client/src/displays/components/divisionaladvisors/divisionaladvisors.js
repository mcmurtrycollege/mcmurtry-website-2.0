import React from 'react';
import { Box, Flex } from 'rebass';
import { advisors } from './divisionaladvisors.json';
import Title from '../title';
import './divisionaladvisors.css'

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
            h = 200;
        } else {
            h = this.props.openHeight;
        }
        const style = {
            maxHeight: `${h}px`,
            backgroundColor: '#9570A5'
        }
        return (
            <div>
                <Box width={[0.95, 0.9, 0.8, 0.7]} ml='auto' mr='auto'>
                    <div className="advisor-card" style={style} onClick={this.handleClick}>
                        <h2 className='advisor-name'>
                            {this.props.name}
                        </h2>
                        <h2 className='advisor-school'>{this.props.school}</h2>
                        <div>
                            <p className='advisor-bio'>
                                {this.props.bio}
                            </p>
                        </div>
                    </div>
                </Box>
            </div>
        )
    }
}

export default class DivisionalAdvisors extends React.Component {
    render() {
        return (
            <div>
                <Title width={[320, 500]} title="Divisional Advisors" />
                <div>
                    {
                        advisors.map(({ name, school, bio }) => (
                            <BoxSlider key={name} name={name} school={school} bio={bio} openHeight={1200} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
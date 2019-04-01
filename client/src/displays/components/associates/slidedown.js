import React from 'react';

export default class Slider extends React.Component {
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
            h = 20;
        } else {
            h = 90;
        }
        const style = {
            height: `${h}px`,
            width: '100px',
            backgroundColor: 'blue',
            overflow: 'hidden',
            transition: 'height 0.3s ease-in-out',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white'
        }
        return (
            <div className="App">
                <div style={style} onClick={this.handleClick}>
                    <p>
                        CONTENT
                    </p>
                    <p>
                        CONTENT
                    </p>
                    <p>
                        CONTENT
                    </p>
                </div>
            </div>
        )
    }
}
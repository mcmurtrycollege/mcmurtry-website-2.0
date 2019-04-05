import React from 'react';
import './navbar.css';
import McmLogo from '../mcmLogo';
import { navbar_items } from './navbar.json';

class DropDownWide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({ expanded: true });
    }

    handleMouseLeave() {
        this.setState({ expanded: false })
    }

    render() {
        let h;
        if (this.state.expanded) {
            h = 500;
        } else {
            h = 0;
        }
        const dropDownHeightStyle = {
            maxHeight: `${h}px`,
        }
        return (
            <div className='dropdown-item' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className='dropdown-header'>
                    {this.props.header}
                </div>
                <div className='dropdown-subheaders' style={dropDownHeightStyle}>
                    {
                        this.props.dropDownChildren.map(({ subheader }) => (
                            <div className='dropdown-subheader' key={`${subheader}`}>
                                {subheader}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

class DropDownNarrow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({expanded: !this.state.expanded})
    };

    render() {
        let h;
        if (this.state.expanded) {
            h = 500;
        } else {
            h = 0;
        }
        const dropDownHeightStyle = {
            maxHeight: `${h}px`,
        }
        return (
            <div className='dropdown-item'>
                <div className='dropdown-header' onClick={this.handleClick}>
                    {this.props.header}
                </div>
                <div className='dropdown-subheaders' style={dropDownHeightStyle}>
                    {
                        this.props.dropDownChildren.map(({ subheader }) => (
                            <div className='dropdown-subheader' key={`${subheader}`}>
                                {subheader}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            closed: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            closed: !this.state.closed
        })
    }

    render() {
        let narrowNavBarStyle = {};
        let burgerStyle = {transition: 'transform 0.2s ease-in-out'};
        if (this.state.closed) {
            narrowNavBarStyle.maxHeight = '0px'
        } else {
            narrowNavBarStyle.maxHeight = '1000px'
            burgerStyle.transform = 'rotate(90deg)'
        }

        return (
            <div>
                <div className='navbar-crest'>
                    <McmLogo />
                </div>
                <div className='wide-navbar'>
                    {
                        this.props.dropDownItems.map(({ header, dropDownChildren }) => (
                            <DropDownWide header={header} dropDownChildren={dropDownChildren} key={`${header}`}/>
                        ))
                    }
                </div>
                <div className='narrow-navbar'>
                    <div className='narrow-navbar-toggle' >
                        <img style={burgerStyle} onClick={this.handleClick} src='https://icon.now.sh/burger/DDCEE5/24' />
                    </div>
                    <McmLogo />
                    <div className='narrow-navbar-menu' style={narrowNavBarStyle}>
                        {
                            this.props.dropDownItems.map(({ header, dropDownChildren }) => (
                                <DropDownNarrow header={header} dropDownChildren={dropDownChildren} key={`${header}`}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const Navbar = () => (
    <div>
        <NavBar dropDownItems={navbar_items} />
    </div>
)

export default Navbar;
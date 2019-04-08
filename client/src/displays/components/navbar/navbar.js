import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import McmLogo from '../mcmLogo';
import navbar_items from './navbar_content';

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
            <div className='dropdown-item' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={{width: '10%'}}>
                <div>
                    {
                        this.props.headerTo !== undefined ? (
                            <Link to={this.props.headerTo} style={{ textDecoration: 'none' }}>
                                <div className={this.state.expanded ? ('dropdown-header-active') : ('dropdown-header-inactive')}>
                                    {this.props.header}
                                </div>
                            </Link>
                        ) : (
                                <div className={this.state.expanded ? ('dropdown-header-active') : ('dropdown-header-inactive')}>
                                    {this.props.header}
                                </div>
                            )
                    }
                </div>
                <div className='dropdown-subheaders' style={dropDownHeightStyle}>
                    {
                        this.props.dropDownChildren.map(({ subheader, to, href }) => (
                            href === undefined ? (
                                <Link to={to} key={`${subheader}`} style={{ textDecoration: 'none' }}>
                                    <div className='dropdown-subheader'>
                                        {subheader}
                                    </div>
                                </Link>
                            ) : (
                                    <a href={href} key={`${subheader}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                        <div className='dropdown-subheader'>
                                            {subheader}
                                        </div>
                                    </a>
                                )

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

    handleClick() {
        this.setState({ expanded: !this.state.expanded })
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
                <div>
                    {
                        this.props.headerTo !== undefined ? (
                            <Link to={this.props.headerTo} style={{ textDecoration: 'none' }}>
                                <div className='dropdown-header' onClick={this.handleClick}>
                                    {this.props.header}
                                </div>
                            </Link>
                        ) : (
                                <div className='dropdown-header' onClick={this.handleClick} style={{color: this.state.expanded ? ('#DDCEE5'): ('#422a4C')}}>
                                    {this.props.header}
                                    {'      '}
                                    <img className='arrow' style={this.state.expanded ? ({transform: 'rotate(90deg)'}): ({})} src={`https://icon.now.sh/chevron/${this.state.expanded ? ('DDCEE5'): ('422a4C')}/10`} alt=">"/>
                                </div>
                            )
                    }
                </div>
                <div className='dropdown-subheaders' style={dropDownHeightStyle}>
                    {
                        this.props.dropDownChildren.map(({ subheader, to, href }) => (
                            href === undefined ? (
                                <Link to={to} key={`${subheader}`} style={{ textDecoration: 'none' }}>
                                    <div className='dropdown-subheader'>
                                        {subheader}
                                    </div>
                                </Link>
                            ) : (
                                    <a href={href} key={`${subheader}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                        <div className='dropdown-subheader'>
                                            {subheader}
                                        </div>
                                    </a>
                                )
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
        let burgerStyle = { transition: 'transform 0.2s ease-in-out' };
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
                    <div className='filler-box' />
                    {
                        this.props.dropDownItems.map(({ header, headerTo, dropDownChildren }) => (
                            <DropDownWide header={header} headerTo={headerTo} dropDownChildren={dropDownChildren} key={`${header}`} />
                        ))
                    }
                    <div className='filler-box' />
                </div>
                <div className='narrow-navbar'>
                    <div className='narrow-navbar-toggle' >
                        <img style={burgerStyle} onClick={this.handleClick} src='https://icon.now.sh/burger/DDCEE5/24' alt='burger' />
                    </div>
                        <McmLogo />
                    <div className='narrow-navbar-menu' style={narrowNavBarStyle}>
                        {
                            this.props.dropDownItems.map(({ header, headerTo, dropDownChildren }) => (
                                <DropDownNarrow header={header} headerTo={headerTo} dropDownChildren={dropDownChildren} key={`${header}`} />
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
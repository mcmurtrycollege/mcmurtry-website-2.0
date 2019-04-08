import React from 'react';
import { Box, Flex } from 'rebass';
import Cards from '../../../contactcards';
import Title from '../../../title';
import { internal, external, social } from './committees.json';
import './committees.css';
const divisions = [internal, external, social];

const division_names = ["Internal Committees", "External Committees", "Social Committees"];

export default class Committees extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        this.setState({ current: index })
    }

    render() {
        return (
            <div className="committee-page">
                <Title width={320} title="Committees" />
                <div>
                    <Flex justifyContent='center' flex='wrap' flexDirection='row'>
                        {
                            division_names.map(division => (
                                <Box key={division}>
                                    <div onMouseEnter={() => this.handleClick(division_names.indexOf(division))}
                                        className={this.state.current === division_names.indexOf(division) ? "active-key" : "inactive-key"}>
                                        <p className='key'>{`${division}`}</p>
                                    </div>
                                </Box>
                            ))
                        }
                    </Flex>
                </div>
                {
                    divisions[this.state.current].map(({ name, description, members }) => (
                        <div key={`${name}`}>
                            <Box width={320} ml='auto' mr='auto'>
                                <h1 className='division-title'>{name}</h1>
                            </Box>
                            <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='committee-description'>
                                {description}
                            </Box>
                            <Box width={165} className='members-title' ml='auto' mr='auto'>
                                <h1 className='members-title-content'>Members</h1>
                            </Box>
                            <Cards content={members} height={100} />
                            <Box width={0.7} className='divider' ml='auto' mr='auto'></Box>
                        </div>
                    ))
                }
            </div>
        )
    }
}
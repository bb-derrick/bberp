import React, { Component } from 'react';

class Team extends Component {

    constructor() {
        super();
        this.state = {
            team: ""
        }
    }


    componentWillMount() {
        const path = document.location.href;
        const pathIndex = path.lastIndexOf('/');
        const team = path.substring(pathIndex+1);
        this.setState({team});
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Team Screen
            </div>
        )
    }
}

export default Team;
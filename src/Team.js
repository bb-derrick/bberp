import React, { Component } from 'react';
import firebase from './firebase';
import AppHeader from './AppHeader';
import './TeamMembers.css'



class Team extends Component {

    constructor() {
        super();
        this.state = {
            team: '',
            staff: []
        }
    }

    componentWillMount() {
        const path = document.location.href;
        const pathIndex = path.lastIndexOf('/');
        const team = path.substring(pathIndex+1);
        this.setState({team});
    }

    componentDidMount() {
        const staffRefs = firebase.database().ref();
        // console.log('staffRefs: ', staffRefs);
        staffRefs.on('value', (snapshot) => {
            let staff = snapshot.val().staff;
            let newState = [];
            let filtered_team = staff.filter(person => person.team === this.state.team);

            for(let person in filtered_team) {
                newState.push({
                    firstName: staff[person].firstName,
                    lastName: staff[person].lastName,
                    company: staff[person].company,
                    status: staff[person].status,
                    team: staff[person].team
                })
            }

            filtered_team.sort((a,b) => {
                let x = a.firstName.toLowerCase();
                let y = b.firstName.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0
            });

            this.setState({staff: newState});

            console.log('filtered team: ', filtered_team);
            console.log('new state: ', this.state);

        })
    }

    handleMemberClick(person) {
        console.log(person + ' was clicked')
    }


    render() {

        // let current_team = this.state.staff;

        // if (this.state.staff)

        let renderClass = 'TeamMembers';

        return (
            <div>
                <AppHeader/>
                <div className="TeamMembersContainer">
                    {this.state.staff.map((person, i) => (
                        <div
                            key={i}
                            className={renderClass}
                            onClick={this.handleMemberClick.bind(this, person.firstName)}
                        > {person.firstName + ' ' + person.lastName} </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Team;
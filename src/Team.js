import React, { Component } from 'react';
import firebase from './firebase';

class Team extends Component {

    constructor() {
        super();
        this.state = {
            team: []
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
        console.log('staffRefs: ', staffRefs);
        staffRefs.child('staff/9szgam4cxDbpW6cIh3Yt').set(
            {firstName: 'test'
            });
        staffRefs.on('value', (snapshot) => {
            // let staff = snapshot.val();
            // let newState = [];
            // for(let person in staff) {
            //     newState.push({
            //         firstName: staff[person].firstName,
            //         lastName: staff[person].lastName,
            //         company: person.company,
            //         status,
            //         team
            //     })
            // }

            console.log('snapshot: ', snapshot.val());
        })
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
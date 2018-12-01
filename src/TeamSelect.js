import React, { Component } from 'react';
import './TeamSelect.css';

class TeamSelect extends Component {

  componentDidMount() {
    console.log(this.props.team);
  }

    render() {
        return (
            <div className="TeamSelect">
              {this.props.teams.map(team => (
                  <div>
                      <span>{team.teamName}</span>
                  </div>
                  )
              )}

            </div>
        )
    }
}

export default TeamSelect;

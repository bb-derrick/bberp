import React, { Component } from 'react';
import './TeamSelect.css';
import { Link } from 'react-router-dom';
class TeamSelect extends Component {

  componentDidMount() {
    console.log(this.props.teams);
  }

  render() {
    return (
        <div className="TeamSelectContainer">
          {this.props.teams.map((team, i) => (
              <Link to={`/team/${team.teamName}`} key={i}>
                  <div className="TeamContainer" key={i}>
                      <span>{team.teamName}</span>
                  </div>
              </Link>
              )
          )}
        </div>
    )
    }
}

export default TeamSelect;

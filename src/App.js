import React, { Component } from 'react';
import './App.css';
import './TeamSelect';
import AppHeader from './AppHeader';
import TeamSelect from "./TeamSelect";
import {allData} from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: allData.staff,
      teams: allData.teams
    }
  }

  componentDidMount() {
    console.log(this.state.staff);
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <TeamSelect teams={this.state.teams}/>
      </div>
    );
  }
}

export default App;

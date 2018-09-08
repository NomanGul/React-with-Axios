import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import UserForm from "./Components/UserForm";

class App extends Component {
  state = {
    name: null,
    repos: null,
    followers: null
  };

  getUser = e => {
    e.preventDefault();
    const user = e.target.username.value;
    if (user) {
      Axios.get(`https://api.github.com/users/${user}`).then(res => {
        console.log(res);
        const repos = res.data.public_repos;
        const name = res.data.name;
        const followers = res.data.followers;
        this.setState({ repos, name, followers });
      });
    } else return;
  };

  render() {
    const { repos, name, followers } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Requests in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        <br />
        {repos ? (
          <div>
            <h2>{name}</h2>
            <h4>Repos: {repos}</h4>
            <h4>Followers: {followers}</h4>
          </div>
        ) : (
          <p>Please enter username.</p>
        )}
      </div>
    );
  }
}

export default App;

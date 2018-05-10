import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.png';
import './App.css';

import PeopleQuery from './components/queries/PeopleQuery';
import List from './components/List';

const client = new ApolloClient({ uri: 'http://localhost:3001/graphql'})

class App extends Component {
  render() {
    console.log(client)
    return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rick and Morty GraphQL Demo</h1>
        </header>
        <PeopleQuery render={data => <List list={data.character} />}/>
      </div>
    </ApolloProvider>
    );
  }
}

export default App;

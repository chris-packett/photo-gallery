import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import CategoryList from './components/CategoryList'
import PhotoList from './components/PhotoList'
import PhotoDetail from './components/PhotoDetail'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <h1>Photo Gallery</h1>
              <h6>by Chris Packett</h6>
            </div>
            <Nav />
          </header>
          <Switch>
            <Route path="/" exact component={CategoryList}/>
            <Route path="/:category" exact component={PhotoList}/>
            <Route path="/:category/:id" exact component={PhotoDetail}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

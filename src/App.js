import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomepageContainer from './containers/HomepageContainer';
import GameContainer from './containers/GameContainer';

const App = () =>
  <div id="app-container">
    <Router>
      <div className="app">
        <Route exact path="/" component={HomepageContainer} />
        <Route exact path="/play" component={GameContainer} />
      </div>
    </Router>
  </div>;

export default App;

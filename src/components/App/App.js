import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understand" component={Understand} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/admin" component={Admin} />
        </Router>
        <br/>
      </div>
    );
  }
}
const feedbackReduxState = (reduxState) => ({
  reduxState
})
export default connect(feedbackReduxState)(App);

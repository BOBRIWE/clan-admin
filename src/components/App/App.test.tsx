import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Redirect, Route} from 'react-router';
import Login from '../Login/Login';
import Authorize from '../Authorize/Authorize';
import {BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((<Router>
    <div>
      <Route path="/login" component={Login}/>
      <Route exact path="/">
        <Redirect to="/login"/>
      </Route>
      <Route path="/clan/:clan" component={App}/>
      <Route path="/authorization" component={Authorize}/>
    </div>
  </Router>), div);
  ReactDOM.unmountComponentAtNode(div);
});

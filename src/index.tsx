import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Route, Redirect} from 'react-router';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import * as serviceWorker from './serviceWorker';
import App from './App/App';


ReactDOM.render((
    <Router>
        <div>
            <Route path="/login" component={Login}/>
            <Route exact path="/">
                <Redirect to="/login"/>
            </Route>
            <Route path="/clan/:clan" component={App}/>
        </div>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

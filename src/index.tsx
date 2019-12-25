import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import * as serviceWorker from './serviceWorker';
import Authorize from './components/Authorize/Authorize';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import AppContainer from './containers/AppContainer';

ReactDOM.render((
    <Provider store={configureStore()}>
        <Router>
            <div>
                <Route path="/login" component={Login}/>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route path="/clan/:clan" component={AppContainer}/>
                <Route path="/authorization" component={Authorize}/>
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

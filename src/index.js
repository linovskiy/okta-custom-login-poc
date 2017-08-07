import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import LoginForm from './LoginForm';
import './index.css';

ReactDOM.render(
     <Router>
                <Route path="/loginpage" component={LoginForm}/>
    </Router>,
  document.getElementById('root')
);

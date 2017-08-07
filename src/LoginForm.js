import React, { Component } from 'react';
import {Jumbotron, Grid, Row } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

const orgUrl = 'https://mytelstra.oktapreview.com';

class LoginForm extends Component {
    constructor(){
      super();
      this.state = {
          parsed_address: null
      };
    }

    componentDidMount() {
        var OktaSignIn = require('@okta/okta-signin-widget');
        var str = decodeURIComponent(window.location.href);
        var redirectUrl = str.substr(str.indexOf("?fromURI=") + 9);
        
        var oktaSignIn = new OktaSignIn({baseUrl: orgUrl});
        
        oktaSignIn.renderEl(
                            { el: '#okta-login-container' },
                            function (res) {
                            if (res.status === 'SUCCESS') {
                            console.log('User %s successfully authenticated %o', res.user.profile.login, res.user);
                            
                            if (str.includes("?fromURI")) {
                            res.session.setCookieAndRedirect(redirectUrl);
                            }
                            else {
                            res.session.setCookieAndRedirect(orgUrl);
                            }
                            
                            }
                            }
                            );
    }

    render() {
        const queryString = require('query-string');
        const parsed = queryString.parse(this.props.location.search);

        return (
          <div >
              <Jumbotron className="App-jumbotron">
                  <Grid>
                      <Row >
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>TPN Test Login Form</h2>
                      </Row>
                  </Grid>
              </Jumbotron>
              <Grid>
                  <Row>
                <p>FromURI: {parsed.fromURI}</p>
                <div id="okta-login-container"></div>
                  </Row>
              </Grid>
          </div>
        );
    }
}

export default LoginForm;

import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GameResults } from './components/GameResults';
import { Recharts } from './components/Recharts';
import { SupportUs } from './components/SupportUs';
import { TicTacToe } from './components/TicTacToe';
import { Success } from './components/Success';
import { Cancel } from './components/Cancel';
import { AccessDenied } from './components/AccessDenied';
import { FetchData } from './components/FetchData';
import { MailerHome } from './components/mailer/MailerHome';
import { MailerSend } from './components/mailer/MailerSend';
import { ToDo } from './components/ToDo';
import { Counter } from './components/Counter';
import { Challenge } from './components/Challenge';
import { LocationsOfInterestMap } from './components/LocationsOfInterestMap';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/gameresults' component={GameResults} />
        <Route exact path='/recharts' component={Recharts} />
        <Route exact path='/tictactoe' component={TicTacToe} />
        <Route exact path='/supportus' component={SupportUs} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/cancel' component={Cancel} />
        <Route exact path='/accessdenied' component={AccessDenied} />
        <Route path='/todo' component={ToDo} />
        <Route path='/counter' component={Counter} />
        <Route path='/challenges/day/:id' component={Challenge} />
        <Route path='/challenges/covidlocations' component={LocationsOfInterestMap} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <AuthorizeRoute path='/mailer/home' component={MailerHome} />
        <AuthorizeRoute path='/mailer/send' component={MailerSend} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}

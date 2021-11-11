import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SupportUs } from './components/SupportUs';
import { Success } from './components/Success';
import { Cancel } from './components/Cancel';
import { AccessDenied } from './components/AccessDenied';
import { FetchData } from './components/FetchData';
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
        <Route exact path='/supportus' component={SupportUs} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/cancel' component={Cancel} />
        <Route exact path='/accessdenied' component={AccessDenied} />
        <Route path='/counter' component={Counter} />
        <Route path='/challenges/day/:id' component={Challenge} />
        <Route path='/challenges/covidlocations' component={LocationsOfInterestMap} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}

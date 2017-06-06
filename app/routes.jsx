import React from 'react';
import { connect } from 'react-redux';

import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

// End-user page containers
import RootContainer from './containers/Root';
import HomeContainer from './containers/Home';
import BlogContainer from './containers/Blog';

// Administrative-user page containers
import AdminContainer from './admin/Admin';
import DashboardContainer from './admin/Dashboard';
import SettingsContainer from './admin/Settings';

import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={RootContainer}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={HomeContainer}/>
      <Route path="/blog" component={BlogContainer}/>
    </Route>
    <Route path="/admin" component={AdminContainer}>
      <IndexRedirect to="/dashboard" />
      <Route path="/dashboard" component={DashboardContainer}/>
      <Route path="/settings" component={SettingsContainer}/>
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
);

const mapProps = null;

export default connect(mapProps)(Routes);

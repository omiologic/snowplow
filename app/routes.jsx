import React from 'react';
import { connect } from 'react-redux';

import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

// End-user page containers
import RootContainer from './containers/Root';
import HomeContainer from './containers/Home';
import AboutContainer from './containers/About';
import BlogContainer from './containers/Blog';
import ServicesContainer from './containers/Services';
import ContactContainer from './containers/Contact';

// Administrative-user page containers
import AdminContainer from './admin/Admin';
import DashboardContainer from './admin/Dashboard';
import SettingsContainer from './admin/Settings';

import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router history={browserHistory}>
        <Route path="/" component={RootContainer}>
            <IndexRedirect to="/home" />
            <Route path="/about" component={AboutContainer} />
            <Route path="/blog" component={BlogContainer} />
            <Route path="/contact" component={ContactContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route path="/services" component={ServicesContainer} />
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

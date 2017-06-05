import React from 'react';
import { connect } from 'react-redux';

import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import Root from './containers/Root';
import Home from './containers/Home';
import NotFound from './components/NotFound';

/* -----------------    COMPONENT     ------------------ */

const Routes = (props) => (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <IndexRedirect to="/home" />
            <Route path="/home" component={Home} />
        </Route>
        <Route path='*' component={NotFound} />
    </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

export default connect(mapProps)(Routes);

import React from 'react';
import { Router, Route, Link, browserHistory} from 'react-router';
import HomeContainer from './components/HomeContainer';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={HomeContainer} />
            </Router>
        );
    }
}

module.exports = AppRouter;

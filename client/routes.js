import React from 'react';
import { Router, Route, Link, browserHistory} from 'react-router';
import HomeContainer from './components/container/HomeContainer';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={HomeContainer} />
            </Router>
        );
    }
}

export default AppRouter;

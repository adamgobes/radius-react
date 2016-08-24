import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Main from './components/presentational/Main';
import HomeContainer from './components/container/HomeContainer';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={HomeContainer} />
                </Route>
            </Router>
        );
    }
}

export default AppRouter;

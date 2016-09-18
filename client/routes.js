import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Main from './components/presentational/Main';
import HomeContainer from './components/container/HomeContainer';
import ResultsContainer from './components/container/ResultsContainer';
import MapContainer from './components/container/MapContainer';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={HomeContainer} />
                    <Route path="/results" component={ResultsContainer} />
                    <Route path="/directions" component={MapContainer} />
                </Route>
            </Router>
        );
    }
}

export default AppRouter;

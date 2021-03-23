import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "viwes" */ './dashboard')
);
const Appointments = React.lazy(() =>
  import(/* webpackChunkName: "viwes" */ './appointments')
);
const AllDoctors = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './doctors')
);
const AllPatients = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './patients')
);
const Ordinations = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './ordinations')
);
const Settings = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './settings')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              path={`${match.url}/appointments`}
              render={(props) => <Appointments {...props} />}
            />
            <Route
              path={`${match.url}/doctors`}
              render={(props) => <AllDoctors {...props} />}
            />
            <Route
              path={`${match.url}/patients`}
              render={(props) => <AllPatients {...props} />}
            />
            <Route
              path={`${match.url}/ordinations`}
              render={(props) => <Ordinations {...props} />}
            />
            <Route
              path={`${match.url}/settings`}
              render={(props) => <Settings {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));

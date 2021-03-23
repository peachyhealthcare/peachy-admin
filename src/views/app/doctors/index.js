import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Doctors = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './doctors')
);
const DoctorsRequest = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './doctorsRequest')
);
const AllDoctors = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/doctors`} />
      <Route
        path={`${match.url}/doctors`}
        render={(props) => <Doctors {...props} />}
      />
      <Route
        path={`${match.url}/request`}
        render={(props) => <DoctorsRequest {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AllDoctors;

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Ordinations = React.lazy(() =>
  import(/* webpackChunkName: "dashboard" */ './ordinations')
);
const Peachy = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/ordinations`} />
      <Route
        path={`${match.url}/Ordinations`}
        render={(props) => <Ordinations {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Peachy;

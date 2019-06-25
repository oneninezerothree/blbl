import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'
import My from './routes/My/My'
import Details from  './routes/Details/Details'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/my" component={My} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

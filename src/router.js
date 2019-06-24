import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'
import My from './routes/My/My'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/my" exact component={My} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

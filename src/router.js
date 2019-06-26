import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Discover from './routes/List/Discover';
import Exist from './routes/List/Exist';
import Cartoon from './routes/List/Cartoon ';
import Cold from './routes/List/Cold';
import Appetizing from './routes/List/Appetizing';
import Originality from './routes/List/Originality';
import Exercise from './routes/List/Exercise';
import Music from './routes/List/Music';
import Pets from './routes/List/Pets';
import CnTech from './routes/List/CnTech';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/Discover" exact component={Discover} />
        <Route path="/Exist" exact component={Exist} />
        <Route path="/Cartoon" exact component={Cartoon} />
        <Route path="/Cold" exact component={Cold} />
        <Route path="/Appetizing" exact component={Appetizing} />
        <Route path="/Originality" exact component={Originality} />
        <Route path="/Exercise" exact component={Exercise} />
        <Route path="/Music" exact component={Music} />
        <Route path="/Pets" exact component={Pets} />
        <Route path="/CnTech" exact component={CnTech} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

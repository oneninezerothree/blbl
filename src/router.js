import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'
import My from './routes/My/My'
import Details from './routes/Details/Details'
import Home from './routes/Home/Home';
import Daily from './routes/Daily/Daily';
import Animation from './routes/Animation/Animation';
import Plot from './routes/Plot/Plot';
import Idea from './routes/Idea/Idea';
import Music from './routes/Music/Music';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/my" component={My} />
        <Route path="/details" component={Details} />
        <Route path="/home" component={Home} />
        <Route path="/daily" exact component={Daily} />
        <Route path="/animation" exact component={Animation} />
        <Route path="/plot" exact component={Plot} />
        <Route path="/cy" exact component={Idea} />
        <Route path="/music" exact component={Music} />
      </Switch>
    </Router>
  )
}


export default RouterConfig

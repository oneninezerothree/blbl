import React from 'react';
import { Router, Route, Switch ,Redirect } from 'dva/router';
import Home from './routes/Home/Home';
import Daily from './routes/Daily/Daily';
import Animation from './routes/Animation/Animation';
import Plot from './routes/Plot/Plot';
import Idea from './routes/Idea/Idea';
import Music from './routes/Music/Music';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <div>
            {/* 首页 */}
            <Switch>
                {/* <Redirect from='/' to='/home'/> */}
                <Route path="/home"  component={Home} />
            </Switch>
            {/* 记录 */}
            <Switch>
                <Route path="/daily" exact component={Daily} />
            </Switch>
            {/* 动画 */}
            <Switch>
                <Route path="/animation" exact component={Animation} />
            </Switch>
            {/* 剧情 */}
            <Switch>
                <Route path="/plot" exact component={Plot} />
            </Switch>
            {/* 创意 */}
            <Switch>
                <Route path="/cy" exact component={Idea} />
            </Switch>
            {/* 音乐 */}
            <Switch>
                <Route path="/music" exact component={Music} />
            </Switch>
        </div>
    </Router>
  );
}

export default RouterConfig;

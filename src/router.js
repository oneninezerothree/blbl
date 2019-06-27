import React from 'react';
import {Router, Route, Switch, Redirect} from 'dva/router';
// import dynamic from 'dva/dynamic'
// import IndexPage from './routes/IndexPage';
import Login from './routes/Login/Login'
import Home from './routes/Home/Home';
import Register from './routes/Register/Register'
import My from './routes/My/My'
import Details from './routes/Details/Details'
import Daily from './routes/Daily/Daily';
import Animation from './routes/Animation/Animation';
import Plot from './routes/Plot/Plot';
import Idea from './routes/Idea/Idea';
import Music from './routes/Music/Music';

import RouteGuard from './routes/RouteGuard'

const InspectionRules = (next, Redirect) => {
  let token = sessionStorage.getItem("username")
  if (token) {
    return next();
  } else {
    return Redirect('/login')
  }
}
const RouteGuardIsStart_up = true;

function RouterConfig({history, app}) {
  const routes = [
    {
      path: '/home',
      name: 'Home',
      auth: false,
      // component:()=>import('./routes/Home/Home')
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      auth: false,
      // component:()=>import('./routes/Login/Login')
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      auth: false,
      // component:()=>import('./routes/Register/Register')
      component: Register
    }, {
      path: '/my',
      name: 'My',
      auth: true,
      // component:()=>import('./routes/My/My')
      component: My
    }, {
      path: '/details',
      name: 'Details',
      auth: true,
      // component:()=>import('./routes/Details/Details')
      component: Details
    }, {
      path: '/daily',
      name: 'Daily',
      auth: false,
      // component:()=>import('./routes/Daily/Daily')
      component: Daily
    }, {
      path: '/animation',
      name: 'Animation',
      auth: false,
      // component:()=>import('./routes/Animation/Animation')
      component: Animation
    }, {
      path: '/plot',
      name: 'Plot',
      auth: false,
      // component:()=>import('./routes/Plot/Plot')
      component: Plot
    }, {
      path: '/idea',
      name: 'Idea',
      auth: false,
      // component:()=>import('./routes/Idea/Idea')
      component: Idea
    }, {
      path: '/music',
      name: 'Music',
      auth: false,
      // component:()=>import('./routes/Music/Music')
      component: Music
    },
  ]
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/home'/>

        <RouteGuard config={routes}/>

        {/*{*/}
          {/*// routes.map(({path,name,component})=>{*/}
          {/*//   return(*/}
          {/*//     <Route path={path} key={name} exact component={dynamic({app,...component})}/>*/}
          {/*//   )*/}
          {/*// })*/}
          {/*//  function(){*/}
          {/*//     return <div>{*/}
          {/*//*/}
          {/*//     }</div>*/}
          {/*// }*/}
          {/*routes.map(({path, name, component}) => {*/}
            {/*return (*/}
              {/*<Route path={path} key={name} exact component={component}/>*/}
            {/*)*/}
          {/*})*/}
        {/*}*/}
      </Switch>
    </Router>
  )
}


export {RouterConfig, InspectionRules, RouteGuardIsStart_up}

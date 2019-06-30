import React, {Component} from 'react';
import {Redirect, Route} from 'dva/router';
import _404 from './_404'
import {InspectionRules, RouteGuardIsStart_up} from '../router'

//Redirect 重定向
class RouteGuard extends Component {
  // constructor(props){
  //     super(props)
  //     console.log(React.Component.history)
  // }
  /*用于拦截第一次进来修改仓库触发update生命周期*/

  // state = {firstLoad: false};

  componentWillMount() {
    React.Component.history = this.props.history;
  }

  render() {
    const {location, config} = this.props;
    const pathname = location.pathname;

    /*解决动态路由参数问题（pathname.split('/').length===item.path.split('/:').length+1）*/
    /*判断是否get路由search*/
    let isGetRoute;
    const target = config.find(function (item) {
      return ('/' + pathname.split('/')[1] === item.path.split('/:')[0] && pathname.split('/').length === item.path.split('/:').length + 1) || (isGetRoute = (pathname === item.path.split('/:')[0]))
    });
    // console.log( target)
    if (!RouteGuardIsStart_up) {
      if (target) {
        return <Route exact path={isGetRoute ? pathname : target.path} component={target.component}/>
      } else return <_404/>
    } else {

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~暴露接口测试*/
      if (target && !target.auth) {
        return <Route exact path={isGetRoute ? pathname : target.path} component={target.component}/>
      } else if (target && target.auth) {
        let next = () => {
          return <Route exact path={isGetRoute ? pathname : target.path} component={target.component}/>
        }
        let Redir = (toTarget) => {
          return <Redirect to={{pathname: toTarget, state: {beforeTo: target.path}}}/>
        }
        return InspectionRules(next, Redir)
      } else {
        return <_404/>
      }
    }
  }
}


export default RouteGuard

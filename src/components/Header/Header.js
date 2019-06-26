import React from 'react'
import './Header.css'
import {withRouter} from "dva/router";

//你的第一个组件 
class Header extends React.Component {
  goMy(){
    this.props.history.push({
      pathname:'my'
    })
  }
  goHome(){
    this.props.history.push({
      pathname:'home'
    })
  }
  render() {
    return ( 
      <header>
          <span onClick={this.goHome.bind(this)}>
              <img style={{
                  width: '100px',
                  height: '50px'
              }} src="http://www.ctsbw.com/uploadfile/2015/1227/20151227100031265.png"></img>
          </span>
          <form action="#">
            <input type="search" className="search" placeholder="雨女无瓜" />
        </form>
        <span onClick={this.goMy.bind(this)}><img style={{
                  width: '30px',
                  height: '30px',
                  borderRadius:'50%'
              }} src="http://static.hdslb.com/images/member/noface.gif"></img></span>
      </header>
    )
  }
  
}; 
export default withRouter(Header)

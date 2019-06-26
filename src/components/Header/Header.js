import React from 'react'
import './Header.css'
//你的第一个组件 
class Header extends React.Component {
  render() {
    return ( 
      <header>
          <span>
              <img style={{
                  width: '100px',
                  height: '50px'
              }} src="http://www.ctsbw.com/uploadfile/2015/1227/20151227100031265.png"></img>
          </span>
          <form action="#">
            <input type="search" className="search" placeholder="雨女无瓜" />
        </form>
        <span><img style={{
                  width: '30px',
                  height: '30px',
                  borderRadius:'50%'
              }} src="http://static.hdslb.com/images/member/noface.gif"></img></span>
      </header>
    )
  }
  
}; 
export default Header
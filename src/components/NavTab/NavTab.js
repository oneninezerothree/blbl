import React from 'react'
import styles from  './NavTab.css'
import { HashRouter as Router ,NavLink  } from 'react-router-dom'
import axios from 'axios'          
//导航组件 
class NavTab extends React.Component {
  state = {
    currentIndex: 0,
    isToggleOn:'black',
    display: 'none',
    titles: [{
        name:'首页',
        url :'/home'
    },{
        name:'动画',
        url :'/animation'
    },{
        name:'剧情',
        url :'/plot'
    },{
        name:'创意',
        url :'/cy'
    },{
        name:'音乐',
        url :'/music'
    },{
        name:'运动',
        url :'/yd'
    },{
        name:'科技',
        url :'/kj'
    },{
        name:'时尚',
        url :'/ss'
    },{
        name:'游戏',
        url :'/yx'
    },{
        name:'娱乐',
        url :'/yl'
    },{
        name:'影视',
        url :'/ys'
    },{
        name:'综艺',
        url :'/zy'
    },{
        name:'记录',
        url :'/daily'
    },{
        name:'生活',
        url :'/sh'
    },{
        name:'广告',
        url :'/gg'
    },{
        name:'旅行',
        url :'/lx'
    },],
  }
  render() {
    return (
        <div id='NavTab'>
            <Router>
                <div className = {styles.tab} style={{
                    display: this.state.isToggleOn
                }}>
                    {
                    this.state.titles.map((item, index) => {
                    return <NavLink  key = {index} to={{
                        pathname: item.url,
                    }} replacec='true'
                    activeClassName={styles.active} 
                    onClick={this.setCurrentIndex.bind(this,index)}>
                        <div className = {styles['table-item']} >
                        <span> {item.name} </span> 
                    </div> 
                </NavLink >
            })
        }
            <span className={styles['btn']} onClick={this.isShow.bind(this)}>
                <svg t="1561381860449" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1986" width="24" height="24">
                    <path d="M511.700683 639.423111 191.917496 319.596945 319.830771 319.596945 511.700683 511.715521 703.570595 319.596945 831.48387 319.596945Z" p-id="1987"></path>
                    </svg>
                </span>
            </div>
        </Router>
        <div className='List' style={{display: this.state.display}}>
            <ul className='uls'>
                {
                    this.state.titles.map((item, index) => {
                    return <li key={index} className='lis'>{item.name}</li>
                })
                }
            </ul>
            <p className="jiantou">
                <span onClick={this.isHide.bind(this)}>
                    <svg t="1561384959190" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2783" width="24" height="24">
                        <path d="M511.700683 319.596945 191.917496 639.424134 319.830771 639.424134 511.700683 447.304536 703.570595 639.424134 831.48387 639.424134Z" p-id="2784"></path>
                    </svg>
                </span>
            </p>
        </div>
        </div>
    );
  }
    // // 获取数据
    // componentDidMount(){
    //     this.getNav()
    //     // console.log(this)
    // }
    
    // async getNav(){
        
    //     const data = await axios.get('https://api.apiopen.top/videoHomeTab')
    //     // console.log(data.data.result)
    //     this.setState({
    //         //旧数据，新数据
    //         titles : [...this.state.titles, ...data.data.result],
    //     })
    // }
    // 点击高亮
    setCurrentIndex(index) {
        // console.log(index)
        this.setState({
          currentIndex: index
        })
    }
    //显示
    isShow() {
        this.setState({
          display: 'block',
          isToggleOn : 'none'
        });
    }
    //隐藏
    isHide() {
        this.setState({
          display: 'none',
          isToggleOn : 'block',
        });
    }
}
export default NavTab

import React, {Component} from 'react'
import styles from './My.css'
import Header from '../../components/Header/Header'
export default class My extends Component{
  constructor(props) {
    super(props);
    console.log(`my`)
    this.state={
      name:sessionStorage.getItem("name")
    }
  }
  loginOut(){
    sessionStorage.removeItem("name")
    sessionStorage.removeItem("username")
    this.props.history.push({
      pathname:'/login'
    })
  }
  // componentDidMount(){
  //   console.log(this)
  // }
  render() {
    return (
      <div className={styles.my}>
        <Header/>
        <div className={styles.banner}>
          <img src="//s1.hdslb.com/bfs/static/mult/images/bannerTop.png" alt=""/>
        </div>
        <div className={styles.msg}>
            <div className={styles.head}/>
            <p className='clearfix' onClick={this.loginOut.bind(this)}>
              退出登录
            </p>
          <div className={styles.username}>
            {this.state.name}
          </div>
        </div>
      </div>
    );
  }
}

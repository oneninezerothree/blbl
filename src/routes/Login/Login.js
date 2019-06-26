import React, {Component} from 'react'
import styles from './Login.css'
import {Input,  Button, message} from 'antd';
import axios from 'axios'
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tel: '',
      password: '',
      loading: false,
    }
  }

  async telChange(e) {
    let val = e.target.value
    await this.setState({
      tel: val
    })
  }

  pswChange(e) {
    let val = e.target.value
    this.setState({
      password: val
    })
  }

  async login() {
      this.setState({
        loading: true,
      })
      let data = await axios({
        method: 'post',
        url: 'http://106.14.81.245:3100/loginRegister/login',
        data: {
          tel: this.state.tel,
          password: this.state.password
        }
      })
      this.setState({
        loading: false
      })
      if (data.data.state===1) {
        message.info(data.data.msg)
        sessionStorage.setItem("username", this.state.tel)
        sessionStorage.setItem("name", data.data.username)
      } else{
        message.info(data.data.msg)
        // this.props.history.push({
        //   pathname: "/login",
        //   state: {fromDashboard: true}
        // })
      }
  }

  render() {
    return (
      <div className={styles.register}>
        <header>
          登录
        </header>
        <div className={styles.inp}>
          <Input size="large" placeholder="请输入手机号码" allowClear value={this.state.tel}
                 onChange={this.telChange.bind(this)}/>
          <Input.Password size="large" placeholder="请输入密码" onChange={this.pswChange.bind(this)}
                          style={{marginTop: '0.2rem'}}/>
          <div style={{
            marginTop: '0.2rem',
            display:'flex',
            justifyContent:'space-around'
          }}>
            <Button type="primary" loading={this.state.loading} onClick={this.login.bind(this)} >
              点击登录
            </Button>
            <Button type="primary"  onClick={()=>{
              this.props.history.push({
                pathname:'/register'
              })
            }} >
              去注册
            </Button>
          </div>
        </div>

      </div>
    );
  }

}

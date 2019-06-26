import React, {Component} from 'react'
import styles from './Register.css'
import {Input, Tooltip, Button, message} from 'antd';
import axios from 'axios'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tel: '',
      username: '',
      password: '',
      tip: "请输入11位的手机号码",
      loading: false,
      telState: false
    }

  }

  async telChange(e) {

    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    let val = e.target.value
    await this.setState({
      tel: val
    })
    if (reg.test(this.state.tel)) {
      this.setState({
        tip: '',
        telState: true
      })
    } else {
      this.setState({
        tip: '请输入11位的手机号码',
        telState: false
      })
    }
  }
  userChange(e){
    let val = e.target.value
    this.setState({
      username: val
    })
  }
  pswChange(e){
    let val = e.target.value
    this.setState({
      password: val
    })
  }
  async reg() {
    if (this.state.telState) {
      this.setState({
        loading: true,
      })
      let data = await axios({
        method: 'post',
        url: 'http://localhost:3000/loginRegister/register',
        data: {
          tel: this.state.tel,
          username: this.state.username,
          password: this.state.password
        }
      })
      this.setState({
        loading: false
      })
      if (data.data.state===0){
        message.info(data.data.msg)
      }else if(data.data.state===1){
        message.info(data.data.msg)
        this.props.history.push({
          pathname: "/login",
          state: { fromDashboard: true }
        })
      }else if (data.data.state===2){
        message.info(data.data.msg)
      }
    } else {
      message.info('请按要求输入完整')
    }

  }

  render() {
    return (
      <div className={styles.register}>
        <header>
          注册
        </header>
        <div className={styles.inp}>
          <Tooltip placement="topLeft" title={this.state.tip}>
            <Input size="large" placeholder="请输入手机号码" allowClear value={this.state.tel}
                   onChange={this.telChange.bind(this)}/>
          </Tooltip>
          <Input size="large" placeholder="请输入用户名" allowClear onChange={this.userChange.bind(this)} style={{marginTop:'0.2rem'}}/>
          <Input.Password size="large" placeholder="请输入密码"  onChange={this.pswChange.bind(this)}style={{marginTop: '0.2rem'}}/>

          <div style={{
            marginTop: '0.2rem',
            display:'flex',
            justifyContent:'space-around'
          }}>
            <Button type="primary" loading={this.state.loading} onClick={this.reg.bind(this)} >
              点击注册
            </Button>
            <Button type="primary"  onClick={()=>{
              this.props.history.push({
                pathname:'/login'
              })
            }} >
              去登录
            </Button>
          </div>
        </div>

      </div>
    );
  }

}

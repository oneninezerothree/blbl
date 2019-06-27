import React, {Component} from 'react'
import styles from './Details.css'
import {Menu, Dropdown, Icon, Descriptions} from 'antd';
import DetailsRec from '../../components/DetailsRec/DetailsRec'
import {connect} from 'dva';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playUrl: this.props.listStore.content.data.playUrl
    }
  }

  //
  async changeUrl(item) {
    let nowTime = this.refs.video.currentTime
    // await this.props.dispatch({
    //   type: 'listStore/save',
    //   payload: {
    //     playUrl: item.playUrl
    //   }
    // })
    await this.setState({
      playUrl: item.url
    })
    // console.log(item)
    this.refs.video.play()
    this.refs.video.currentTime = nowTime
  }

  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'listStore/save',
  //     payload: {
  //       playUrl: this.props.listStore.content.data.playUrl
  //     }
  //   })
  //   console.log(this.props.listStore.playUrl)
  //
  // }

  componentDidUpdate() {
    // console.log(this)
  }

  initTime(time) {
    let date = new Date(time)
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
    let s = date.getSeconds();
    return Y + M + D + h + m + s;

  }

  componentWillReceiveProps(props) {
    // console.log(props)
    this.setState({
      playUrl: props.listStore.content.data.playUrl
    })
  }

  render() {
    let content = this.props.listStore.content
    let playInfo = content.data.playInfo
    console.log(this.state.playUrl)
    const menu = (
      <Menu>
        {
          playInfo.map((item, index) => {
            return <Menu.Item key={index}>
              <a href="javascript:void (0);" onClick={this.changeUrl.bind(this, item)}>{item.name}</a>
            </Menu.Item>
          })
        }
      </Menu>
    );

    return (
      <div className={styles.details}>
        <video className={styles.video}
          // src={content.data.playUrl}
               src={this.state.playUrl}
               poster={content.data.cover.feed}
               controls={true}
               ref='video'>

        </video>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="javascript:void (0);"
             style={{float: 'right', marginRight: '0.15rem', marginTop: '0.10rem', fontSize: '0.12rem'}}>
            切换清晰度 <Icon type="down"/>
          </a>
        </Dropdown>
        <div className={styles.title}>
          <Descriptions title={content.data.category}>
            <Descriptions.Item label="影片描述">{content.data.description}</Descriptions.Item>
            <Descriptions.Item label="上传时间">{this.initTime(content.data.date)}</Descriptions.Item>
          </Descriptions>
          <p><Icon type="stop" theme="twoTone"/> 未经作者授权禁止转载</p>

        </div>
        <div className={styles.recommend}>
          <div className={styles.tj}>相关推荐</div>
          <DetailsRec/>
        </div>
      </div>
    );
  }
}

export default connect(store => {
  return store
})(Details)

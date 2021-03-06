import React from 'react'
import './List.css'
import axios from 'axios'
import {withRouter} from "dva/router";
import {connect} from 'dva';

class List extends React.Component {
  state = {
    content: [],
  }

  render() {
    return (
      <div id="lists">
        <ul>
          {
            this.state.content.map((item, index) => {
              return <li key={index} onClick={this.goDetails.bind(this, item)}>
                <div className="images">
                  <img src={item.data.content.data.cover.feed}></img>
                </div>
                <p className="title">{item.data.content.data.title}</p>
              </li>
            })
          }
        </ul>
        <div className="weui-footer">
          <p className="weui-footer__links">
            <span className="weui-footer__link">哔哩哔哩 沪ICP备13002172号-3</span>
          </p>
          <p className="weui-footer__text">信息网络传播视听节目许可证：0910417</p>
        </div>
      </div>
    );
  }

  async goDetails(item) {
    await this.props.dispatch({
      type: 'listStore/save',
      payload: {
        content: item.data.content,
        // playUrl: item.data.playUrl
      }
    })
    this.props.history.push({
      pathname: 'details'
    })
    // console.log(this.props.listStore.content)
  }

  // 获取数据
  componentDidMount() {
    this.getNav()
    // console.log(this)
  }

  async getNav() {
    const data = await axios.get(this.props.url)
    // console.log(data.data.result)
    this.setState({
      //旧数据，新数据
      content: [...this.state.content, ...data.data.result],
    })
  }

}

export default connect(store => {
    return store
  }
)(withRouter(List))

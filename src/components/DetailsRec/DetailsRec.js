import React, {Component} from 'react'
import axios from 'axios'
import styles from './DetailsRec.css'
import {withRouter} from "dva/router";
import {connect} from 'dva';

class DetailsRec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: [],
      id: this.props.listStore.content.data.id
    }
  }

  componentDidMount() {
    this.getRec()

  }

  async getRec() {
    let data = await axios({
      method: 'post',
      url: 'http://localhost:3000/getRecommend/init',
      data: {
        id: this.state.id
      }
    })
    this.setState({
      recommend: data.data.result.slice(1)
    })
    // console.log(this.state.recommend)
  }

  async goDetails(item) {
    // this.props.history.push({
    //   pathname:'details',
    //   state:{id}
    // })
    // console.log(item)

    await this.props.dispatch({
      type: 'listStore/save',
      payload: {
        content: item,
        // playUrl: item.data.playUrl
      }
    })
    this.setState({
      id: this.props.listStore.content.data.id
    })
    // console.log(JSON.stringify(this.props.listStore.content))
    window.scrollTop=0
    this.getRec()

  }

  render() {
    return (
      <ul className={styles.DetailsRec}>
        {
          this.state.recommend.map((item, index) => {
            return <li key={index} onClick={this.goDetails.bind(this, item)}>
              <div className={styles.img}>
                <img src={item.data.cover.detail}
                     alt=""/>
              </div>
              <div className={styles.title}>
                <p>
                  {item.data.description}
                </p>
              </div>
            </li>
          })
        }

      </ul>
    );
  }
}

export default connect(store => {
  return store
})(withRouter(DetailsRec))

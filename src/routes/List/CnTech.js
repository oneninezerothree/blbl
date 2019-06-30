import React from 'react';
import  './Discover.css';
import {connect} from 'dva';
import Axios from 'axios';
//科技
export default connect((state)=>{
    return state
})(class Discover extends React.Component{
    constructor(props) {
        // console.log(props)
        super(props)
        this.state={
            disdata:[]
        }
    }
    componentWillMount() {
        // console.log(this)
        this.props.dispatch({
            type: 'aa',
            payload: {
               "haahah":"sdfasdf"
            },
        })
    }
    componentDidMount(){
        // console.log(this)
        Axios.get("https://api.apiopen.top/videoCategoryDetails?id=32")
        // .then((res)=>{
        //     // 储存数据到仓库
        //     this.props.dispatch({
        //         type:'dismodl/save',
        //         payload: [res.data.result]
        //     })
        // })
        .then((res) => {
          // 
         this.setState({
           disdata: res.data.result
         })
        })
    }
    render() {
            return (
                <div id="discr">
                    <ul>
                        {/* {console.log(this.state.disdata)} */}
                        {
                            // disdata[0].length>1?disdata[0].map((item, index) => {
                            //     console.log(item)
                            // }):""
                            this.state.disdata.length ? this.state.disdata.map((item, index) => {
                                // console.log(item.data.content.data)
                                      return(
                                              <li key={index}>
                                                <div className={"hostop"}>
                                                    <a href="javascript:;">
                                                        < img src={
                                                            item.data.content.data.cover.feed
                                                        }
                                                        />
                                                    </a>
                                                </div>
                                                <div className={"hosbot"}>
                                                    <p>{item.data.header.title}</p>
                                                </div>
                                            </li>
                                      )
                                  }):""
                        }
                    </ul>
                </div>
            )
    };
})
// const mapStateToProps = (state) => {
//     console.log(this)
//     return(
//         <div></div>
//     )
// };

// export default connect()(Discover);
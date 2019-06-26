import React from 'react';
import {connect} from 'dva';
import DatePicker from 'antd/es/date-picker';
import 'antd/es/date-picker/style/css';
// console.log(DatePicker);
import { Input } from 'antd';
import './Grabble.css';
import {withRouter} from 'dva/router'   

export default withRouter(connect((state)=>{
    return state
})(
    class Grabble extends React.Component{
        render(){
            const onChange = e => { 
                let value = this.refs.sou.state.value;
                //搜索框的值
                // console.log(value);
            };
            // console.log(couponStore)
             return(
                     <div className={"ssuo"}>
                        <Input ref="sou" placeholder="input with clear icon" allowClear onChange={onChange} />
                        <span className={"calloff"} onClick={
                            ()=>{
                                this.props.history.go(-1)
                            }
                        }>取消</span>
                    </div>
             )
         }
    }
)) 
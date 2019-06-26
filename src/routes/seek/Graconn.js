import React from 'react';
import {connect} from 'dva';
import './Grabble.css';
export default connect((state)=>{
    return state
})(
    class Grabble extends React.Component{
        render(){
            return(
                <div className={"lis"}>
                    <h3>大家都在搜</h3>
                    <ul>
                        <li>十周年</li>
                        <li>林欢</li>
                        <li>RUNNINGMAN</li>
                        <li>明日方舟</li>
                        <li>老番茄</li>
                        <li>千与千寻</li>
                        <li>张子枫</li>
                        <li>猫和老鼠</li>
                    </ul>
                    <dl>
                        历史记录
                    </dl>
                </div>
            )
         }
    }
)
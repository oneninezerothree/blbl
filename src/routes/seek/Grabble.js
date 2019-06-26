import React from 'react';
import {connect} from 'dva';
import DatePicker from 'antd/es/date-picker';
import 'antd/es/date-picker/style/css';
// console.log(DatePicker);
import { Input } from 'antd';

const onChange = e => {
  console.log(e);
};

ReactDOM.render(
  <Input placeholder="input with clear icon" allowClear onChange={onChange} />,
  mountNode,
);
// export default connect((state)=>{
//     return state
// })(
//     class Grabble extends React.Component{
//          render(){
//              return(
                 
//              )
//          }
//     }
// )
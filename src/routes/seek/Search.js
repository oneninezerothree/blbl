import React from 'react';
import { connect } from 'dva';
import Grabble from './Grabble';
import Graconn from './Graconn';

function Search() {
  return (
    <div className={"page"}>
        {/* <Discover></Discover> */}
        <Grabble></Grabble>
        <Graconn></Graconn>
    </div>
  );
}

export default connect()(Search);
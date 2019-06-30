import React from 'react';
import { connect } from 'dva';
import Discover from './List/Discover';
import Grabble from './seek/Grabble';
import Graconn from './seek/Graconn';

function IndexPage() {
  return (
    <div className={"page"}>
        {/* <Discover></Discover> */}
        <Grabble></Grabble>
        <Graconn></Graconn>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

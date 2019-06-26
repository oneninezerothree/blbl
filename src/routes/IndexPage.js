import React from 'react';
import { connect } from 'dva';
import Discover from './List/Discover';
import Grabble from './seek/Grabble';
function IndexPage() {
  return (
    <div className={"page"}>
        {/* <Discover></Discover> */}
        <Grabble></Grabble>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

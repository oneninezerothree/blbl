import React from 'react';
import { connect } from 'dva';
import Grabble from './Grabble';
import Graconn from './Graconn';
import styles from './Grabble.css';

function Search() {
  return (
    // <div class>
      <div className={styles.page}>
          {/* <Discover></Discover> */}
          <Grabble></Grabble>
          <Graconn></Graconn>
      </div>
    // </div>
  );
}

export default connect()(Search);
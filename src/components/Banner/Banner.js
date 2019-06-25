import React from 'react'
import styles from  './Banner.css'
import ReactSwiper from 'reactjs-swiper';

const items = [{
    image: 'http://i0.hdslb.com/bfs/archive/ed4f3f4fbd594198b56dfeedbf50bae4e07830a4.jpg',
  }, {
    image: 'http://i0.hdslb.com/bfs/archive/47db66c5807eb59b166d4e2702961798a0f4ca2a.jpg',
  }, {
    image: 'http://i0.hdslb.com/bfs/archive/d49093f6c86ad83650890dc691663187015ce864.jpg',
  }];
  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
class Banner extends React.Component {
  state = {
    active: false,
    titles: []
  }
  render() {
    return ( 
        <div className="banner">
            <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                 className={styles['img']} />
        </div>
  
    );
  }
 
}
export default Banner

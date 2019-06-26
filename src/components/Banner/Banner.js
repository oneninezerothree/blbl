import React from 'react'
import styles from  './Banner.css'
import ReactSwiper from 'reactjs-swiper';

const items = [{
    image: require('../../assets/banner01.jpg'),
  }, {
    image:require('../../assets/banner02.jpg') ,
  }, {
    image: require('../../assets/banner03.jpg'),
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

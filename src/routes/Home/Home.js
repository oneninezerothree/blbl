import React from 'react'
import Header from '../../components/Header/Header.js';
import NavTab from '../../components/NavTab/NavTab.js';
import Banner from '../../components/Banner/Banner.js';
import List from '../../components/List/List.js';
class Home extends React.Component {
    
    render() {
        return ( 
            <div>
                <Header></Header>
                <NavTab></NavTab>
                <Banner></Banner>
                <List url = 'https://api.apiopen.top/videoCategoryDetails?id=34'></List>
            </div>
        );
    }
    
}

export default Home
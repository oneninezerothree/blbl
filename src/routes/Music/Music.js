import React from 'react'
import './Music.css'
import Header from '../../components/Header/Header.js';
import NavTab from '../../components/NavTab/NavTab.js';
import List from '../../components/List/List.js';
class Music extends React.Component {
    
    render() {
        return ( 
            <div id="Music">
                <Header></Header>
                <NavTab></NavTab>
                <List url = 'https://api.apiopen.top/videoCategoryDetails?id=20' ></List>
            </div>
        );
    }
    
}

export default Music
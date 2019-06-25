import React from 'react'
import './Animation.css'
import Header from '../../components/Header/Header.js';
import NavTab from '../../components/NavTab/NavTab.js';
import List from '../../components/List/List.js';
class Animation extends React.Component {
    
    render() {
        return ( 
            <div id="Animation">
                <Header></Header>
                <NavTab></NavTab>
                <List url = 'https://api.apiopen.top/videoCategoryDetails?id=10' ></List>
            </div>
        );
    }
    
}

export default Animation
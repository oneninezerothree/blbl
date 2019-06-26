import React from 'react'
import './Daily.css'
import Header from '../../components/Header/Header.js';
import NavTab from '../../components/NavTab/NavTab.js';
import List from '../../components/List/List.js';
class Daily extends React.Component {
    
    render() {
        return ( 
            <div id="daily">
                <Header></Header>
                <NavTab></NavTab>
                <List url = 'https://api.apiopen.top/videoCategoryDetails?id=22' ></List>
            </div>
        );
    }
    
}

export default Daily
import React from 'react'
import './Plot.css'
import Header from '../../components/Header/Header.js';
import NavTab from '../../components/NavTab/NavTab.js';
import List from '../../components/List/List.js';
class Plot extends React.Component {
    
    render() {
        return ( 
            <div id="Plot">
                <Header></Header>
                <NavTab></NavTab>
                <List url = 'https://api.apiopen.top/videoCategoryDetails?id=12' ></List>
            </div>
        );
    }
    
}

export default Plot
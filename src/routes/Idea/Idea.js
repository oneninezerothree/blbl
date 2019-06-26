import React from 'react'
import './Idea.css'
import Header from '../../components/Header/Header.js';
import NavTab from '../../components/NavTab/NavTab.js';
import List from '../../components/List/List.js';
class Idea extends React.Component {
    
    render() {
        return ( 
            <div id="Idea">
                <Header></Header>
                <NavTab></NavTab>
                <List url = 'https://api.apiopen.top/videoCategoryDetails?id=2' ></List>
            </div>
        );
    }
    
}

export default Idea
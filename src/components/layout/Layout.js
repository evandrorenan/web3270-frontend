import React, { Component } from 'react';

import Toolbar from './toolbar/Toolbar';
import Content from './mainContent/Content';
import './Layout.css';
import NavigationBar from './navigationBar/NavigationBar';

class Layout extends Component {

    constructor() {
        super();
        this.state = { 
            items:[{ id:"SessionItem", name:"Session", isActive: false } ,
                   { id:"Report", name:"Abend Report", isActive: false },
                   { id:"RequestSysoutEvt", name:"Sysout download", isActive: false },
                   { id:"ManualUploadForm", name:"Upload manual", isActive: true }]};
    }

    onclick = (event) => {
        const localstate = Object.assign({}, this.state);

        localstate.items = localstate.items.map(item => ({
            ...item,
            isActive: item.id === event.target.id
        }));
        this.setState(localstate);
    }

    activeTab = () => {
        const activeItem = this.state.items.find(item => item.isActive === true);
        return activeItem ? activeItem.id : "";
    };

    render() {
        return (
            <div className="Layout">
                <Toolbar />
                <div className="MainDiv">
                    <NavigationBar state={this.state} onclick={this.onclick} />
                    <Content activeTab={this.activeTab} />
                </div>
            </div>
        );
    }
}

export default Layout;
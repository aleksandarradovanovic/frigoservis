import React, { Component } from 'react';
import HomeHeaderContainer from '../components/header/HomeHeaderContainer';
class ContainerHome extends Component {
    render() {
        return (
            <div className = "homepageContainer">
                <HomeHeaderContainer />
            </div>
        );
    }
}

export default ContainerHome;
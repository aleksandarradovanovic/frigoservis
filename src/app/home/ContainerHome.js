import React, { Component } from 'react';
import HomeHeaderContainer from '../components/header/HomeHeaderContainer';
import FooterContainer from '../components/footer/FooterContainer';
class ContainerHome extends Component {
    render() {
        return (
            <div className = "homepageContainer">
                <HomeHeaderContainer />
                {this.props.children}
                <FooterContainer />
            </div>
        );
    }
}

export default ContainerHome;
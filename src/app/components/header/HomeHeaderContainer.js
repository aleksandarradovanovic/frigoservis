import React, { Component } from 'react';
import HomeHeaderBanner from './HomeHeaderBanner';
import HomeHeaderNav from './HomeHeaderNav';

class HomeHeaderContainer extends Component {
    render() {
        return (
            <div className = 'homeHeaderContainer'>
                <HomeHeaderBanner />
                <HomeHeaderNav />
            </div>
        );
    }
}

export default HomeHeaderContainer;
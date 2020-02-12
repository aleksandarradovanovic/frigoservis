import React, { Component } from 'react';
import HomeContainerCarousel from './HomeContainerCarousel';

class HomeContentContainer extends Component {
    render() {
        return (
            <div className = "homeContentContainer">
                <HomeContainerCarousel />
            </div>
        );
    }
}

export default HomeContentContainer;
import React, { Component } from 'react';
import HomeContainerCarousel from './HomeContainerCarousel';
import HomeFirstSection from './HomeFirstSection';
import TextBannerSection from '../components/content/TextBannerSection';
import HomeSecondSection from './HomeSecondSection';

class HomeContentContainer extends Component {
    render() {
        return (
            <div className = "container-fluid homeContentContainer">
                
                <div className = "row">
                <HomeContainerCarousel />
                </div>
                <div className = "row">
                    <TextBannerSection />
                </div>
         
                <div className = "row">
                    <HomeSecondSection />
                </div>
                <div className = "row">
                    <HomeFirstSection />
                </div>
            </div>
        );
    }
}

export default HomeContentContainer;
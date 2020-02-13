import React, { Component } from 'react';
class TextBannerSection extends Component {
    render() {
        return (
            <div className = "position-center textBannerSection">
                <div className = "textBannerSectionImage">
                    <img src = "../../../../public/image/kombi.png" width= "400px"/>
                </div>
                <div className = "textBannerSectionImage">
                    <h4>Dolazak na adresu</h4>
                </div>
            </div>
        );
    }
}

export default TextBannerSection;
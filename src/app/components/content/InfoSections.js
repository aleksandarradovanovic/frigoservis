import React, { Component } from 'react';
import slika from '../../../../public/image/location.png'
class InfoSections extends Component {
    render() {
        return (
            <div className = "infoSection">
                <div className = "position-center">
                    <div className = "infoSectionImage">
                        <img src = "../../../../public/image/location.png" width = "30px" />
                    </div>
                    <div className = "infoSectionImage">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoSections;
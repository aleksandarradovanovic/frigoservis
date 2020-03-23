import React, { Component } from 'react';
class InfoSections extends Component {
    render() {
        return (
            <div className = "infoSection">
                <div className = "position-center">
                    <div className = "infoSectionImage">
                        <img src = {this.props.image.img} width = "30px" alt = {this.props.image.alt}/>
                    </div>
                    <div className = "infoSectionImage">
                    {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoSections;
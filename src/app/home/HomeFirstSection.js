import React, { Component } from 'react';
import InfoSections from '../components/content/InfoSections';

class HomeFirstSection extends Component {
    render() {
        return (
            <div className = "homeFirstSection">
                <div className = "row">
                    <div className = "col-lg-4">
                    <InfoSections />
                    </div>
                    <div className = "col-lg-4">
                    <InfoSections />
                    </div>
                    <div className = "col-lg-4">
                    <InfoSections />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFirstSection;
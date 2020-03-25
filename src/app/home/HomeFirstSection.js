import React, { Component } from 'react';
import InfoSections from '../components/content/InfoSections';
import {data} from '../../configurationData'

class HomeFirstSection extends Component {
    constructor(props) {
        super(props)
        this.createElement = this.createElement.bind(this)
    }
    createElement(element) {
        let row = [];
        if (element) {
            row.push(
                <div className="col-lg-4">
                    <InfoSections image={element.image} text={element.text} additional={element.additional ? element.additional : null} />
                </div>
            )
        }
        return row
    }
    render() {
        return (
            <div className="container-fluid homeFirstSection">
                <div className="row">
                    {data.content.infoCards.map((element, index) => (
                        this.createElement(element)
                    ))}
                </div>
            </div >
        );
    }
}

export default HomeFirstSection;
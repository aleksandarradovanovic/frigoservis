import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { data } from '../../configurationData'

class HomeContainerCarousel extends Component {
  constructor(props) {
    super(props)
    this.createElement = this.createElement.bind(this)
  }
  createElement(element) {
    let row = [];
    if (element) {
      row.push(
        <Carousel.Item>
          <img
            className="carouselImage"
            src={element.image.img}
            alt={element.image.alt}
          />
          <Carousel.Caption>
            <h1>{element.text}</h1>
            <p>{element.additional}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    }
    return row
  }
  render() {
    return (
      <div className="homeContainerCarousel">
        <Carousel fade={true}>
        {data.content.carousel.map((element, index) => (
              this.createElement(element)
            ))}
        </Carousel>
      </div>
    );
  }
}

export default HomeContainerCarousel;
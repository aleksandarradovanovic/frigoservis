import React, { Component } from 'react';
import {img} from '../../../public/image/klimaTest.jpg'
class HomeSecondSection extends Component {
  render() {
    return (
      <div className="container">
        <div class="grid">
          <figure class="effect-layla">
            <img src={'../../../public/image/klimaTest.jpg'} alt="img06" />
            <figcaption>
              <h2>Test <span>Test</span></h2>
              <p>asgasgasgasgasgas</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure class="effect-layla">
            <img src="../../../public/image/test3.jpeg" alt="img03" />
            <figcaption>
              <h2>Test <span>Test</span></h2>
              <p>asgasgasgas</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default HomeSecondSection;
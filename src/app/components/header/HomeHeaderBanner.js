import React, { Component } from 'react';
import test from '../../../../public/image/logo-test.png'
class HomeHeaderBanner extends Component {
  render() {
    return (
      <div className='homeHeaderBanner'>
        <div className="container">
          <div className="row">

            <div className="col-lg-4">
              <img src={'../../../../public/image/logo-test.png'} width="250px" />
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-3 nopadding">
                  <img src={'../../../../public/image/contact.png'} width="50px" />
                </div>
                <div className="col-lg-6 nopadding">
                  <h6>+381611111111</h6>
                  <h6>+3811411111</h6>
                </div>
              </div>


            </div>
            <div className="col-lg-4">
            <div className="row">
                <div className="col-lg-3 nopadding">
                  <img src={'../../../../public/image/location.png'} width="50px" />
                </div>
                <div className="col-lg-6 nopadding">
                  <h6>Adresa adresa 10</h6>
                  <h6>Osecina</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HomeHeaderBanner;
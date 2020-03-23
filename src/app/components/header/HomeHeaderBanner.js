import React, { Component } from 'react';
import {data} from '../../../configurationData'
class HomeHeaderBanner extends Component {
  render() {
    return (
      <div className='homeHeaderBanner'>
          <div className="row">

            <div className="col-lg-4">
              <img src={data.header.images.logo.img} width="250px" alt = {data.header.images.logo.alt}/>
            </div>
            <div className="col-lg-4 bannerItems">
              <div className="row">
                <div className="col-lg-3 nopadding text-right">
                  <img src={data.header.images.contact.img} width="50px" alt = {data.header.images.contact.alt}/>
                </div>
                <div className="col-lg-6 nopadding text-left">
                  <h6>{data.header.textData.phone1}</h6>
                  <h6>{data.header.textData.phone2}</h6>
                </div>
              </div>


            </div>
            <div className="col-lg-4 bannerItems">
            <div className="row">
                <div className="col-lg-3 nopadding text-right">
                  <img src={data.header.images.location.img} width="50px" alt = {data.header.images.location.alt}/>
                </div>
                <div className="col-lg-6 nopadding text-left">
                  <h6>{data.header.textData.address}</h6>
                  <h6>{data.header.textData.city}</h6>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HomeHeaderBanner;
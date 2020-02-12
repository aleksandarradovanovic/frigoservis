import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image from '../../../public/logo192.png'
class HomeContainerCarousel extends Component {
    render() {
        return (
            <div className="homeContainerCarousel">
                <Carousel fade = {true}>
                    <Carousel.Item>
                        <img
                            className="carouselImage"
                            src="../../../public/image/test2.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Izrada plastenika</h1>
                            <p>Koristimo najkvalitenije materijale</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="carouselImage"
                            src="../../../public/image/klimaTest.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Klima je top</h3>
                            <p>Popravka i ugradnja klima uredjaja</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carouselImage"
                            src="../../../public/image/download.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </div>
        );
    }
}

export default HomeContainerCarousel;
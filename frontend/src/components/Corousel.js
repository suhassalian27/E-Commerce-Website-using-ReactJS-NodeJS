import React from "react";
import { Carousel } from "react-bootstrap";

import logo from "../Images/logo.png";

function Coursel() {
    return (
        <Carousel className="corousel">
            
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1474&q=80"
                    alt="Third slide"
                />

                <Carousel.Caption className="caption">
                    <h1>
                        Discover your <span>Passion</span>
                    </h1>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    alt="Third slide"
                />

                <Carousel.Caption className="caption">
                    <h1>
                        Show your <span>Style</span>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt="Third slide"
                />

                <Carousel.Caption className="caption">
                    <h1>
                        Live your <span>Dream</span>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                    alt="First slide"
                />
                <Carousel.Caption className="caption">
                    <img src={logo}></img>
                    <p>Because time flies,</p>
                    <p>But the <span>memories</span> last forever.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Coursel;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../image/1.jpg';
import img2 from '../image/2.jpg';
import '../styles/navcss.css'
const Carousel2 = () => {
    return (
        <div >
           
            <Carousel autoPlay={true} emulateTouch={true} showStatus={false} interval={5000} showThumbs={false} infiniteLoop={true}>
            <div style={{userSelect:"none"}}>
                <img src={img1} alt="Slide 1" />
            </div>
            <div style={{userSelect:"none",position:"relative"}} >
                <img src={img2} alt="Slide 2" />
            </div>
        </Carousel>
        </div>
        
    );
};

export default Carousel2;
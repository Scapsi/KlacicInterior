import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFirst() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-large"
            src="./images/silkplaster1.png"
            alt="silkplaster"
          />
          <Carousel.Caption>
            <p>silk plaster red cotton fiber</p>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-large"
            src="./images/silkplaster2.png"
            alt="silkplaster"
          />

          <Carousel.Caption>
          <p>silk plaster red cotton fiber</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-large"
            src="./images/silkplaster3.png"
            alt="silkplaster"
          />

          <Carousel.Caption>
          <p>silk plaster red cotton fiber</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFirst;

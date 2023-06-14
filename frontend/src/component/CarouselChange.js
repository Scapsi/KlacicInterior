import Carousel from 'react-bootstrap/Carousel';

function CarouselChange() {
  return (
    <Carousel fade>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src="./image/wallpaper4.0.jpeg"
          alt="wallpaper"
        />
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src="./image/fluted2.0.jpg"
          alt="fluted"
        />
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img className="d-block w-100" src="./image/silk2.0.jpeg" alt="silk" />
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src="./image/wallpanel3.0.jpg"
          alt="panel"
        />
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src="./image/wallpaper3.0.jpg"
          alt="paper"
        />
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src="./image/wallpaper1.0.png"
          alt="wallpaper"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselChange;

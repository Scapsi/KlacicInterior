import { Button, Col, Row } from 'react-bootstrap';
import CarouselFirst from '../component/CarouselFirst';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <title>klacicInteriors</title>
      <div className="image-container">
        <h1 className="textbotton">
          ...welcome to INTERIOR WORLD
          <p className="smalltext">the decoration speaks for themselves</p>
        </h1>

        <Row className="align-items-center">
          <Col md={3}>
            <p>
              Lorem ipsum dolor sit amet, aliquam eget, iaculis dis egestas, a
              feugiat. Nunc eu, sed justo vel, elit dolor. Sed consequat
              cubilia. Sem donec vel, aenean amet dictum, nunc odio varius.
              Primis magna mauris, quam vestibulum nunc, ac id. Pharetra
              distinctio. Sagittis dictum. Non pede elit, pellentesque vitae.
              Faucibus libero.
            </p>
            <Button variant="danger" className="align">
              Readmore
            </Button>
          </Col>
          <Col md={3}>
            <p>
              Lorem ipsum dolor sit amet, aliquam eget, iaculis dis egestas, a
              feugiat. Nunc eu, sed justo vel, elit dolor. Sed consequat
              cubilia. Sem donec vel, aenean amet dictum, nunc odio varius.
              Primis magna mauris, quam vestibulum nunc, ac id. Pharetra
              distinctio. Sagittis dictum. Non pede elit, pellentesque vitae.
              Faucibus libero.
            </p>
            <Button variant="danger" className="align">
              Readmore
            </Button>
          </Col>
          <Col md={6}>
            <CarouselFirst />
            <Button variant="danger" className="align">
              shopNow
            </Button>
          </Col>
        </Row>
      </div>
      <div>
        <h4>product 0n sale</h4>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product">
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.price} />
              </Link>
              <div className="product-info">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;

import { Button, Col, Container, Row } from 'react-bootstrap';
import data from '../data';
import { Link } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Product from '../component/Product';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import CarouselChange from '../component/CarouselChange';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  //const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      //setproducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container className="image-container">
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
            <Button variant="light" className="align">
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
            <Button variant="light" className="align">
              Readmore
            </Button>
          </Col>
          <Col md={6}>
            <img src="./images/online-shopping.png" alt="online-shoping" />
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="onsale">PRODUCTS ON SALES</p>
        <div className="products">
          {' '}
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
      <Container className="little-space">
        <Row>
          <Col md={6}>
            <CarouselChange />
          </Col>
          <Col md={6} className="on-sale">
            <div className="mb-3 ">
              <p className="onsale-big ">Trending Now</p>
              <p className="onsale-small">
                Choose from hundreds of combinations to create the perfect home
                design, fundraising styles and more.
              </p>
              <Button bg="dark" variant="outline-warning">
                shopnow
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="onsale">HOW WE GIVE BACK</p>
        <Row>
          <Col md={4} sm={6} className="on-Sale">
            <img src="./images/diversity.png" alt="diversity" />
            <p className="donate">SUPPORT ARTISANS WORLDWIDE</p>
            <p>
              We work with artisans to create handcrafted products while
              providing sustainable and fair employment.
            </p>
          </Col>
          <Col md={4} sm={6} className="on-Sale">
            <img src="./images/environmentalism.png" alt="environment" />
            <p className="donate">ECO-FRIENDLY PACKAGING</p>
            <p>
              We ship all of our products in eco-friendly recyclable packaging
              and offer the option for plastic free shipping.
            </p>
          </Col>
          <Col md={4} sm={6} className="on-Sale">
            <img src="./images/donation.png" alt="donation" />
            <p className="donate">$4+ MILLION DONATED TO CHARITY</p>
            <p>
              We've partnered with 200+ charities across the globe and have
              helped support great causes along the way.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomeScreen;

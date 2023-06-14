import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useContext } from 'react';
import { Store } from '../Store';
import axios from 'axios';

function Product(props) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const { product } = props;
  const AddToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._Id === product._Id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._Id}`);
    if (data.countInStock < quantity) {
      window.alert('sorry.product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  return (
    <Card className="card-img-top">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.price} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            out of stock
          </Button>
        ) : (
          <Button onClick={() => AddToCartHandler(product)}>Add To Cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;

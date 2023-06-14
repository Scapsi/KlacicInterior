import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductScreen from './Screen/ProductScreen';
import { LinkContainer } from 'react-router-bootstrap';
import { Badge, Button, Form, Nav, NavbarBrand } from 'react-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './Screen/CartScreen';
import SignInScreen from './Screen/SignInScreen';
import FooterScreen from './Screen/FooterScreen';
import Footer from './component/Footer';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <div className="top">
            <p className="top-center">get 50% on seleted items|shopnow</p>
          </div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <LinkContainer to="/">
                  <NavbarBrand href="#home">klacicInteriors</NavbarBrand>
                </LinkContainer>
                <Nav className="me-auto">
                  <Nav.Link href="#interior Designs" className="border-color">
                    Interior Designs
                  </Nav.Link>
                  <Nav.Link href="#hire An Artisan" className="border-color">
                    Hire An Artisan
                  </Nav.Link>
                  <Nav.Link href="#projects" className="border-color">
                    Projects
                  </Nav.Link>
                  <Nav.Link href="#services" className="border-color">
                    Services
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-warning">Search</Button>
                </Form>
                <Nav className="ms-auto">
                  <Link to={'/signIn'} className="nav-link" sm={6}>
                    <AccountCircleIcon />
                    LogIn
                  </Link>

                  <Link to={'/cart'} className="nav-link">
                    cart
                    <ShoppingCartIcon />
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger" className="item-count">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signIn" element={<SignInScreen />} />
              <Route path="/foot" element={<FooterScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <Footer />
          <div className="text-center">All Right Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

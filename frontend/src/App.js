import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import Header from './component/Header';
import ProductScreen from './Screen/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
              <Navbar.Brand href="#home">klacicInteriors</Navbar.Brand>
              <Header />
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All Right Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

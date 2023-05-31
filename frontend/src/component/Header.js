import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="me-auto">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shops">Shops</Nav.Link>
            <Nav.Link href="#interior Designs">Interior Designs</Nav.Link>
            <Nav.Link href="#hire An Artisan">Hire An Artisan</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </div>
  );
}
export default Header;

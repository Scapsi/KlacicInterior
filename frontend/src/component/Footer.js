import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={2} sm={6}>
            <h5>COMPANY</h5>
            <Link to={'/foot'} className="foot-link">
              <p>Careers</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>Inclusion & Diversity</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>Our Stores</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>Covid-19</p>
            </Link>
          </Col>
          <Col md={2} sm={6}>
            <h5> BRAND</h5>
            <Link to={'/'} className="foot-link">
              <p>OUR STORY</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>OUR IMPACT</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>REFER-A-FRIEND</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>BRAND AMBASSADOR</p>
            </Link>
          </Col>
          <Col md={2} sm={6}>
            <h5>HELP</h5>
            <Link to={'/'} className="foot-link">
              <p>HELP & FAQ</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>TRACK MY ORDER</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>RETURNS & EXCHANGES</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>STORE LOCATOR</p>
            </Link>
          </Col>
          <Col md={2} sm={6}>
            <h5> MORE INFO</h5>
            <Link to={'/'} className="foot-link">
              <p>PRIVACY POLICY</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>TERMS OF USE</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>DISCLAIMER</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>LEGAL</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>MEDIA INQUIRIES</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>PARTNERSHIP INQUIRY</p>
            </Link>
            <Link to={'/'} className="foot-link">
              <p>CA PRIVACY RIGHTS</p>
            </Link>
          </Col>
          <Col md={4}>
            <h5>FOLLOW OUR JOURNEY</h5>
            <Link to={'/'} className="foot-link">
              <FacebookIcon />
            </Link>
            {''}
            <Link to={'/'} className="foot-link">
              <TwitterIcon />
            </Link>

            {''}
            <Link to={'/'} className="foot-link">
              <YouTubeIcon />
            </Link>

            {''}
            <Link to={'/'} className="foot-link">
              <InstagramIcon />
            </Link>
            {''}
            <Link to={'/'} className="foot-link">
              <WhatsAppIcon />
            </Link>
            {''}
            <div>
              <h6>NEED TO GET IN TOUCH?</h6>
              <Link to={'/'} className="foot-link">
                <p>info@frankuladpp.com</p>
              </Link>
              <p>
                Live chat available Monday - Friday
                <br />
                8am - 5pm PST
                <Link to={'/'} className="foot-link">
                  <LiveHelpIcon />
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row ,Button} from "react-bootstrap";
import Logo from "../../assets/Images/image_prev_ui (2).png";
import "./Header.css";
const Header = () => {
  return ( 
    <>
     
     <Container>
      <Row>
      <div className="header mt-3">
          <div className="logo col-lg-3 d-flex align-items-center">
            <img src={Logo} alt="" />
          </div>
          <div className="header-items col-lg-6">
            <Link to="/" className="link">
              <span>Tools</span>
            </Link>
            <Link to="/" className="link">
              <span>Support</span>
            </Link>
            <Link to="/" className="link">
              <span>Community</span>
            </Link>
            <Link to="/" className="link">
              <span>Pricing</span>
            </Link>
          </div>
          <div className="get-demo">
              Get a demo
          </div>
        </div>

      </Row>
       
      </Container>
     
    </>
  );
};

export default Header;

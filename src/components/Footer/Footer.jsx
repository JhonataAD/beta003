import React from "react";
import "./footer.css";
 

import {Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

    const year = new Date().getFullYear();
    return(
         <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" className="mb-4" md="6" >
                    <div className="logo"> 
                        <div>
                            <h1 className="text-white">Ecommerce</h1>
                        </div>
                    </div>
                    <p className="footer__text mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Reiciendis aspernatur error nemo quia 
                            doloremque dolore totam cumque temporibus hic. Deleniti?
                        </p>
                </Col>
                    <Col lg="3" md="3" lassname="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Melhores Categorias</h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Smart Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Sofares Modernos</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Poltronas</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Smart Watches</Link>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>


                    <Col lg="2" md="3" lassname="mb-4">
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Links Úteis</h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="login">Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>

                            </ListGroup>
                        </div>

                    </Col>


                    <Col lg="3" md="4">
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contato</h4>
                            <ListGroup className="footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-map-pin-line"></i></span> 
                                    <p>6968 Caruaru, Pernambuco, Brazil</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-phone-line"></i></span> 
                                <p>+55081996999697</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-mail-line"></i></span> 
                                <p>example123@email.com</p>
                                </ListGroupItem>
 

                            </ListGroup>
                        </div>

                    </Col>
                    <Col lg='12'>
                        <p className="footer__copyright">Copyright {year} developed by
                        Jhonata Oliveira. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
         </footer>
    )
}

export default Footer;
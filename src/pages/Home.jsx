import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products'

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap"
import "../styles/home.css";

//images
import heroImg from '../assets/images/hero-img.png'
import Services from "../services/Services"; 
import ProductList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import couterImg from '../assets/images/counter-timer-img.png'

const Home = () => {

    const [tredingProducts, setTredingProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])
    const [mobileProducts, setMobileProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])



    const year = new Date().getFullYear();
    
  useEffect (( ) => {
   const filteredTredingProducts = products.filter(
    (item) => item.category === "chair"
   );

   const filteredBestSalesProducts = products.filter(
    (item) => item.category === "sofa"
   );

   const filteredMobileProducts = products.filter(
    (item) => item.category === "mobile"
   );

   const filteredWirelessProducts = products.filter(
    (item) => item.category === "wireless"
   );

   const filteredPopularProducts = products.filter(
    (item) => item.category === "watch"
   );

   setTredingProducts(filteredTredingProducts)
   setBestSalesProducts(filteredBestSalesProducts)
   setMobileProducts(filteredMobileProducts)
   setWirelessProducts(filteredWirelessProducts)
   setPopularProducts(filteredPopularProducts)
}, []);


    return <Helmet title={" Home "}>
        <section className="hero__section">
            <Container>
                <Row>

                    <Col lg='6' mod='6'><div className="hero__content">
                        <p className="hero__subtitle">Treding product in {year}</p>
                            <h2>Make Yout Interior More Minimalistic & Modern </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur 
                                adipisicing elit. Nam quo aliquid qui sapiente adipisci 
                                necessitatibus, deserunt totam quibusdam et eligendi!</p>
                              
                                <motion.button whileTap={{scale:1.2}} className="buy__btn"> <Link to='/shop'>SHOP NOW</Link></motion.button>
                           </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Services/> 
        <section className="treding__products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">Produtos Mais Procurados</h2>
                        </Col>  
                    <ProductList data={tredingProducts} />
                </Row>
            </Container>
        </section>
        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">Mais Vendidos</h2>
                        </Col>  
                      <ProductList data={bestSalesProducts}/>   
                </Row>
            </Container>
        </section>
        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg='6' md='12' className="count__down-col">
                       <div className="clock__top-content">
                        <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                        <h3 className="text-white fs-5 mb-3">Quality Armachair</h3>
                       </div>
                        <Clock />
                        <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                           <Link to='/shop'>Visit Strore</Link> 
                        </motion.button>
                    </Col>

                    <Col lg='6' md='12' className="text-end counter__img">
                       <img src={couterImg} alt="" /> 
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="new__arrivals">
            <Container>
                <Row>
                        <Col lg='12' className="text-center mb-5">
                        <h2 className="section__title">Novos Produtos</h2>
                        </Col>  
                         <ProductList data={mobileProducts}/>
                         <ProductList data={wirelessProducts}/>
                </Row>
            </Container>
        </section>

        <section className="popular__category">
        <Container>
                <Row>
                        <Col lg='12' className="text-center mb-5">
                        <h2 className="section__title">Produtos mais Populares</h2>
                        </Col>  
                         <ProductList data={popularProducts}/>
                          
                </Row>
            </Container>
        </section>
    </Helmet>


}

export default Home;

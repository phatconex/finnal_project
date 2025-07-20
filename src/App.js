import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Row,
    Col,
    Navbar,
    Offcanvas,
    Nav,
    Form,
    Button,
    Carousel,
    Card,
    Tabs,
    Tab,
    Modal,
} from "react-bootstrap";
import "./Bootstrap.scss";
import tour from "./data";
import blog from "./blogdata";
import CardTour from "./CardTour";
import CardBlog from "./CardBlog";
const Bootstrap = () => {
    const allTourCate = Array.from(new Set(tour.map((item) => item.category)));
    const [key, setKey] = useState("tab0");
    const [show, setShow] = useState(false);
    return (
        <div>
            <Navbar expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="img/logo.svg" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                MENU
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3 gap-3">
                                <Nav.Link href="" className="hover-text-primary">
                                    HOME
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    TOURS
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    DESTINATIONS
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    BLOG
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    PAGES
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    CONTACT
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Do you want to travel...."
                                    className="me-2"
                                    aria-label="Do you want to travel...."
                                />
                                <Button
                                    variant="outline-success"
                                    className="text-primary border-primary hover-bg-primary"
                                >
                                    Search
                                </Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Carousel>
                <Carousel.Item className="carousel-before">
                    <img className="d-block w-100" src="img/slide-1.png" alt="First slide" />
                    <Carousel.Caption className="top-50 translate-middle-y">
                        <p className="font-secondary text-primary fs-2 mb-1">Travel to London</p>
                        <h3 className="fs-4 w-75 m-auto mb-3">
                            Life is a adventure, makethe best of it
                        </h3>
                        <p className="font-light">
                            Enjoythe breathtaking view of nature. Relax and cherish your dreams to
                            the fullest
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-before">
                    <img
                        className="d-block w-100 font-light"
                        src="img/slide-2.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="top-50 translate-middle-y">
                        <p className="font-secondary text-primary fs-2 mb-1">
                            Travel to Los Angeles
                        </p>
                        <h3 className="fs-4 w-75 m-auto mb-3">
                            Life is a adventure, makethe best of it
                        </h3>
                        <p className="font-light">
                            Enjoythe breathtaking view of nature. Relax and cherish your dreams to
                            the fullest
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Items for additional slides */}
            </Carousel>
            <Container className="mt-5 tour-tab">
                <div className="headline-tour">
                    <h3>Perfect destination</h3>
                    <h2>Trending destinations</h2>
                </div>
                <Tabs
                    className="border-0 justify-content-center"
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    {allTourCate.map((item, index) => (
                        <Tab key={index} eventKey={"tab" + index} title={item} className="mt-5">
                            <Row>
                                {tour.map(
                                    (tour, indexTour) =>
                                        tour.category === item && (
                                            <Col lg={3} md={6} key={indexTour} className="mb-4">
                                                <CardTour
                                                    title={tour.title}
                                                    img={tour.img}
                                                    cate={tour.category}
                                                    price={tour.price}
                                                ></CardTour>
                                            </Col>
                                        )
                                )}
                            </Row>
                        </Tab>
                    ))}
                </Tabs>
            </Container>
            <Row className="ms-0 me-0 align-items-center text-center tour-sale mt-5">
                <Col lg={6} className="ps-0 pe-0 mb-4">
                    <img src="img/banner.jpg" alt="" />
                </Col>
                <Col lg={6}>
                    <h3 className="font-secondary text-primary fs-2">Savings worldwide</h3>
                    <h2 className="fs-4 font-bold text-danger">20% OFF</h2>
                    <p className="fs-2 font-medium w-75 m-auto mb-3">
                        Discover great deals on hotels around the world
                    </p>
                    <p className="fs-1 font-light">
                        Deep discounts at our best properties worldwide!
                    </p>
                    <button onClick={() => setShow(true)}>
                        Watch more <i class="fa-solid fa-play"></i>
                    </button>
                </Col>
            </Row>
            <Modal size="lg" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>VIDEO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/NYY2ELEH0AA?si=44dnR5bq4dnK5FDz"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </Modal.Body>
            </Modal>
            <Container className="mt-5">
                <div className="headline-tour">
                    <h3>Top trending this week</h3>
                    <h2>The perfect tour</h2>
                </div>
                <Row className="mt-3">
                    <Row>
                        {tour.map(
                            (tour, indexTour) =>
                                tour.special && (
                                    <Col lg={3} md={6} key={indexTour} className="mb-4">
                                        <CardTour
                                            title={tour.title}
                                            img={tour.img}
                                            cate={tour.category}
                                            price={tour.price}
                                        ></CardTour>
                                    </Col>
                                )
                        )}
                    </Row>
                </Row>
            </Container>
            <Container className="mt-5">
                <div className="headline-tour">
                    <h3>Our blog</h3>
                    <h2>Travel tips and advice</h2>
                </div>
                <Row className="mt-3">
                    <Row>
                        {blog.map((item, index) => (
                            <Col lg={4} md={6} key={index}>
                                <CardBlog
                                    title={item.title}
                                    img={item.img}
                                    cate={item.category}
                                ></CardBlog>
                            </Col>
                        ))}
                    </Row>
                </Row>
            </Container>
            <div className="border-top mt-4 pt-2 pb-3">
                <Container className="mt-5 ">
                    <Row>
                        <Col lg={4}>
                            <img className="w-50 mb-3" src="img/logo.svg" alt="" />
                            <p className="font-light mb-0">Need help? Call us</p>
                            <p className="font-bold fs-2 text-primary">+ (406) 555-0120</p>
                            <p>
                                <i className="text-primary fa-solid fa-location-dot me-1"></i> 2972
                                Westheimer Rd. Santa Anan
                            </p>
                            <p>
                                <i className="text-primary fa-solid fa-envelope me-1"></i>
                                support@example.com
                            </p>
                        </Col>
                        <Col lg={2}>
                            <h3 className="fs-1 font-bold mb-4">OUR COMPANY</h3>
                            <ul>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        About Us
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        Careers
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        News and Blog
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        Support Policy
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        Shop By Location
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2}>
                            <h3 className="fs-1 font-bold mb-4">OUR SERVICES</h3>
                            <ul>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        Tour Guide
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        Tour Booking
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        Mobile App
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        Customer Services
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="" className="font-light hover-text-primary transtion">
                                        Account Signup
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <h3 className="fs-1 font-bold mb-4">OUR NEWSLETTER</h3>

                            <p>
                                Save up to 50% on tours! Get exclusive access to members only deals
                                by email.
                            </p>
                            <div className="border position-relative p-2">
                                <input
                                    type="text"
                                    placeholder="Email address"
                                    className="border-0"
                                />
                                <i className="fa-regular fa-paper-plane position-absolute top-50 translate-middle-y text-primary end-0 me-3"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Bootstrap;

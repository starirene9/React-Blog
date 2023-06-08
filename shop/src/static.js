import {Carousel, Container, Nav, Navbar} from "react-bootstrap";

function Navbar() {
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">⭐️ B I T N A R A</Navbar.Brand>
            <Nav className="me-auto">
                {/* 페이지 이동버튼은 링크태그 사용 */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/detail">Features</Nav.Link>
                <Nav.Link onClick={() => {
                    navigate('/contact')
                }}>Contact</Nav.Link>
                {/*    navigate(1) 앞으로 한 페이지 이동 navigate(-1) 뒤로 한 페이지 이동 : 뒤로가기 앞으로 가기랑 똑같이 작동 */}
            </Nav>
        </Container>
    </Navbar>
}

function Carousel() {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/maingbg.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Do you want to be a cabin crew?</h3>
                    <p>Join Bitna's free Online Crew Course.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/travel.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Fly all over the place</h3>
                    <p>You can work, explore, and can reach your dream.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export {Navbar, Carousel};
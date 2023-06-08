import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Carousel, Table, Card, Button, Placeholder} from 'react-bootstrap';
import './App.css';
import {useState} from "react";
import data from './data';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import contact from './contact';
import Detail from './Detail';
import {Carousel, Navbar} from './static';

// import 해서 {}안에 여러개 쓰기 쌉가능
// import {a, b} from './data.js'; // 경로는 ./부터 시작함
// 보내는 쪽은 export {a, b}

// 이미지 inline 으로 바로 넣고 싶은 경우
// 1. style={{background : 'url('+bg+')'}
// 2. import bg from './img/Qr-crew.jpg';

//public 폴더도 이미지 넣기 쌉가능
//{process.env.PUBLIC_URL + '/'} 이렇게 넣으면 배포할때 문제 없음

//  react router dom 사용하면 편안하게 페이지 구분 활용할 수 있음 -> index에서 react router dom import

function App() {

    let [info, setInfo] = useState(data);
    // info는 data 배열에 들어가있는 object 3개가 나옴 , setInfo 는 info를 사용하는 함수임
    // let [contact, setContact] = useState(contact);
    let navigate = useNavigate();
    // 페이지 이동을 도와주는 함수 : onClick 에 navigate('경로') 함수 사용

    return (
        <div className="App">
            {/* 페이지 나누기는 react router dom, 안에 내가 보여주고싶은 컴포넌트만 담아도 됨 */}

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


            <Routes>
                <Route path="/" element={
                    <>
                        <div className="container">
                            <div className="row">
                                { // {}에 데이터 배열을 가지고 있는 state info 배열에 map 을 돌리기
                                    info.map((a, i) => {
                                            return (
                                                <div className="col-md-4">
                                                    <img className="secondImg" src={info[i].src} alt={info[i].alt}
                                                         width="80%"/>
                                                    <h3>{info[i].title}</h3>
                                                    <p>{info[i].content}</p>
                                                </div>
                                            )
                                        }
                                    )}
                            </div>
                        </div>
                    </>
                }/>

                {/* url 파라미터 문법 /:작명  */}
                <Route path="/detail/:id" element={<div><Detail info={info}/></div>}/>
                <Route path="/contact" element={<div><Contact/></div>}/>
                <Route path="/about" element={<div><About/></div>}>

                    <Route path="member" element={<div>멤버입니다</div>}/>
                    <Route path="location" element={<div>위치정보입니다</div>}/>
                </Route>
                {/*nested route 언제 쓸까? 여러 유사한 페이지가 필요하고 박스 하나씩 살짝 살짝 바뀔때*/}
                {/* 위의 것(Nested Routes : 태그 안의 태그)과 아래 것 똑같은 경로임 */}
                {/*<Route path="/about/member" element={<div><About/></div>}/>*/}
                {/*<Route path="/about/location" element={<div><About/></div>}/>*/}
                <Route path="*" element={<div>없는 페이지 입니다.</div>}/>
                {/* * : 오타 포함 모든 것 */}
            </Routes>

        </div>
    );
}

//  컴포넌트 요소들
function About() {
    return (
        <div>
            <h1>회사 정보입니다.</h1>
            <Outlet></Outlet>
        {/* <Outlet>은 nested routes안의 element들을 어디에 보여줄지 표기하는 곳
         유사한 서브페이지들이 많이 필요하다면 이렇게 라우터쓰면 뒤로가기 버튼을 이용가능하다*/}
        </div>
    )
}

function Contact() {

    let [contactInfo, setContactInfo] = useState(contact);
    // contact가 배열형태니까 contactNo에서 object 하나씩 꺼낸다.
    // 맵으로 반복문을 돌리고 i 번만큼 돌린다.
    return (
        contactInfo.map(function (a, i) {
            return (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>⭐️</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Contact Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{i + 1}</td>
                        <td>{a.name}</td>
                        <td>{a.position}</td>
                        <td>{a.contact}</td>
                    </tr>
                    </tbody>
                </Table>
            );
        })
    );
}


export default App;
